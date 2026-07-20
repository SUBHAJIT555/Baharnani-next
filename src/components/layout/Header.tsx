"use client";

import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import {
  Bike,
  Box,
  CalendarDays,
  Gift,
  Laptop,
  Layers,
  Printer,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ServicesDropdown, {
  type NavServiceItem,
} from "@/components/ui/ServicesDropdown";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  accentButtonClasses,
  contactButtonIconClasses,
} from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";
import BrandLogo from "@/components/ui/BrandLogo";
import { WhatsAppOutlineIcon } from "@/components/icons/WhatsAppIcon";
import { SERVICES } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type MenuItem = {
  key: number;
  name: string;
  href: string;
  hasDropdown?: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  { key: 1, name: "Home", href: "/" },
  { key: 2, name: "About", href: "/about" },
  { key: 3, name: "Services", href: "/services", hasDropdown: true },
  { key: 4, name: "Blogs", href: "/blog" },
];

const SERVICE_META: Record<
  string,
  { Icon: typeof Laptop; color: string }
> = {
  "event-management": { Icon: CalendarDays, color: "#FFD6F8" },
  "corporate-gifts": { Icon: Gift, color: "#B6E9C8" },
  printing: { Icon: Printer, color: "#FFF8E1" },
  "creative-agency": { Icon: Laptop, color: "#E0F7FA" },
  "rider-equipment": { Icon: Bike, color: "#FFECB3" },
  "acrylic-fabrication": { Icon: Layers, color: "#C1D8FD" },
  "exhibition-stand": { Icon: Box, color: "#EDE7F6" },
};

const NAV_SERVICES: NavServiceItem[] = SERVICES.map((service) => {
  const meta = SERVICE_META[service.slug] ?? {
    Icon: Box,
    color: "#C1D8FD",
  };
  return {
    id: service.slug,
    title: service.title,
    link: service.href,
    description: service.description,
    iconColor: meta.color,
    Icon: meta.Icon,
    externalUrl: service.externalUrl,
  };
});

const linkClassName =
  "inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-30 w-full max-w-full border-b border-hairline bg-canvas/80 backdrop-blur-md supports-backdrop-filter:bg-canvas/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <div className="mr-auto">
            <Link href="/" onClick={closeMenu} className="inline-flex items-center">
              <BrandLogo priority />
            </Link>
          </div>

          <ul className="hidden list-none items-center gap-0.5 lg:flex">
            {MENU_ITEMS.map((item) =>
              item.hasDropdown ? (
                <Fragment key={item.key}>
                  <li className="relative">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={linkClassName}
                    >
                      {item.name}
                    </Link>
                  </li>
                  <li className="relative">
                    <ServicesDropdown
                      services={NAV_SERVICES}
                      onCloseMenu={closeMenu}
                    />
                  </li>
                </Fragment>
              ) : (
                <li key={item.key} className="relative">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={linkClassName}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="ml-5 hidden items-center gap-2.5 lg:flex">
            <Link
              href="/contact"
              onClick={closeMenu}
              className={accentButtonClasses("group h-10 gap-2 px-4")}
            >
              Contact
              <MessageForwardIcon className={contactButtonIconClasses} />
            </Link>
            <ThemeToggle variant="subtle" />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 pl-3 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              title="Chat on WhatsApp"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-transparent text-body transition-colors hover:bg-surface-soft hover:text-ink"
            >
              <WhatsAppOutlineIcon className="size-4.5" />
            </a>
            <ThemeToggle variant="subtle" />
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="mobile-menu-button relative inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface-soft"
            >
              <MenuToggleIcon
                open={isMenuOpen}
                className="h-6 w-6"
                duration={500}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
