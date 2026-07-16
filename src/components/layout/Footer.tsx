import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { LEGAL_LINKS, SERVICES, SITE } from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="inline-flex items-center rounded-lg border border-dashed border-hairline bg-surface-card px-3 py-1 text-caption font-medium text-body">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-hairline bg-canvas">
      <div className="mx-auto grid w-full max-w-7xl gap-10 border-x border-hairline px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex">
            <BrandLogo className="w-36" width={180} />
          </Link>
          <p className="max-w-xs text-body-sm text-muted">
            More than an advertising company — your strategic partner across
            marketing, printing, events, and brand experiences in Dubai.
          </p>
        </div>

        <div className="space-y-4">
          <FooterHeading>Company</FooterHeading>
          <ul className="space-y-2 text-body-sm text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-ink">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2 text-body-sm text-muted">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="transition-colors hover:text-ink"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <FooterHeading>Contact</FooterHeading>
          <ul className="space-y-2 text-body-sm text-muted">
            <li>{SITE.address}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-ink"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-ink"
              >
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-x border-hairline px-5 py-6 text-body-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
