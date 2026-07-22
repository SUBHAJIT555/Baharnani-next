import Image from "next/image";
import Link from "next/link";
import { EmojiIcon, EMOJI } from "@/components/icons/EmojiIcon";
import { AlertTriangleIcon } from "@/components/icons/AlertTriangleIcon";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  accentButtonClasses,
  buttonIconClasses,
  softButtonClasses,
} from "@/components/ui/button";
import SectionDivider from "@/components/ui/SectionDivider";
import { SITE } from "@/lib/site";

export default function NotFoundPage() {
  return (
    <>
    <section className="w-full bg-canvas">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-x border-hairline">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 72%)",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--primary) 28%, transparent) 1px, transparent 0)",
            backgroundSize: "10px 10px",
            maskImage:
              "radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 72%)",
            opacity: 0.8,
          }}
        />

        <div className="relative z-10 grid items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:text-left">
            <h1 className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 text-balance text-display-lg text-ink sm:text-display-xl font-pixel! lg:justify-start">
              <AlertTriangleIcon className="size-8 shrink-0 text-brand-accent sm:size-10" />
              <span>404 Page not found!</span>
            </h1>

            <p className="mt-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
              That link may be broken or the page may have moved. Head home, browse
              our services, or reach the Dubai team directly.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <Link href="/" className={accentButtonClasses("group w-full sm:w-auto")}>
                <EmojiIcon emoji={EMOJI.home} className="text-sm opacity-90" />
                Back to home
              </Link>
              <Link
                href="/services"
                className={softButtonClasses("group w-full sm:w-auto")}
              >
                Browse services
                <ArrowUpRightIcon className={buttonIconClasses} />
              </Link>
            </div>

            <div className="mt-10 border-t border-dashed border-hairline pt-8">
              <p className="text-caption font-medium tracking-wide text-muted uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-left">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-brand-accent"
                  >
                    <EmojiIcon emoji={EMOJI.mail} className="text-sm text-brand-accent" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-brand-accent"
                  >
                    <EmojiIcon emoji={EMOJI.phone} className="text-sm text-brand-accent" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2.5 text-sm font-medium text-ink transition-colors hover:text-brand-accent"
                  >
                    <EmojiIcon
                      emoji={EMOJI.mapPin}
                      className="mt-0.5 text-sm text-brand-accent"
                    />
                    <span>
                      {SITE.name}
                      <span className="mt-0.5 block font-normal text-muted">
                        {SITE.address}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-860/571 w-full">
              <Image
                src="/images/pageNotFound.svg"
                alt=""
                fill
                priority
                className="object-contain object-center"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted lg:justify-end">
              <EmojiIcon emoji={EMOJI.layers} className="text-sm text-brand-accent" />
              Looking for production? Start with our services.
            </p>
          </div>
        </div>
      </div>
    </section>
    <SectionDivider />
    </>
  );
}
