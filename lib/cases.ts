export type ExhibitImage = {
  letter: string;
  label: string;
  isVideo?: boolean;
};

export type CaseSection = {
  title: string;
  tag: "CONTEXT" | "MY ROLE" | "RESULT — TEAM";
  body: string;
  images?: ExhibitImage[];
};

export type CaseStudy = {
  slug: string;
  caseNumber: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  category: string;
  accent: string; // hex — this case's identity color
  exhibitLabel: string; // used on the homepage exhibit card, e.g. "EXHIBIT A"
  homeDescription: string;
  sections: CaseSection[];
  appendixExhibits?: ExhibitImage[];
};

// Tag color logic (kept consistent across every case):
//  CONTEXT        -> neutral gray  (#8A8577) — set in the page renderer
//  MY ROLE        -> this case's own accent color
//  RESULT — TEAM  -> always coral (#E2492B) — a consistent "verify before publishing" flag
//                    across the whole site, regardless of the case's own color.

export const cases: CaseStudy[] = [
  {
    slug: "loreal",
    caseNumber: "Case 01 of 03",
    categoryTag: "CASE 01 — BRAND & TRADE MARKETING",
    title: "L'Oréal — Dermatological Beauty",
    subtitle: "Trade Marketing & Brand Activation · CeraVe UV Immune+ Gift-With-Purchase",
    client: "La Roche-Posay, CeraVe, Vichy, SkinCeuticals",
    role: "Trade Marketing & BD Intern",
    timeline: "[pending]",
    category: "Brand & Trade Marketing",
    accent: "#2B4EA8",
    exhibitLabel: "EXHIBIT A — TRADE MARKETING",
    homeDescription:
      "Trade marketing execution at the shelf for La Roche-Posay, CeraVe, Vichy and SkinCeuticals — down to the Gift-With-Purchase mechanic.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "La Roche-Posay and CeraVe needed to defend and grow shelf visibility across pharmacy channels — Medipiel, Bella Piel, and Farmatodo — in a category where competing brands were investing heavily in point-of-sale presence. [Specific business context — to confirm]",
      },
      {
        title: "Challenge",
        tag: "CONTEXT",
        body: "Converting shelf attention into a trial purchase for CeraVe UV Immune+ specifically, inside a promotional calendar already crowded with other brands' activations. [Specific brief — to confirm]",
      },
      {
        title: "Insight",
        tag: "CONTEXT",
        body: "Dermo-cosmetic shoppers often decide at the shelf, without a pharmacist's guidance — visibility and a compelling reason to try something new, like a Gift-With-Purchase, directly shape which product they pick up. [Insight source — to confirm]",
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "Translated the brand's national activation calendar into a retail-ready plan per channel — what materials each store format needed, how the GWP mechanic would work at checkout, and how to keep visual consistency across very different store environments.",
        images: [
          { letter: "A", label: "GWP mechanic — concept photo" },
          { letter: "B", label: "PLV / glorifier concept sketch" },
        ],
      },
      {
        title: "Execution",
        tag: "MY ROLE",
        body: "Coordinated distribution and setup of POP/PLV materials and glorifiers across pharmacy channels, tracked sell-in and sell-out, and consolidated activation reporting for the brand team. [Specific tasks — expand with real detail]",
        images: [
          { letter: "C", label: "Point-of-sale execution — photo" },
          { letter: "D", label: "Activation walkthrough — video", isVideo: true },
        ],
      },
      {
        title: "Results",
        tag: "RESULT — TEAM",
        body: "Retail coverage and visibility metrics for the activation are reported at the brand level. [Pending: which figures are accurate and shareable, and what part of the result reflects the existing brand strategy versus my specific contribution.]",
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "Brand strategy is only as strong as its execution at the shelf — the gap between a campaign concept and what a shopper actually sees is where most of the real work happens.",
      },
    ],
    appendixExhibits: [
      { letter: "E", label: "Shelf before / after — photo" },
      { letter: "F", label: "Sell-in tracker sample — photo" },
      { letter: "G", label: "Team activation day — video", isVideo: true },
      { letter: "H", label: "Brand reporting excerpt — photo" },
    ],
  },
  {
    slug: "epa",
    caseNumber: "Case 02 of 03",
    categoryTag: "CASE 02 — CONSUMER INSIGHT & PRODUCT",
    title: "EPA",
    subtitle: "Consumer Insight → Product Development · a project within Riiing",
    client: "Riiing (academic / social entrepreneurship project)",
    role: "Research, concept & product development",
    timeline: "[pending]",
    category: "Consumer Insight & Product",
    accent: "#E2492B",
    exhibitLabel: "EXHIBIT B — INSIGHT & PRODUCT",
    homeDescription:
      "A card game for anticipatory anxiety, built from real interviews through to a validated physical product.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "University students regularly experience anticipatory anxiety — worry about a future social or academic situation before it happens — with few informal, non-clinical tools designed specifically around that moment. [Confirm exact framing used in the original brief]",
      },
      {
        title: "Insight",
        tag: "CONTEXT",
        body: "[Pending: 1-2 concrete findings from the interviews — what students said, in their own words, about how they cope with anticipatory anxiety today]. Interviews and audience definition shaped who the game was ultimately designed for.",
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "Reframed the problem from 'reduce anxiety' (too broad, too clinical) to 'give students a low-stakes social structure for the moments that cause it' — which pointed toward a game format rather than an app or a wellness campaign.",
      },
      {
        title: "Creative Solution",
        tag: "MY ROLE",
        body: "EPA: a physical card game built around four categories — Icebreaker, Challenge, Deep Talk, and Mystery — designed to work as a social ritual, not a therapy tool.",
        images: [{ letter: "A", label: "EPA prototype — photo" }],
      },
      {
        title: "Product Development",
        tag: "MY ROLE",
        body: "Took the concept from paper prototype to a physical card deck, iterating the four categories and the rules based on how test groups actually played. [Specific/individual vs. team contribution — to confirm]",
        images: [{ letter: "B", label: "User testing session — video", isVideo: true }],
      },
      {
        title: "Results",
        tag: "RESULT — TEAM",
        body: "[Pending: what the validation process showed — did the game do what it set out to do, in the words of the people who played it, not just an assumption that it worked]",
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "Good consumer insight work means reframing the problem before proposing a solution — the card-game format only became obvious after rejecting the more generic 'anxiety app' idea.",
      },
    ],
  },
  {
    slug: "trivela",
    caseNumber: "Case 03 of 03",
    categoryTag: "CASE 03 — BRAND & CONTENT",
    title: "Trivela",
    subtitle: "Brand Thesis → Content System → Execution → Audience Learning",
    client: "Independent project",
    role: "Founder, content & brand strategy",
    timeline: "Ongoing",
    category: "Brand & Content",
    accent: "#D9A62E",
    exhibitLabel: "EXHIBIT C — BRAND & CONTENT",
    homeDescription:
      "An independent football media brand — content strategy and audience-building, run on my own initiative.",
    sections: [
      {
        title: "Brand Thesis",
        tag: "MY ROLE",
        body: "[Pending: the actual point of view Trivela argues for — what gap in football content it exists to fill, in one or two sentences, in your own words]",
      },
      {
        title: "Content System",
        tag: "MY ROLE",
        body: "[Pending: the recurring formats/series — not a list of one-off posts, but the repeatable system behind the content, and which platforms it runs on]",
      },
      {
        title: "Execution",
        tag: "MY ROLE",
        body: "Shot, edited and published content independently using Premiere and CapCut, handling everything from concept to publishing without a team.",
        images: [
          { letter: "A", label: "Content reel — video", isVideo: true },
          { letter: "B", label: "Behind the scenes — video", isVideo: true },
        ],
      },
      {
        title: "Audience Learning",
        tag: "RESULT — TEAM",
        body: "[Pending: real numbers — followers, reach, growth over a defined period — or, if not yet confirmed, an honest description of what changed in the content strategy based on what the audience actually responded to. Do not present as a growth case until the numbers are confirmed.]",
      },
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getAdjacentCase(slug: string) {
  const index = cases.findIndex((c) => c.slug === slug);
  if (index === -1) return cases[0];
  return cases[(index + 1) % cases.length];
}
