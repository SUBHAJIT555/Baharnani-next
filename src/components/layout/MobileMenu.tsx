"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ChevronUp, Mail, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BrandLogo from "@/components/ui/BrandLogo";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { accentButtonClasses, contactButtonIconClasses } from "@/components/ui/button";
import { SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Categories", path: "/services", isCategories: true },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
] as const;

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted transition-colors hover:text-ink"
    >
      {children}
    </a>
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = window.setTimeout(() => setServicesOpen(false), 200);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const preventScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mobile-menu-panel")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="mobile-menu fixed inset-0 z-130 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 cursor-pointer bg-ink/40 backdrop-blur-sm"
            style={{ touchAction: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="mobile-menu-panel absolute top-0 right-0 flex h-dvh w-full max-w-[420px] flex-col overflow-hidden border-l border-hairline bg-canvas"
            style={{ touchAction: "pan-y" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 flex-col bg-canvas">
              <div className="flex shrink-0 items-center justify-between border-b border-hairline px-4 py-3 sm:px-6">
                <Link
                  href="/"
                  onClick={onClose}
                  className="inline-flex items-center"
                >
                  <BrandLogo className="w-28" width={140} />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-ink transition-colors hover:bg-surface-soft"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="cal-scrollbar min-h-0 flex-1 overflow-y-auto bg-canvas px-4 py-6 sm:px-6">
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, index) => {
                    if ("isCategories" in item && item.isCategories) {
                      return (
                        <div key={item.name}>
                          <motion.button
                            type="button"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.05,
                              ease: "easeOut",
                            }}
                            onClick={() => setServicesOpen((open) => !open)}
                            aria-expanded={servicesOpen}
                            aria-controls="mobile-services-list"
                            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-medium text-ink transition-colors hover:bg-surface-soft"
                          >
                            <span>{item.name}</span>
                            {servicesOpen ? (
                              <ChevronUp className="h-5 w-5 shrink-0 text-muted" />
                            ) : (
                              <ChevronDown className="h-5 w-5 shrink-0 text-muted" />
                            )}
                          </motion.button>

                          <AnimatePresence>
                            {servicesOpen ? (
                              <motion.div
                                id="mobile-services-list"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 ml-2 flex flex-col gap-0.5 border-l border-hairline pl-2">
                                  {SERVICES.map((service) => {
                                    const serviceActive =
                                      pathname === service.href;
                                    return (
                                      <Link
                                        key={service.slug}
                                        href={service.href}
                                        onClick={onClose}
                                        className={cn(
                                          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                          serviceActive
                                            ? "bg-surface-soft font-semibold text-ink"
                                            : "text-body hover:bg-surface-soft hover:text-ink"
                                        )}
                                      >
                                        {service.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    const active = isActive(item.path);

                    return (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={onClose}
                        className="block w-full"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{ x: 2 }}
                          className={cn(
                            "relative flex items-center rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                            active
                              ? "bg-surface-soft font-semibold text-ink"
                              : "text-ink hover:bg-surface-soft"
                          )}
                        >
                          {active ? (
                            <span
                              className="absolute top-1/2 left-0 h-5 w-[3px] -translate-y-1/2 rounded-full bg-brand-accent"
                              aria-hidden
                            />
                          ) : null}
                          <span>{item.name}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className={accentButtonClasses("group mt-6 h-12 w-full")}
                >
                  Contact us
                  <MessageForwardIcon className={contactButtonIconClasses} />
                </Link>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    Appearance
                  </span>
                  <ThemeToggle variant="subtle" />
                </div>
              </nav>

              <div className="shrink-0 border-t border-hairline bg-canvas px-4 py-5 sm:px-6">
                <div className="mb-4 flex items-center justify-center gap-4">
                  <SocialIcon href="https://www.instagram.com/" label="Instagram">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.facebook.com/" label="Facebook">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/" label="LinkedIn">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>
                  </SocialIcon>
                </div>

                <a
                  href={`mailto:${SITE.email}`}
                  className="mb-4 flex items-center justify-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>

                <p className="text-center text-xs text-muted">
                  © {new Date().getFullYear()} {SITE.shortName}. All rights
                  reserved.
                </p>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
