import Link from "next/link";
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
  return "#8A8577";
}

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
      <section className="bg-inkNavy px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <span
            className="inline-block rounded-sm px-3 py-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-cream"
            style={{ backgroundColor: c.accent }}
          >
            {c.categoryTag}
          </span>
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
      <section className="bg-cream px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[180px_1fr]">
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
                />
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
