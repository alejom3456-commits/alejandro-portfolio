export type ExhibitImage = {
  letter: string;
  label: string;
  isVideo?: boolean;
  src?: string; // path under /public — when set, the real photo (or video poster) renders instead of the placeholder tile
  videoSrc?: string; // path under /public to an .mp4 — when set together with isVideo, renders a real playable video
};

export type CaseSection = {
  title: string;
  tag: "CONTEXT" | "CHALLENGE" | "INSIGHT" | "MY ROLE" | "RESULT — TEAM";
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
  heroImage?: string; // optional real photo shown behind the case hero — only set where real photos exist
  logo?: string; // optional client/brand logo badge shown in the case hero
  sections: CaseSection[];
  appendixExhibits?: ExhibitImage[];
};

// Tag color logic (kept consistent across every case):
//  CONTEXT        -> warm taupe gray (#8A8577) — the setup / background
//  CHALLENGE      -> dark espresso   (#4A4740) — the tension / problem
//  INSIGHT        -> cool slate gray (#6B7280) — the finding / clarity
//  MY ROLE        -> this case's own accent color
//  RESULT — TEAM  -> always coral (#E2492B) — a consistent "verify before publishing" flag
//                    across the whole site, regardless of the case's own color.
// All set in the page renderer's tagColor() function.

export const cases: CaseStudy[] = [
  {
    slug: "loreal",
    caseNumber: "Case 01 of 03",
    categoryTag: "CASE 01 — BRAND & TRADE MARKETING",
    title: "L'Oréal — Dermatological Beauty",
    subtitle: "Trade Marketing & Brand Activation",
    client: "La Roche-Posay, CeraVe, Vichy, SkinCeuticals",
    role: "Trade Marketing & BD Intern",
    timeline: "January 17 – July 19, 2026",
    category: "Brand & Trade Marketing",
    accent: "#2B4EA8",
    exhibitLabel: "EXHIBIT A — TRADE MARKETING",
    heroImage: "/images/loreal/cerave-shelf-setup.jpg",
    logo: "/images/loreal/loreal-paris-logo.png",
    homeDescription:
      "Trade marketing execution at the shelf and in person — from the CeraVe Gift-With-Purchase mechanic to a trade fair and live brand activations for La Roche-Posay, Vichy and SkinCeuticals.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "La Roche-Posay, CeraVe and Vichy needed more brand visibility across pharmacy channels — Medipiel, Bella Piel, and Farmatodo — right as several major launches converged in the same season: La Roche-Posay's new gel cream and its Hyalu B5 update, Vichy's Regen Serum, and CeraVe's full Suncare line — all while still sustaining core products like Effaclar, CeraVe's moisturizers and cleansers, and Vichy's Collagen and Collagel.",
      },
      {
        title: "Challenge",
        tag: "CHALLENGE",
        body: "Converting shelf attention into trial purchase for CeraVe's new Suncare line — including UV Immune+ — in a season where La Roche-Posay's own gel cream and Hyalu B5 launches and Vichy's Regen Serum were competing for the same shelf and marketing attention, on top of the usual pressure from other brands. On top of that, making sure every store actually executed correctly — that PLV and displays were set up as planned, not just shipped — was its own ongoing challenge.",
      },
      {
        title: "Insight",
        tag: "INSIGHT",
        body: "The Trade Marketing & BD team went straight to the street — talking to shoppers outside pharmacies — to see this firsthand: dermo-cosmetic shoppers often decide at the shelf, without a pharmacist's guidance, and a compelling reason to try something new, like a Gift-With-Purchase, directly shapes which product they pick up. Two other patterns stood out: AI is increasingly shaping how shoppers research dermo-cosmetic purchases before they even reach the store, and interactive, hands-on implementations with the public consistently outperformed passive displays.",
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "Translated the brand's national activation calendar into a retail-ready plan per channel — what materials each store format needed, how the GWP mechanic would work at checkout, and how to keep visual consistency across very different store environments. On the commercial side, this meant coordinating directly with the dermoconsejera (in-store beauty advisor) teams and the visita médica (medical-visit) reps, and taking part in a global audit process that included direct conversations with the directors of each division — Dermatological, Mass Consumer, Professional, and others.",
        images: [
          { letter: "A", label: "Hyalu B5 in-store kiosk setup", src: "/images/loreal/hyalu-b5-kiosk.jpg" },
          { letter: "B", label: "CeraVe podium display setup", src: "/images/loreal/cerave-podium-display.jpg" },
        ],
      },
      {
        title: "Execution",
        tag: "MY ROLE",
        body: "Coordinated distribution and setup of POP/PLV materials and glorifiers across pharmacy channels, tracked sell-in and sell-out, and consolidated activation reporting for the brand team. Beyond the shelf, supported the brand's presence at the Coopidrogas trade fair, organized a street-level fieldwork day for the entire Dermatological division to gather shopper insights directly, ran the Aruma in-store activation at Locatel, helped execute SkinCeuticals luxury activations at strategic Medipiel and Bella Piel locations in Bogotá and Medellín, and took part in broader exhibitions and launches at flagship stores.",
        images: [
          { letter: "C", label: "CeraVe booth at the Coopidrogas trade fair", src: "/images/loreal/coopidrogas-booth.jpg" },
          { letter: "D", label: "Display fixture shaped like the CeraVe moisturizing lotion — Coopidrogas", src: "/images/loreal/coopidrogas-bottle-fixture.jpg" },
        ],
      },
      {
        title: "Results",
        tag: "RESULT — TEAM",
        body: "The number of points of sale reached with general PLV grew by 30%, and the activations I personally led delivered results above 80%. The clearest single example was Aruma at Locatel: daily sell-out went from around 3–4 units to about 20 — nearly a 5x lift. Additional retail coverage and visibility gains from the Coopidrogas fair, the SkinCeuticals luxury activations, and the broader flagship-store exhibitions are reported at the brand level. My specific contribution there was hands-on: supporting the stand's logistics and creative implementation, staffing decisions for the fair, and making sure the event executed correctly on the ground — and for the activations, the same, plus coordinating with the commercial team and the sales force to run them.",
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "Brand strategy is only as strong as its execution at the shelf — the gap between a campaign concept and what a shopper actually sees is where most of the real work happens. Logistics isn't a background task, it's the strategy: a perfect PLV design that arrives late or gets set up wrong is a failed activation, no matter how good the concept was. I also learned to think past the individual sale toward the full shopping experience — what a shopper feels walking up to a stand, not just what they buy from it — and to treat AI's growing role in how people research these purchases as something to design for now, not later. And every activation is a draft for the next one: each fair, each point of sale, each street outing taught me something specific to make the following one more attention-grabbing, better staffed, and better executed than the last.",
      },
    ],
    appendixExhibits: [
      { letter: "E", label: "Dermatological division street fieldwork — Bella Piel", src: "/images/loreal/bellapiel-team.jpg" },
      { letter: "F", label: "Dermatological division street fieldwork — Farmatodo", src: "/images/loreal/farmatodo-team.jpg" },
      { letter: "G", label: "Panamericana in-store activation", src: "/images/loreal/panamericana-activation.jpg" },
      { letter: "H", label: "Vichy Dercos shelf display", src: "/images/loreal/vichy-dercos-shelf.jpg" },
      { letter: "I", label: "Setting up the CeraVe shelf display", src: "/images/loreal/cerave-shelf-setup.jpg" },
      { letter: "J", label: "CeraVe Suncare launch display", src: "/images/loreal/cerave-suncare-shelf.jpg" },
      { letter: "K", label: "Illuminated CeraVe wall — Coopidrogas fair", src: "/images/loreal/coopidrogas-illuminated-wall.jpg" },
      { letter: "L", label: "Dermatological division street fieldwork — team", src: "/images/loreal/fieldwork-team-2.jpg" },
      { letter: "M", label: "Dermatological division street fieldwork — team", src: "/images/loreal/fieldwork-team-3.jpg" },
      {
        letter: "N",
        label: "CeraVe Suncare launch — building facade activation",
        isVideo: true,
        src: "/images/loreal/cerave-suncare-facade-poster.jpg",
        videoSrc: "/videos/loreal/cerave-suncare-facade.mp4",
      },
    ],
  },
  {
    slug: "epa",
    caseNumber: "Case 02 of 03",
    categoryTag: "CASE 02 — CONSUMER INSIGHT & PRODUCT",
    title: "EPA",
    subtitle: "Riiing — Consumer Insight → Product Design → Psychological Validation",
    client: "Riiing (own venture — undergraduate thesis)",
    role: "Sole creator — research, game design, brand & business model",
    timeline: "2021 – 2025 · thesis submitted Nov. 2025",
    category: "Consumer Insight & Product",
    accent: "#E2492B",
    exhibitLabel: "EXHIBIT B — INSIGHT & PRODUCT",
    logo: "/images/epa/riiing-logo.png",
    homeDescription:
      "A physical card game — and Riiing, the venture behind it — designed solo as an undergraduate thesis, from consumer research and game design through to brand identity and business model, validated with real interviews, live play sessions, and five psychologists.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "The spark was an offhand comment from his 8-year-old cousin, who turned down an invitation to play with other kids with: 'No quiero, yo estoy bien aquí. ¿Para qué hablo con gente?' It pointed to a wider pattern: university students who are physically present on campus but stay emotionally disconnected from it, replacing spontaneous conversation with a phone. The first version of the idea targeted children and teenagers, with parents as the paying customer — but interviews showed that wasn't the right market: no realistic way to compete with something like Roblox for kids' attention, and a biased, too-narrow pool of parents willing to pay.",
      },
      {
        title: "Challenge",
        tag: "CHALLENGE",
        body: "Redirecting the whole project toward a validated audience without just chasing a trendier demographic. Twenty interviews with self-described 'sociable' undergraduates across 5 different majors in Bogotá surfaced a consistent pattern: real anticipatory anxiety, a strong pull back toward already-known groups, and a felt need for acceptance — even among people who consider themselves social. The harder challenge was designing a fix that didn't read as a therapy tool or force direct exposure, since forced exposure was flagged as actively harmful to the people it was meant to help.",
      },
      {
        title: "Insight",
        tag: "INSIGHT",
        body: "Five psychologists — organizational, clinical and educational — pushed back on the 'introvert vs. extrovert' framing entirely: comfort with strangers depends on context, not fixed personality, and direct, forced exposure makes anticipatory anxiety worse, not better. The validated numbers backed this up: undergraduates prefer a known group (4.1/5), report positive results after taking the first step to socialize (3.5/5), rate acceptance as important (3.75/5), and still experience real anticipatory anxiety (3.1/5) despite low perceived loneliness (2/5) — people who look fine from the outside, still avoiding the first move.",
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "Sized the corrected market himself with a TAM-SAM-SOM model — roughly 834,000 undergraduates in Bogotá, a ~750,000 SAM, and a 45,000–90,000 reachable SOM — and chose a physical card game over an app or a wellness campaign, built around gradual exposure instead of forced interaction, so the format itself does the work of lowering the stakes. The physical game is the first step: the plan is for an app and website to become the next layer of Riiing, extending EPA's presence beyond the table.",
        images: [
          { letter: "A", label: "EPA card categories — Descongélese, Sin miedo al éxito, Sin pelos en la lengua, Misterio", src: "/images/epa/epa-cards-categories.jpg" },
          { letter: "B", label: "Challenge card examples", src: "/images/epa/epa-cards-challenges.jpg" },
        ],
      },
      {
        title: "Creative Solution",
        tag: "MY ROLE",
        body: "Designed EPA: a card game built on four categories — Descongélese (breaks the ice between two people), Sin miedo al éxito (moves the whole group — invite, merge, integrate, 3+ people), Sin pelos en la lengua (real conversation, past small talk), and Misterio (mixes entire groups together) — wrapped in a distinctly Colombian voice, flat-color character illustrations, and everyday phrases like 'métale moral' and 'no hay de otra,' under the campaign line 'Pal conocido y desconocido.'",
      },
      {
        title: "Product Development",
        tag: "MY ROLE",
        body: "Iterated the prototype through two full play sessions with real groups — 6 people aged 19–21, then 9 people aged 20–50 — tracking how fast people understood the rules, how many lost their embarrassment before the third card, and whether groups actually mixed. The second round improved on every measure: rule comprehension in under a minute rose from 4 of 6 to 6 of 9 participants, the number of people who ended up talking to total strangers roughly doubled, and conversations kept going past what the cards even asked for.",
        images: [
          { letter: "C", label: "Play-test validation — round 1 (19–21 years, n=6)", src: "/images/epa/epa-validation-round1.jpg" },
          { letter: "D", label: "Play-test validation — round 2 (20–50 years, n=9)", src: "/images/epa/epa-validation-round2.jpg" },
        ],
      },
      {
        title: "Results",
        tag: "RESULT — TEAM",
        body: "Validation covered two separate things: whether the game itself was well built, and whether it actually did what it set out to do. On the design side, the two play-test rounds confirmed the rules were clear, the pacing worked, and groups mixed rather than staying static. On the impact side, five psychologists validated the concept end-to-end — problem, mechanics and ethics — confirming EPA reduces anticipatory anxiety without forcing exposure, builds real bonds rather than just filling time, and strengthens sense of community and belonging, not only conversation. 10 of 15 people in follow-up validation confirmed the experience matched what it promised, and across both live sessions the psychologists observing directly noted real inclusion behavior — laughing, listening, collaborating — not just polite participation.",
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "The sharpest lesson was about the market, not the product: the original kids-and-parents concept felt right but failed validation, and the harder, more useful move was killing it before falling in love with it. On the product side, the psychologists' reframe stuck — there's no such thing as a fixed 'introvert,' only contexts that make people feel safe enough to try, and a game can be designed on purpose to be that context. As the sole creator of the whole project — research, game design, brand and business model, as an undergraduate thesis — the biggest personal takeaway was building comfort owning every layer of a product, not just the creative part.",
      },
    ],
    appendixExhibits: [
      { letter: "E", label: "EPA rules card", src: "/images/epa/epa-cards-rules.jpg" },
      { letter: "F", label: "EPA brand characters", src: "/images/epa/epa-lineup.png" },
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
