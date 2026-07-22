"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { EmojiIcon, EMOJI } from "@/components/icons/EmojiIcon";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/icons/ChevronIcon";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailShareIcon,
  XTwitterIcon,
} from "@/components/icons/SocialIcons";
import { WhatsAppOutlineIcon } from "@/components/icons/WhatsAppIcon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BrandLogo from "@/components/ui/BrandLogo";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { accentButtonClasses, contactButtonIconClasses } from "@/components/ui/button";
import { useQuoteRequest } from "@/components/ui/QuoteRequestProvider";
import { SERVICES, SITE } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
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
  const { openQuoteRequest } = useQuoteRequest();

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
            className="mobile-menu-panel absolute top-0 right-0 flex h-dvh w-full max-w-105 flex-col overflow-hidden border-l border-hairline bg-canvas"
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
                  <EmojiIcon emoji={EMOJI.x} className="text-xl" />
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
                              <ChevronUpIcon className="size-4 text-muted" />
                            ) : (
                              <ChevronDownIcon className="size-4 text-muted" />
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
                                      !service.externalUrl &&
                                      pathname === service.href;
                                    const className = cn(
                                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                      serviceActive
                                        ? "bg-surface-soft font-semibold text-ink"
                                        : "text-body hover:bg-surface-soft hover:text-ink",
                                    );

                                    if (service.externalUrl) {
                                      return (
                                        <a
                                          key={service.slug}
                                          href={service.externalUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={onClose}
                                          className={className}
                                        >
                                          {service.title}
                                        </a>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={service.slug}
                                        href={service.href}
                                        onClick={onClose}
                                        className={className}
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
                              className="absolute top-1/2 left-0 h-5 w-0.75 -translate-y-1/2 rounded-full bg-brand-accent"
                              aria-hidden
                            />
                          ) : null}
                          <span>{item.name}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openQuoteRequest();
                  }}
                  className={accentButtonClasses("group mt-6 h-12 w-full")}
                >
                  Request a quote
                  <MessageForwardIcon className={contactButtonIconClasses} />
                </button>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    Appearance
                  </span>
                  <ThemeToggle variant="subtle" />
                </div>
              </nav>

              <div className="shrink-0 border-t border-hairline bg-canvas px-4 py-5 sm:px-6">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
                  <SocialIcon
                    href="https://www.facebook.com/BAHARNANIADV"
                    label="Facebook"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.instagram.com/baharnaniadv/"
                    label="Instagram"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.linkedin.com/company/baharnaniadvertisingdubai/"
                    label="LinkedIn"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon
                    href="https://x.com/BaharnaniL78749"
                    label="X (formerly Twitter)"
                  >
                    <XTwitterIcon className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon href={getWhatsAppUrl()} label="WhatsApp">
                    <WhatsAppOutlineIcon className="h-5 w-5" />
                  </SocialIcon>
                </div>

                <a
                  href={`mailto:${SITE.email}`}
                  className="mb-4 flex items-center justify-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <MailShareIcon className="size-4 shrink-0" />
                  {SITE.email}
                </a>

                <p className="text-center text-xs text-muted">
                  © {new Date().getFullYear()} {SITE.name}. All rights
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
