"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ExternalSiteNoticeModal } from "@/components/ui/ExternalSiteNoticeModal";
import { cn } from "@/lib/utils";

export type NavServiceItem = {
  id: string;
  title: string;
  link: string;
  description?: string;
  iconColor: string;
  Icon: LucideIcon;
  externalUrl?: string;
};

type ServicesDropdownProps = {
  services: NavServiceItem[];
  onCloseMenu: () => void;
  label?: string;
};

const HOVER_DELAY_MS = 100;

/** Column layout for the Categories mega-menu */
const COLUMN_DEFS: { title: string; ids: string[] }[] = [
  {
    title: "Production",
    ids: ["exhibition-stand", "printing", "acrylic-fabrication"],
  },
  {
    title: "Merchandise",
    ids: ["corporate-gifts", "rider-equipment"],
  },
  {
    title: "Digital & Events",
    ids: ["creative-agency", "event-management"],
  },
];

const ServicesDropdown = memo(function ServicesDropdown({
  services,
  onCloseMenu,
  label = "Categories",
}: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [externalNotice, setExternalNotice] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const columns = useMemo(() => {
    const byId = new Map(services.map((s) => [s.id, s]));
    return COLUMN_DEFS.map((col) => ({
      title: col.title,
      items: col.ids
        .map((id) => byId.get(id))
        .filter((item): item is NavServiceItem => Boolean(item)),
    })).filter((col) => col.items.length > 0);
  }, [services]);

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const openDropdown = useCallback(() => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, HOVER_DELAY_MS);
  }, [clearHoverTimeout]);

  const closeDropdown = useCallback(() => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, HOVER_DELAY_MS);
  }, [clearHoverTimeout]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleServiceClick = useCallback(() => {
    setIsOpen(false);
    onCloseMenu();
  }, [onCloseMenu]);

  const handleServiceSelect = useCallback(
    (service: NavServiceItem) => {
      handleServiceClick();
      if (service.externalUrl) {
        setExternalNotice({ name: service.title, url: service.externalUrl });
      }
    },
    [handleServiceClick],
  );

  useEffect(() => {
    return () => clearHoverTimeout();
  }, [clearHoverTimeout]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft",
          isOpen && "bg-surface-soft",
        )}
      >
        {label}
        <span className="pointer-events-none text-muted">
          {isOpen ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 z-50 mt-2 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-hairline bg-canvas p-2.5 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.28)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)]"
          >
            <div className="flex h-full w-full flex-col gap-0 rounded-[10px] border border-hairline bg-surface-soft p-5 sm:flex-row dark:bg-surface-card">
              {columns.map((col, ci) => (
                <div
                  key={col.title}
                  className={cn(
                    "flex flex-1 flex-col gap-0.5",
                    ci > 0 &&
                      "border-t border-dashed border-hairline pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5",
                  )}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <p className="text-sm font-medium text-muted">{col.title}</p>
                  </div>

                  {col.items.map((service) =>
                    service.externalUrl ? (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service)}
                        className="group/item block w-full rounded-lg py-2.5 text-left transition-colors hover:bg-canvas dark:hover:bg-surface-soft"
                      >
                        <span className="flex items-start gap-2.5 px-1.5">
                          <service.Icon
                            className="mt-0.5 h-4 w-4 shrink-0 text-body transition-colors group-hover/item:text-brand-accent"
                            strokeWidth={2}
                          />
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink transition-colors group-hover/item:text-brand-accent">
                              {service.title}
                            </span>
                            {service.description ? (
                              <span className="mt-0.5 block text-[12px] leading-snug text-muted">
                                {service.description}
                              </span>
                            ) : null}
                          </span>
                        </span>
                      </button>
                    ) : (
                      <Link
                        key={service.id}
                        href={service.link}
                        onClick={handleServiceClick}
                        className="group/item block rounded-lg py-2.5 transition-colors hover:bg-canvas dark:hover:bg-surface-soft"
                      >
                        <span className="flex items-start gap-2.5 px-1.5">
                          <service.Icon
                            className="mt-0.5 h-4 w-4 shrink-0 text-body transition-colors group-hover/item:text-brand-accent"
                            strokeWidth={2}
                          />
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink transition-colors group-hover/item:text-brand-accent">
                              {service.title}
                            </span>
                            {service.description ? (
                              <span className="mt-0.5 block text-[12px] leading-snug text-muted">
                                {service.description}
                              </span>
                            ) : null}
                          </span>
                        </span>
                      </Link>
                    ),
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ExternalSiteNoticeModal
        open={Boolean(externalNotice)}
        onClose={() => setExternalNotice(null)}
        serviceName={externalNotice?.name ?? ""}
        externalUrl={externalNotice?.url ?? ""}
      />
    </div>
  );
});

export default ServicesDropdown;
