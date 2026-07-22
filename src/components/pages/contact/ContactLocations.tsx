"use client";

import { EmojiIcon, EMOJI } from "@/components/icons/EmojiIcon";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { SITE } from "@/lib/site";

const LIGHT_BG = `
  radial-gradient(ellipse 95% 78% at 5% 5%, rgba(220, 245, 255, 0.30), transparent 70%),
  radial-gradient(ellipse 91% 75% at 95% 5%, rgba(200, 235, 255, 0.28), transparent 72%),
  radial-gradient(ellipse 88% 72% at 50% 95%, rgba(215, 242, 255, 0.25), transparent 74%),
  radial-gradient(ellipse 85% 70% at 50% 50%, rgba(235, 250, 255, 0.20), transparent 76%),
  radial-gradient(ellipse 92% 76% at 20% 55%, rgba(205, 240, 255, 0.23), transparent 74%),
  linear-gradient(160deg, #f5fbff 0%, #edf7ff 50%, #f2f9ff 100%)
`;

const DARK_BG = `
  radial-gradient(ellipse 95% 78% at 5% 5%, rgba(80, 160, 220, 0.28), transparent 68%),
  radial-gradient(ellipse 91% 75% at 95% 5%, rgba(60, 140, 200, 0.26), transparent 70%),
  radial-gradient(ellipse 88% 72% at 50% 95%, rgba(70, 150, 210, 0.24), transparent 72%),
  radial-gradient(ellipse 85% 70% at 50% 50%, rgba(90, 170, 230, 0.18), transparent 74%),
  radial-gradient(ellipse 92% 76% at 20% 55%, rgba(55, 130, 190, 0.22), transparent 72%),
  linear-gradient(160deg, #061018 0%, #081420 50%, #071219 100%)
`;

export default function ContactLocations() {
  return (
    <section className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-4 sm:px-6 sm:py-4 lg:py-4">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{ background: LIGHT_BG }}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{ background: DARK_BG }}
            aria-hidden
          />

          <div className="relative z-10 grid items-center gap-6 px-5 py-6 sm:px-6 sm:py-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-8 lg:py-7">
            <Reveal animationNum={0} className="max-w-sm">
              <p className="text-xs font-medium text-muted sm:text-sm">
                Our location
              </p>
              <h2 className="mt-1.5 text-balance text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Visit our office
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Find us on Sheikh Zayed Road - <span className="text-ink underline decoration-brand-accent/40 decoration-dotted underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40">open for meetings, briefs, and
                production walkthroughs.</span>
              </p>
            </Reveal>

            <Reveal animationNum={1} className="w-full">
              <div>
                <div className="flex items-center gap-2.5">
                  <EmojiIcon
                    emoji={EMOJI.mapPin}
                    className="text-sm text-brand-accent"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-ink">
                      Dubai
                    </h3>
                    <p className="text-xs text-muted sm:text-sm">{SITE.name}</p>
                  </div>
                </div>

                <div className="my-3 border-t border-dashed border-hairline" />

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-wide text-muted uppercase">
                      Address
                    </p>
                    <p className="mt-0.5 text-sm text-ink">{SITE.address}</p>
                  </div>
                  <a
                    href={SITE.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-accent transition-colors hover:text-ink sm:text-sm"
                  >
                    Google Maps
                    <EmojiIcon emoji={EMOJI.arrowUpRight} className="text-sm" />
                  </a>
                </div>

                <div className="my-3 border-t border-dashed border-hairline" />

                <div className="flex items-start gap-2.5">
                  <EmojiIcon
                    emoji={EMOJI.clock}
                    className="mt-0.5 text-sm text-brand-accent"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold tracking-wide text-muted uppercase">
                      Office timing
                    </p>
                    <dl className="mt-1 space-y-0.5 text-sm">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-muted">Mon – Sat</dt>
                        <dd className="font-medium text-ink">
                          9:30 AM – 6:30 PM
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-muted">Sunday</dt>
                        <dd className="font-medium text-ink">Closed</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
