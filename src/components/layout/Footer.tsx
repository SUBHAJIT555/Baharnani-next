import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import FooterNewsletter from "@/components/layout/FooterNewsletter";
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
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <Link href="/" className="inline-flex">
              <BrandLogo className="w-36" width={180} />
            </Link>
            <p className="max-w-xs text-body-sm text-muted">
              More than an advertising company — your strategic partner across
              marketing, printing, events, and brand experiences in Dubai.
            </p>
          </div>
          <FooterNewsletter />
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

       

        <div className="space-y-8">
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

          <div className="space-y-4">
            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-2 text-body-sm text-muted">
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
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-x border-hairline px-5 py-6 text-body-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            developed with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline align-middle text-brand-accent"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>{" "}
            by{" "}
            <a
              href="https://subhajit-dhali.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink transition-colors hover:underline"
            >
              subhajit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
