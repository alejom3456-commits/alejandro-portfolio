import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ColorStripe from "@/components/ColorStripe";
import ExhibitTile from "@/components/ExhibitTile";
import { BackArrowIcon, ArrowRightIcon } from "@/components/Icons";
import { cases, getCase, getAdjacentCase, type CaseSection } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getCase(params.slug);
  if (!c) return {};
  return {
    title: `${c.title} — Alejandro Morales`,
    description: c.homeDescription,
  };
}

function tagColor(tag: CaseSection["tag"], accent: string) {
  if (tag === "RESULT — TEAM") return "#E2492B";
  if (tag === "MY ROLE") return accent;
  if (tag === "CHALLENGE") return "#4A4740";
  if (tag === "INSIGHT") return "#6B7280";
  return "#8A8577"; // CONTEXT
}

// Generic bottle/tube silhouettes in brand-associated colors — drawn shapes,
// not reproductions of any product photo, so they're safe to use as decoration.
type BottleKind = "dropper" | "pump" | "tube" | "spray";

function ProductSilhouette({ kind, body, cap }: { kind: BottleKind; body: string; cap: string }) {
  if (kind === "pump") {
    return (
      <svg viewBox="0 0 60 100" width="100%" height="100%">
        <rect x="14" y="30" width="32" height="60" rx="6" fill={body} />
        <rect x="20" y="14" width="20" height="18" rx="3" fill={cap} />
        <rect x="18" y="8" width="20" height="6" rx="2" fill={cap} />
        <rect x="26" y="0" width="8" height="10" rx="2" fill={cap} />
      </svg>
    );
  }
  if (kind === "dropper") {
    return (
      <svg viewBox="0 0 60 100" width="100%" height="100%">
        <rect x="16" y="34" width="28" height="56" rx="5" fill={body} />
        <rect x="20" y="14" width="20" height="22" rx="3" fill={cap} />
        <path d="M26 2 L34 2 L32 16 L28 16 Z" fill={cap} />
      </svg>
    );
  }
  if (kind === "tube") {
    return (
      <svg viewBox="0 0 60 100" width="100%" height="100%">
        <path d="M18 30 L42 30 L38 92 Q30 98 22 92 Z" fill={body} />
        <rect x="20" y="10" width="20" height="22" rx="4" fill={cap} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 100" width="100%" height="100%">
      <rect x="14" y="26" width="32" height="64" rx="8" fill={body} />
      <rect x="22" y="10" width="16" height="18" rx="3" fill={cap} />
      <rect x="29" y="-1" width="14" height="10" rx="2" fill={cap} transform="rotate(18 29 4)" />
    </svg>
  );
}

const RAIN_ITEMS: { kind: BottleKind; body: string; cap: string; left: string; size: number; delay: string; duration: string }[] = [
  { kind: "dropper", body: "#3E8FD0", cap: "#EDEDED", left: "4%", size: 46, delay: "0s", duration: "17s" }, // La Roche-Posay blue
  { kind: "tube", body: "#1FA79A", cap: "#F4EEDF", left: "18%", size: 40, delay: "5s", duration: "20s" }, // Vichy teal
  { kind: "pump", body: "#F4EEDF", cap: "#1FA79A", left: "34%", size: 38, delay: "10s", duration: "16s" }, // CeraVe white/teal
  { kind: "spray", body: "#F2941A", cap: "#F4EEDF", left: "50%", size: 44, delay: "2s", duration: "21s" }, // Anthelios orange
  { kind: "dropper", body: "#A85C1E", cap: "#1B1B18", left: "66%", size: 36, delay: "13s", duration: "18s" }, // SkinCeuticals amber
  { kind: "pump", body: "#F4EEDF", cap: "#3E8FD0", left: "80%", size: 42, delay: "7s", duration: "19s" }, // CeraVe white/blue
  { kind: "tube", body: "#C8102E", cap: "#F4EEDF", left: "92%", size: 38, delay: "3s", duration: "22s" }, // Vichy Collagen red
];

// EPA's own brand characters — illustrations made by Alejandro for the Riiing/EPA
// thesis project — used here as a gentle floating decoration on the case hero.
const EPA_ITEMS: { src: string; left: string; top: string; width: number; delay: string; duration: string; rotate: number }[] = [
  { src: "/images/epa/epa-thumbsup.png", left: "3%", top: "8%", width: 66, delay: "0s", duration: "6s", rotate: -6 },
  { src: "/images/epa/epa-pointer.png", left: "13%", top: "58%", width: 60, delay: "1.2s", duration: "7s", rotate: 4 },
  { src: "/images/epa/epa-headphones.png", left: "89%", top: "10%", width: 52, delay: "0.6s", duration: "6.5s", rotate: -4 },
  { src: "/images/epa/epa-wave-trio.png", left: "72%", top: "62%", width: 120, delay: "2s", duration: "8s", rotate: 2 },
  { src: "/images/epa/epa-chef.png", left: "94%", top: "55%", width: 54, delay: "1.6s", duration: "7.5s", rotate: 5 },
  { src: "/images/epa/epa-family.png", left: "6%", top: "78%", width: 70, delay: "0.9s", duration: "6.8s", rotate: -3 },
  { src: "/images/epa/epa-laura-pose.png", left: "82%", top: "32%", width: 58, delay: "1.4s", duration: "7.2s", rotate: 3 },
  { src: "/images/epa/epa-lineup.png", left: "44%", top: "5%", width: 92, delay: "0.4s", duration: "7.8s", rotate: -2 },
  { src: "/images/epa/epa-headphones.png", left: "24%", top: "86%", width: 48, delay: "1.7s", duration: "6.4s", rotate: 4 },
  { src: "/images/epa/epa-chef.png", left: "56%", top: "82%", width: 50, delay: "0.8s", duration: "7.3s", rotate: -5 },
  { src: "/images/epa/epa-thumbsup.png", left: "40%", top: "38%", width: 44, delay: "2.2s", duration: "6.9s", rotate: 3 },
  { src: "/images/epa/epa-pointer.png", left: "60%", top: "14%", width: 42, delay: "1.1s", duration: "7.6s", rotate: -4 },
];

// More EPA characters "hanging" alongside the write-up itself, in the page
// margins beside the text column — desktop only, so they never sit on top
// of the copy on narrow screens.
const EPA_BODY_ITEMS: { src: string; left: string; top: string; width: number; delay: string; duration: string; rotate: number }[] = [
  { src: "/images/epa/epa-pointer.png", left: "2%", top: "4%", width: 62, delay: "0.3s", duration: "7s", rotate: -4 },
  { src: "/images/epa/epa-thumbsup.png", left: "94%", top: "10%", width: 58, delay: "1.1s", duration: "6.6s", rotate: 5 },
  { src: "/images/epa/epa-headphones.png", left: "3%", top: "30%", width: 50, delay: "0.7s", duration: "7.4s", rotate: -3 },
  { src: "/images/epa/epa-laura-pose.png", left: "93%", top: "36%", width: 60, delay: "1.6s", duration: "6.9s", rotate: 4 },
  { src: "/images/epa/epa-chef.png", left: "2%", top: "56%", width: 52, delay: "0.9s", duration: "7.1s", rotate: -5 },
  { src: "/images/epa/epa-family.png", left: "92%", top: "62%", width: 66, delay: "1.3s", duration: "6.7s", rotate: 3 },
  { src: "/images/epa/epa-wave-trio.png", left: "1%", top: "82%", width: 96, delay: "0.5s", duration: "7.6s", rotate: -2 },
  { src: "/images/epa/epa-thumbsup.png", left: "92%", top: "88%", width: 56, delay: "1.8s", duration: "6.5s", rotate: 4 },
  { src: "/images/epa/epa-lineup.png", left: "3%", top: "17%", width: 82, delay: "0.6s", duration: "7.3s", rotate: -2 },
  { src: "/images/epa/epa-wave-trio.png", left: "88%", top: "23%", width: 86, delay: "1.4s", duration: "6.8s", rotate: 2 },
  { src: "/images/epa/epa-pointer.png", left: "4%", top: "46%", width: 50, delay: "0.4s", duration: "7.5s", rotate: -3 },
  { src: "/images/epa/epa-headphones.png", left: "89%", top: "49%", width: 48, delay: "1.2s", duration: "6.7s", rotate: 4 },
  { src: "/images/epa/epa-chef.png", left: "3%", top: "70%", width: 50, delay: "0.8s", duration: "7.2s", rotate: -4 },
  { src: "/images/epa/epa-laura-pose.png", left: "89%", top: "75%", width: 56, delay: "1.5s", duration: "6.9s", rotate: 3 },
  { src: "/images/epa/epa-family.png", left: "4%", top: "94%", width: 62, delay: "1.0s", duration: "7.4s", rotate: -2 },
];

// The full Riiing/EPA pitch deck — hung here in its native landscape
// aspect ratio so nothing gets cropped the way it did in the portrait
// exhibit tiles.
const EPA_SLIDES: { src: string; caption: string }[] = [
  { src: "/images/epa/slides/slide-01.jpg", caption: "01 — Title" },
  { src: "/images/epa/slides/slide-02.jpg", caption: "02 — Origin: Antonio" },
  { src: "/images/epa/slides/slide-03.jpg", caption: "03 — Why it matters" },
  { src: "/images/epa/slides/slide-04.jpg", caption: "04 — Hypothesis 1 (kids + parents) — invalidated" },
  { src: "/images/epa/slides/slide-05.jpg", caption: "05 — Client archetype: Laura" },
  { src: "/images/epa/slides/slide-06.jpg", caption: "06 — Archetype validation" },
  { src: "/images/epa/slides/slide-07.jpg", caption: "07 — Solution hypothesis: the card game" },
  { src: "/images/epa/slides/slide-08.jpg", caption: "08 — Psychologist validation" },
  { src: "/images/epa/slides/slide-09.jpg", caption: "09 — The four card categories" },
  { src: "/images/epa/slides/slide-10.jpg", caption: "10 — Card examples & how the game is won" },
  { src: "/images/epa/slides/slide-11.jpg", caption: "11 — Play-test validation, round 1" },
  { src: "/images/epa/slides/slide-12.jpg", caption: "12 — Play-test validation, round 2" },
  { src: "/images/epa/slides/slide-13.jpg", caption: "13 — Overall validation summary" },
  { src: "/images/epa/slides/slide-14.jpg", caption: "14 — B2B market exploration" },
  { src: "/images/epa/slides/slide-15.jpg", caption: "15 — What's next for EPA" },
  { src: "/images/epa/slides/slide-16.jpg", caption: "16 — Closing" },
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCase(params.slug);
  if (!c) return notFound();
  const next = getAdjacentCase(params.slug);

  return (
    <main>
      <ColorStripe />

      {/* HEADER */}
      <header className="flex items-center justify-between bg-inkNavy px-6 py-4 md:px-10">
        <span className="font-grotesk text-sm font-bold uppercase tracking-[0.14em] text-cream">
          Alejandro Morales
        </span>
        <Link
          href="/"
          className="flex items-center gap-2 font-grotesk text-[12px] font-semibold uppercase tracking-[0.1em] text-cream/70 hover:text-cream"
        >
          <BackArrowIcon /> Back to work
        </Link>
      </header>

      {/* CASE HERO */}
      <section className="relative overflow-hidden bg-inkNavy px-6 py-14 md:px-10 md:py-20">
        {c.heroImage && (
          <>
            <Image
              src={c.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,24,31,0.65) 0%, rgba(20,24,31,0.88) 55%, #14181F 100%)",
              }}
            />
          </>
        )}
        {c.slug === "loreal" && (
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
            {RAIN_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rain-chip"
                style={{
                  left: item.left,
                  width: item.size,
                  height: Math.round(item.size * (100 / 60)),
                  animationDelay: item.delay,
                  animationDuration: item.duration,
                }}
              >
                <ProductSilhouette kind={item.kind} body={item.body} cap={item.cap} />
              </div>
            ))}
          </div>
        )}
        {c.slug === "epa" && (
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
            {EPA_ITEMS.map((item, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={item.src}
                alt=""
                className="epa-chip"
                style={{
                  left: item.left,
                  top: item.top,
                  width: item.width,
                  animationDelay: item.delay,
                  animationDuration: item.duration,
                  ["--epa-rotate" as string]: `${item.rotate}deg`,
                }}
              />
            ))}
          </div>
        )}
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-4">
            <span
              className="inline-block rounded-sm px-3 py-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-cream"
              style={{ backgroundColor: c.accent }}
            >
              {c.categoryTag}
            </span>
            {c.logo && (
              <div className="rounded-sm bg-cream px-4 py-2.5">
                <div className="relative h-6 w-24">
                  <Image src={c.logo} alt={`${c.client} logo`} fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
          <h1 className="mt-6 font-grotesk text-[34px] font-bold leading-[1.1] text-cream md:text-[46px]">
            {c.title}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[17px] italic leading-relaxed text-cream/75">
            {c.subtitle}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8 md:grid-cols-4">
            {[
              ["Client", c.client],
              ["Role", c.role],
              ["Timeline", c.timeline],
              ["Category", c.category],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span className="font-grotesk text-[10px] font-bold uppercase tracking-[0.12em] text-cream/40">
                  {label}
                </span>
                <span className="font-grotesk text-[13.5px] font-medium text-cream/85">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY: sticky rail + sections */}
      <section className="relative overflow-hidden bg-cream px-6 py-16 md:px-10 md:py-20">
        {c.slug === "epa" && (
          <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block" aria-hidden="true">
            {EPA_BODY_ITEMS.map((item, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={item.src}
                alt=""
                className="epa-chip epa-chip-body"
                style={{
                  left: item.left,
                  top: item.top,
                  width: item.width,
                  animationDelay: item.delay,
                  animationDuration: item.duration,
                  ["--epa-rotate" as string]: `${item.rotate}deg`,
                }}
              />
            ))}
          </div>
        )}
        <div className="relative z-10 mx-auto grid max-w-5xl gap-12 md:grid-cols-[180px_1fr]">
          {/* Sticky field rail */}
          <aside className="hidden md:block">
            <div className="sticky top-[28px] flex flex-col gap-4">
              {c.sections.map((s) => (
                <a
                  key={s.title}
                  href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-inkSecondary hover:text-ink"
                  style={{ borderLeft: `2px solid ${tagColor(s.tag, c.accent)}`, paddingLeft: "10px" }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Sections */}
          <div className="flex flex-col gap-14">
            {c.sections.map((s) => (
              <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-8">
                <span
                  className="mb-4 inline-block rounded-sm px-2.5 py-1 font-grotesk text-[10px] font-bold uppercase tracking-[0.1em] text-cream"
                  style={{ backgroundColor: tagColor(s.tag, c.accent) }}
                >
                  {s.tag}
                </span>
                <h2 className="mb-4 font-grotesk text-[22px] font-bold text-ink">{s.title}</h2>
                <p className="max-w-2xl font-serif text-[16px] leading-relaxed text-inkSoft">{s.body}</p>

                {s.images && s.images.length > 0 && (
                  <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3">
                    {s.images.map((img) => (
                      <ExhibitTile
                        key={img.letter}
                        letter={img.letter}
                        label={img.label}
                        color={c.accent}
                        isVideo={img.isVideo}
                        src={img.src}
                        videoSrc={img.videoSrc}
                        landscape={img.landscape}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITS APPENDIX */}
      {c.appendixExhibits && c.appendixExhibits.length > 0 && (
        <section className="bg-creamAlt px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-8 font-grotesk text-[12px] font-bold uppercase tracking-[0.12em] text-inkSecondary">
              Exhibits Appendix
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {c.appendixExhibits.map((img) => (
                <ExhibitTile
                  key={img.letter}
                  letter={img.letter}
                  label={img.label}
                  color={c.accent}
                  isVideo={img.isVideo}
                  src={img.src}
                  videoSrc={img.videoSrc}
                  landscape={img.landscape}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FULL PRESENTATION — landscape, native aspect ratio */}
      {c.slug === "epa" && (
        <section className="bg-inkNavy px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-2 font-grotesk text-[12px] font-bold uppercase tracking-[0.12em] text-cream/50">
              Full Presentation
            </h3>
            <p className="mb-8 max-w-2xl font-serif text-[14.5px] leading-relaxed text-cream/70">
              The full Riiing / EPA pitch deck, shown here at its original landscape proportions
              rather than cropped into a portrait tile.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {EPA_SLIDES.map((slide) => (
                <div key={slide.src} className="overflow-hidden rounded-sm border border-cream/10 bg-black">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={slide.src}
                      alt={slide.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <span className="font-grotesk text-[10.5px] uppercase tracking-[0.08em] text-cream/60">
                      {slide.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER NAV */}
      <footer className="flex flex-col gap-6 bg-inkNavy px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-grotesk text-[12px] font-semibold uppercase tracking-[0.1em] text-cream/60 hover:text-cream"
        >
          <BackArrowIcon /> All work
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="flex items-center gap-2 font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-cream hover:text-coral"
        >
          Next case — {next.title} <ArrowRightIcon />
        </Link>
      </footer>
    </main>
  );
}
