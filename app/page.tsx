import Link from "next/link";
import ColorStripe from "@/components/ColorStripe";
import FieldLabel from "@/components/FieldLabel";
import Stamp from "@/components/Stamp";
import ExhibitTile from "@/components/ExhibitTile";
import { ArrowRightIcon } from "@/components/Icons";
import { cases } from "@/lib/cases";

const galleryPicks = [
  { case: "loreal", image: cases[0].sections[4].images?.[0] }, // POS execution photo
  { case: "loreal", image: cases[0].sections[4].images?.[1] }, // activation video
  { case: "epa", image: cases[1].sections[3].images?.[0] }, // EPA prototype photo
  { case: "epa", image: cases[1].sections[4].images?.[0] }, // user testing video
  { case: "trivela", image: cases[2].sections[2].images?.[0] }, // content reel video
  { case: "trivela", image: cases[2].sections[2].images?.[1] }, // behind the scenes video
];

const accentByCase: Record<string, string> = {
  loreal: "#2B4EA8",
  epa: "#E2492B",
  trivela: "#D9A62E",
};

export default function Home() {
  return (
    <main>
      <ColorStripe />

      {/* HEADER */}
      <header className="flex items-center justify-between bg-inkNavy px-6 py-4 md:px-10">
        <span className="font-grotesk text-sm font-bold uppercase tracking-[0.14em] text-cream">
          Alejandro Morales
        </span>
        <nav className="hidden gap-8 font-grotesk text-[12px] font-semibold uppercase tracking-[0.1em] text-cream/70 md:flex">
          <a href="#proof" className="hover:text-cream">Work</a>
          <a href="#approach" className="hover:text-cream">Approach</a>
          <a href="#next-steps" className="hover:text-cream">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-inkNavy px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <FieldLabel color="#E2492B" className="mb-6">Objective</FieldLabel>
            <h1 className="font-grotesk text-[38px] font-bold leading-[1.08] text-cream md:text-[56px]">
              Marketing that has to work in{" "}
              <em className="font-serif italic text-coral">the real world.</em>
            </h1>
            <p className="mt-6 max-w-lg font-serif text-[17px] leading-relaxed text-cream/75">
              I'm graduating in September 2026 from Comunicación Social y Publicidad
              in Bogotá. Before that first full-time offer, I've already run trade
              marketing at L'Oréal, taken a product from interview notes to a
              validated physical game, and built an independent media brand from
              zero. This is the paper trail.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#proof"
                className="inline-flex items-center gap-2 rounded-sm bg-coral px-6 py-3 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-cream transition hover:bg-coral/85"
              >
                See the proof <ArrowRightIcon />
              </a>
              <a
                href="#next-steps"
                className="font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-cream/70 hover:text-cream"
              >
                Get in touch →
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[280px] items-end justify-center overflow-hidden rounded-sm">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(155deg, #2B4EA8, #14181F 75%)" }}
            />
            <div className="absolute right-4 top-4">
              <Stamp size={54} filled />
            </div>
            <span className="relative z-10 mb-4 font-grotesk text-[11px] uppercase tracking-[0.14em] text-cream/60">
              Portrait — pending
            </span>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="border-b border-rule bg-cream px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <FieldLabel>Audience</FieldLabel>
          <p className="max-w-2xl font-serif text-[15px] leading-relaxed text-inkSoft">
            Built for recruiters and hiring managers in brand, trade, and sports
            marketing evaluating an entry-level candidate with real retail and
            consumer-insight execution — not just coursework.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="bg-cream px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FieldLabel className="mb-10">Proof</FieldLabel>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm border border-rule bg-creamCard transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-[6px] w-full" style={{ backgroundColor: c.accent }} />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <span
                    className="w-fit rounded-sm px-2.5 py-1 font-grotesk text-[10px] font-bold uppercase tracking-[0.1em] text-cream"
                    style={{ backgroundColor: c.accent }}
                  >
                    {c.exhibitLabel}
                  </span>
                  <h3 className="font-grotesk text-[20px] font-bold leading-snug text-ink">
                    {c.title}
                  </h3>
                  <p className="font-serif text-[14.5px] leading-relaxed text-inkSoft">
                    {c.homeDescription}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-grotesk text-[12px] font-bold uppercase tracking-[0.08em] text-ink">
                    <span className="underline-sweep-wrap relative">
                      Read the case
                      <span className="underline-sweep" style={{ color: c.accent }} />
                    </span>
                    <ArrowRightIcon color="#1B1B18" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITS — SELECTED FRAMES */}
      <section className="bg-creamAlt px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FieldLabel color="#D9A62E" className="mb-10">
            Exhibits — Selected Frames
          </FieldLabel>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {galleryPicks.map((pick, i) =>
              pick.image ? (
                <ExhibitTile
                  key={i}
                  letter={pick.image.letter}
                  label={pick.image.label}
                  color={accentByCase[pick.case]}
                  isVideo={pick.image.isVideo}
                />
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-cobalt px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <FieldLabel color="#F4EEDF" className="mb-8">Approach</FieldLabel>
          <p className="font-serif text-[24px] italic leading-relaxed text-cream md:text-[30px]">
            "I don't start from a mood board. I start from the shelf, the
            interview transcript, or the comment section — wherever the actual
            evidence about a real person's decision lives — and build the brand
            idea from there."
          </p>
        </div>
      </section>

      {/* APPENDIX */}
      <section className="bg-cream px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FieldLabel className="mb-10">Appendix</FieldLabel>
          <dl className="grid gap-x-10 gap-y-6 border-t border-rule pt-8 md:grid-cols-2">
            {[
              ["Education", "Comunicación Social — Publicidad, Pontificia Universidad Javeriana (grad. Sept 2026)"],
              ["Core experience", "Trade Marketing, Brand Marketing, Shopper Marketing, Business Development"],
              ["Tools", "Excel, PowerPoint, Canva, Photoshop, Illustrator, Premiere, CapCut"],
              ["Certifications", "Sports Marketing, Sports Sponsorship, Creative Content"],
              ["Languages", "Spanish (native), English (B2, working professionally)"],
              ["Work authorization", "Authorized to work in the U.S. — no sponsorship required"],
            ].map(([term, desc]) => (
              <div key={term} className="flex flex-col gap-1.5 border-b border-rule pb-5">
                <dt className="font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-inkSecondary">
                  {term}
                </dt>
                <dd className="font-serif text-[14.5px] leading-relaxed text-inkSoft">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* NEXT STEPS / FOOTER */}
      <footer id="next-steps" className="bg-inkNavy px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <FieldLabel color="#E2492B" className="mb-6">Next Steps</FieldLabel>
            <h2 className="max-w-xl font-grotesk text-[28px] font-bold leading-tight text-cream md:text-[34px]">
              Open to entry-level marketing roles in Raleigh–Durham and beyond.
            </h2>
            <a
              href="mailto:hello@alejandromorales.com"
              className="mt-6 inline-block font-grotesk text-[15px] font-semibold text-cream underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
            >
              hello@alejandromorales.com
            </a>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <span className="font-script text-[32px] text-cream">Alejandro Morales</span>
            <span className="font-grotesk text-[11px] uppercase tracking-[0.14em] text-cream/40">
              v.1 — Sept 2026
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
