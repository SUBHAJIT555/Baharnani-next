import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import FooterNewsletter from "@/components/layout/FooterNewsletter";
import FooterAnimatedPrelude from "@/components/layout/FooterAnimatedPrelude";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { LEGAL_LINKS, SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-medium text-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
      {children}
    </h3>
  );
}

const footerLinkClass = cn(
  "group inline-flex items-center gap-1 text-muted",
  "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:text-brand-accent",
);

const footerLinkIconClass = cn(
  "size-3.5 shrink-0 text-brand-accent",
  "opacity-0 -translate-x-1 translate-y-1",
  "transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0",
);

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const icon = <ArrowUpRightIcon className={footerLinkIconClass} />;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClass}
      >
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={footerLinkClass}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-canvas">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 border-x border-hairline px-5 pt-14 pb-8 sm:gap-10 sm:px-6 lg:grid-cols-4 lg:pt-16 lg:pb-10">
        <div className="col-span-2 space-y-6 lg:col-span-1">
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
          <ul className="space-y-2 text-body-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <FooterLink href={service.href}>{service.title}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-2 text-body-sm">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="/blog">Blogs</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-2 text-body-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-8 lg:col-span-1 lg:grid-cols-1 lg:gap-8">
          <div className="space-y-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-2 text-body-sm text-muted">
              <li>
                <FooterLink href={SITE.googleMapsUrl} external>
                  {SITE.address}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${SITE.email}`} external>
                  {SITE.email}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`wa.me:${SITE.whatsappNumber}`} external>
                  WhatsApp
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  external
                >
                  {SITE.phone}
                </FooterLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <FooterHeading>Social</FooterHeading>
            <ul className="space-y-2 text-body-sm">
              <li>
                <FooterLink
                  href="https://www.facebook.com/BAHARNANIADV"
                  external
                >
                  Facebook
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="https://www.instagram.com/baharnaniadv/"
                  external
                >
                  Instagram
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="https://www.linkedin.com/company/baharnaniadvertisingdubai/"
                  external
                >
                  LinkedIn
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="https://x.com/BaharnaniL78749"
                  external
                >
                  X (formerly Twitter)
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FooterAnimatedPrelude />

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 border-x border-hairline px-5 py-6 text-center text-body-sm text-muted sm:flex-row sm:gap-6 sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Developed with{" "}
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
              className={cn(
                "group inline-flex items-center gap-1 text-ink",
                "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:text-brand-accent",
              )}
            >
              subhajit
              <ArrowUpRightIcon className={footerLinkIconClass} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
