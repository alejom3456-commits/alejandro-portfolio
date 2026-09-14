export type ExhibitImage = {
  letter: string;
  label: string;
  isVideo?: boolean;
  src?: string; // path under /public — when set, the real photo (or video poster) renders instead of the placeholder tile
  videoSrc?: string; // path under /public to an .mp4 — when set together with isVideo, renders a real playable video
  landscape?: boolean; // set when src is itself a landscape image (a slide/screenshot) so it isn't cropped into the usual portrait tile
};

export type CaseStat = { value: string; label: string };

export type CaseChartBar = { label: string; value: number; max: number; valueLabel: string };

export type CaseSection = {
  title: string;
  tag: "CONTEXT" | "CHALLENGE" | "INSIGHT" | "MY ROLE" | "TEAM RESULT";
  body: string;
  images?: ExhibitImage[];
  bullets?: string[]; // short scannable list, rendered under the body copy
  stats?: CaseStat[]; // number + label grid, for a quick metrics read
  chart?: { title?: string; bars: CaseChartBar[] }; // animated comparison bars
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
//  CONTEXT      -> warm taupe gray (#8A8577), the setup / background
//  CHALLENGE    -> dark espresso   (#4A4740), the tension / problem
//  INSIGHT      -> cool slate gray (#6B7280), the finding / clarity
//  MY ROLE      -> this case's own accent color
//  TEAM RESULT  -> always coral (#E2492B), a consistent "verify before publishing" flag
//                  across the whole site, regardless of the case's own color.
// All set in the page renderer's tagColor() function.

export const cases: CaseStudy[] = [
  {
    slug: "loreal",
    caseNumber: "Case 01 of 03",
    categoryTag: "CASE 01 · BRAND & TRADE MARKETING",
    title: "L'Oréal · Dermatological Beauty",
    subtitle: "Trade Marketing & Brand Activation",
    client: "La Roche-Posay, CeraVe, Vichy, SkinCeuticals",
    role: "Trade Marketing & BD Intern",
    timeline: "January 17 to July 19, 2026",
    category: "Brand & Trade Marketing",
    accent: "#2B4EA8",
    exhibitLabel: "EXHIBIT A · TRADE MARKETING",
    heroImage: "/images/loreal/cerave-shelf-setup.jpg",
    logo: "/images/loreal/loreal-paris-logo.png",
    homeDescription:
      "Six months of hands-on trade marketing at L'Oréal's Dermatological Beauty division: the CeraVe Gift-With-Purchase mechanic, a trade fair, and brand activations I helped run in person for La Roche-Posay, Vichy and SkinCeuticals.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "When I joined, La Roche-Posay, CeraVe and Vichy all needed more visibility across pharmacy channels: Medipiel, Bella Piel, and Farmatodo. Several major launches landed in the same season, too. La Roche-Posay's new gel cream and its Hyalu B5 update, Vichy's Regen Serum, and CeraVe's full Suncare line all needed shelf space at once, while core products like Effaclar, CeraVe's moisturizers and cleansers, and Vichy's Collagen and Collagel still had to keep moving.",
      },
      {
        title: "Challenge",
        tag: "CHALLENGE",
        body: "My job was turning shelf attention into an actual trial purchase for CeraVe's new Suncare line, including UV Immune+, in a season where La Roche-Posay's own gel cream and Hyalu B5 launches, plus Vichy's Regen Serum, were all competing for the same shelf space and marketing attention. And that's on top of the usual pressure from other brands. There was a harder, less visible part too: making sure every single store actually executed correctly, so PLV and displays went up the way they were planned, not just shipped and forgotten.",
      },
      {
        title: "Insight",
        tag: "INSIGHT",
        body: "We went straight to the street ourselves, talking to shoppers outside pharmacies, to see this firsthand. Dermo-cosmetic shoppers often decide right at the shelf, without a pharmacist's guidance, and a real reason to try something new, like a Gift-With-Purchase, is often what actually shapes which product they pick up. Two other things stood out to me: AI is increasingly shaping how shoppers research dermo-cosmetic purchases before they even walk into the store, and interactive, hands-on activations with the public consistently beat passive displays, every time.",
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "I translated the brand's national activation calendar into a retail-ready plan for each channel: what materials each store format actually needed, how the GWP mechanic would work at checkout, and how to keep visual consistency across very different store environments. On the commercial side, that meant coordinating directly with the dermoconsejera (in-store beauty advisor) teams and the visita médica (medical-visit) reps, and taking part in a global audit process that put me in direct conversations with the directors of each division: Dermatological, Mass Consumer, Professional, and others.",
        images: [
          { letter: "A", label: "Hyalu B5 in-store kiosk setup", src: "/images/loreal/hyalu-b5-kiosk.jpg" },
          { letter: "B", label: "CeraVe podium display setup", src: "/images/loreal/cerave-podium-display.jpg" },
        ],
      },
      {
        title: "Execution",
        tag: "MY ROLE",
        body: "I coordinated the distribution and setup of POP/PLV materials and glorifiers across pharmacy channels, tracked sell-in and sell-out, and pulled together activation reporting for the brand team. Beyond the shelf, I took on a few bigger pieces myself:",
        bullets: [
          "Supported the brand's presence at the Coopidrogas trade fair.",
          "Organized a street-level fieldwork day for the whole Dermatological division to gather shopper insights firsthand.",
          "Ran the Aruma in-store activation at Locatel.",
          "Helped execute SkinCeuticals luxury activations at strategic Medipiel and Bella Piel locations in Bogotá and Medellín.",
          "Took part in broader exhibitions and launches at flagship stores.",
        ],
        images: [
          { letter: "C", label: "CeraVe booth at the Coopidrogas trade fair", src: "/images/loreal/coopidrogas-booth.jpg" },
          { letter: "D", label: "CeraVe moisturizing lotion display fixture, Coopidrogas", src: "/images/loreal/coopidrogas-bottle-fixture.jpg" },
        ],
      },
      {
        title: "Results",
        tag: "TEAM RESULT",
        body: "The extra retail coverage and visibility from the Coopidrogas fair, the SkinCeuticals luxury activations, and the flagship-store exhibitions get reported at the brand level, but my part in those was hands-on: the stand's logistics and creative implementation, staffing calls for the fair, making sure things actually executed correctly on the ground, and for the activations, the same, plus coordinating with the commercial team and the sales force to pull them off.",
        stats: [
          { value: "+30%", label: "PLV coverage growth" },
          { value: "~5x", label: "Aruma sell-out lift" },
          { value: "80%+", label: "Results on activations I led" },
        ],
        chart: {
          title: "Aruma at Locatel, daily sell-out",
          bars: [
            { label: "Before", value: 4, max: 20, valueLabel: "3 to 4 units/day" },
            { label: "After", value: 20, max: 20, valueLabel: "~20 units/day" },
          ],
        },
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "Brand strategy is only as strong as its execution at the shelf. The gap between a campaign concept and what a shopper actually sees is where most of the real work happens. Logistics isn't background noise, it is the strategy: a perfect PLV design that shows up late or gets set up wrong is a failed activation, no matter how good the concept was on paper. I also learned to think past the individual sale toward the whole shopping experience, what someone feels walking up to a stand, not just what they buy from it, and to treat AI's growing role in how people research these purchases as something to design for now, not later. Every activation is a draft for the next one. Each fair, each point of sale, each day in the street taught me something specific enough to make the next one sharper, better staffed, and better executed than the last.",
      },
    ],
    appendixExhibits: [
      { letter: "E", label: "Dermatological division street fieldwork in Bella Piel", src: "/images/loreal/bellapiel-team.jpg" },
      { letter: "F", label: "Dermatological division street fieldwork in Farmatodo", src: "/images/loreal/farmatodo-team.jpg" },
      { letter: "G", label: "Panamericana in-store activation", src: "/images/loreal/panamericana-activation.jpg" },
      { letter: "H", label: "Vichy Dercos shelf display", src: "/images/loreal/vichy-dercos-shelf.jpg" },
      { letter: "I", label: "Setting up the CeraVe shelf display", src: "/images/loreal/cerave-shelf-setup.jpg" },
      { letter: "J", label: "CeraVe Suncare launch display", src: "/images/loreal/cerave-suncare-shelf.jpg" },
      { letter: "K", label: "Illuminated CeraVe wall at the Coopidrogas fair", src: "/images/loreal/coopidrogas-illuminated-wall.jpg" },
      { letter: "L", label: "Dermatological division street fieldwork, team photo 1", src: "/images/loreal/fieldwork-team-2.jpg" },
      { letter: "M", label: "Dermatological division street fieldwork, team photo 2", src: "/images/loreal/fieldwork-team-3.jpg" },
      {
        letter: "N",
        label: "Building facade activation for the CeraVe Suncare launch",
        isVideo: true,
        src: "/images/loreal/cerave-suncare-facade-poster.jpg",
        videoSrc: "/videos/loreal/cerave-suncare-facade.mp4",
      },
    ],
  },
  {
    slug: "epa",
    caseNumber: "Case 02 of 03",
    categoryTag: "CASE 02 · CONSUMER INSIGHT & PRODUCT",
    title: "EPA",
    subtitle: "Riiing: Consumer Insight → Product Design → Psychological Validation",
    client: "Riiing (own venture, undergraduate thesis)",
    role: "Sole creator, start to finish: research, game design, product validation, brand identity & business model",
    timeline: "2021 to 2025 · thesis submitted Nov. 2025",
    category: "Consumer Insight & Product",
    accent: "#E2492B",
    exhibitLabel: "EXHIBIT B · INSIGHT & PRODUCT",
    logo: "/images/epa/riiing-logo.png",
    heroImage: "/images/epa/epa-lineup-hero.jpg",
    homeDescription:
      "A physical card game, and Riiing, the venture behind it, I designed solo as my undergraduate thesis: consumer research and game design through to brand identity and business model, validated with real interviews, live play sessions, and five psychologists.",
    sections: [
      {
        title: "Context",
        tag: "CONTEXT",
        body: "The spark was an offhand comment from my 8-year-old cousin, who turned down an invitation to play with other kids with: 'No quiero, yo estoy bien aquí. ¿Para qué hablo con gente?' That stuck with me. It pointed to a wider pattern: university students who are physically present on campus but stay emotionally disconnected from it, replacing spontaneous conversation with a phone. My first version of the idea targeted children and teenagers, with parents as the paying customer, but interviews showed that wasn't the right market. There's no realistic way to compete with something like Roblox for a kid's attention, and the pool of parents willing to pay was both biased and too narrow.",
      },
      {
        title: "Challenge",
        tag: "CHALLENGE",
        body: "The hard part was redirecting the whole project toward a validated audience without just chasing a trendier demographic. I ran twenty interviews with self-described 'sociable' undergraduates across 5 different majors in Bogotá, and a consistent pattern showed up: real anticipatory anxiety, a strong pull back toward already-known groups, and a felt need for acceptance, even among people who consider themselves social. The harder problem was designing a fix that didn't read as a therapy tool or force direct exposure, since forced exposure was flagged to me as actively harmful to the exact people it was meant to help.",
      },
      {
        title: "Insight",
        tag: "INSIGHT",
        body: "Five psychologists I brought in, organizational, clinical and educational, pushed back on the 'introvert vs. extrovert' framing entirely. Comfort with strangers depends on context, not fixed personality, and forcing exposure makes anticipatory anxiety worse, not better. The numbers backed it up: people who look fine from the outside, still avoiding the first move.",
        stats: [
          { value: "4.1/5", label: "Prefer a known group" },
          { value: "3.5/5", label: "Positive after the first step" },
          { value: "3.75/5", label: "Rate acceptance as important" },
          { value: "3.1/5", label: "Real anticipatory anxiety" },
          { value: "2/5", label: "Perceived loneliness (low)" },
        ],
      },
      {
        title: "Buyer Persona",
        tag: "MY ROLE",
        body: "Interviews and validation converged on one archetype: Laura, 20, studying International Relations in Bogotá. She's sociable but anxious. First contact makes her nervous, she fears rejection and quietly avoids the moment, and she wants to belong without feeling judged. She's not chasing more followers, she wants real connections without filters. Laura is both the user and the buyer I designed EPA around, not a hypothetical persona, but the direct synthesis of the 20 interviews and what the psychologists told me.",
        images: [{ letter: "P", label: "Buyer and user persona, Laura, 20, from the thesis deck", src: "/images/epa/slides/slide-05.jpg", landscape: true }],
      },
      {
        title: "Strategy",
        tag: "MY ROLE",
        body: "I sized the corrected market myself with a TAM-SAM-SOM model: roughly 834,000 undergraduates in Bogotá, a ~750,000 SAM, and a 45,000 to 90,000 reachable SOM. I chose a physical card game over an app or a wellness campaign, built around gradual exposure instead of forced interaction, so the format itself does the work of lowering the stakes. My business model: EPA is the entry point, not the whole business. I'm going B2B first, selling the experience into university welcome weeks, onboarding, orientations, career fairs, support groups and campus networking events, where an institution books the experience for a group instead of one person buying a single deck. Costing and pricing are still being finalized, but the validated demand, a community that actually wants to interact and keeps coming back, points to a workable fit. From there, my long-term vision is for Riiing to grow into a full events and networking company: helping people who are afraid to show up to an event alone actually go, and meet people at events curated around what they're genuinely interested in, with an app and website as the next layer connecting the physical game to that bigger experience.",
        images: [
          { letter: "A", label: "EPA card categories: Descongélese, Sin miedo al éxito, Sin pelos en la lengua, Misterio", src: "/images/epa/epa-cards-categories.jpg" },
          { letter: "B", label: "Challenge card examples", src: "/images/epa/epa-cards-challenges.jpg" },
        ],
      },
      {
        title: "Creative Solution",
        tag: "MY ROLE",
        body: "I designed EPA, a card game built on four categories: Descongélese (breaks the ice between two people), Sin miedo al éxito (moves the whole group, invite, merge, integrate, 3+ people), Sin pelos en la lengua (real conversation, past small talk), and Misterio (mixes entire groups together). It's wrapped in a distinctly Colombian voice, flat-color character illustrations, and everyday phrases like 'métale moral' and 'no hay de otra,' under the campaign line 'Pal conocido y desconocido.'",
      },
      {
        title: "Product Development",
        tag: "MY ROLE",
        body: "I iterated the prototype through two full play sessions with real groups, 6 people aged 19 to 21, then 9 people aged 20 to 50, tracking how fast people understood the rules, how many lost their embarrassment before the third card, and whether groups actually mixed. The second round improved on every measure: the number of people who ended up talking to total strangers roughly doubled, and conversations kept going well past what the cards even asked for.",
        chart: {
          title: "Rule comprehension in under a minute",
          bars: [
            { label: "Round 1 (n=6, ages 19 to 21)", value: 4, max: 9, valueLabel: "4 of 6" },
            { label: "Round 2 (n=9, ages 20 to 50)", value: 6, max: 9, valueLabel: "6 of 9" },
          ],
        },
        images: [
          { letter: "C", label: "Play-test validation, round 1 (ages 19 to 21, n=6)", src: "/images/epa/epa-validation-round1.jpg", landscape: true },
          { letter: "D", label: "Play-test validation, round 2 (ages 20 to 50, n=9)", src: "/images/epa/epa-validation-round2.jpg", landscape: true },
        ],
      },
      {
        title: "Results",
        tag: "TEAM RESULT",
        body: "Validation ran in four stages, each testing something different, and put together, they validate different layers of the same claim: the problem is real, the fix is sound in principle, the product works in practice, and the people who played it say it delivered.",
        bullets: [
          "Stage 1, problem validation: 20 interviews with self-described sociable undergraduates confirmed the anxiety and avoidance pattern was real, not something I assumed.",
          "Stage 2, concept validation: five psychologists (organizational, clinical and educational) reviewed the problem, the mechanics, and the ethics of the fix itself, confirming EPA reduces anticipatory anxiety without forcing exposure, a real risk they flagged early that shaped the final design.",
          "Stage 3, product validation: two live play-test rounds confirmed the game itself worked. Rules were clear, pacing held, and groups that started as strangers actually mixed, with the psychologists who observed both sessions directly noting real inclusion behavior (laughing, listening, collaborating), not just polite participation.",
          "Stage 4, outcome confirmation: in follow-up validation after the sessions, 10 of 15 participants confirmed the experience delivered on what it promised, building real bonds and a sense of belonging, not just filling time.",
        ],
      },
      {
        title: "Learning",
        tag: "MY ROLE",
        body: "The sharpest lesson was about the market, not the product. The original kids-and-parents concept felt right but failed validation, and the harder, more useful move was killing it before I fell in love with it. On the product side, the psychologists' reframe stuck with me: there's no such thing as a fixed 'introvert,' only contexts that make people feel safe enough to try, and a game can be designed on purpose to be that context. As the sole creator of the whole project, research, game design, brand and business model, as an undergraduate thesis, the biggest thing I took away was getting comfortable owning every layer of a product, not just the creative part.",
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
    categoryTag: "CASE 03 · BRAND & CONTENT",
    title: "Trivela",
    subtitle: "Brand Thesis → Content System → Execution → Audience Learning",
    client: "Independent project",
    role: "Founder, content & brand strategy",
    timeline: "Ongoing",
    category: "Brand & Content",
    accent: "#D9A62E",
    exhibitLabel: "EXHIBIT C · BRAND & CONTENT",
    homeDescription:
      "An independent football media brand I run on my own initiative: content strategy and audience-building, built from zero.",
    sections: [
      {
        title: "Brand Thesis",
        tag: "CONTEXT",
        body: "Most football media today treats the sport almost like a business story: transfers, sponsorship deals, broadcasting rights, and forgets who's actually sustaining all of it, the hincha. My thesis with Trivela is simple: the fan isn't just a spectator or an audience segment to sell to advertisers, they're a consumer with real, observable opinions about what marketing in football actually connects with them and what just reads as noise. So I go and ask directly, in the street, outside real stadiums in Bogotá, in Spanish, with no club press office or global highlight reel filtering the answer. The longer bet: turn that same community of fans willing to give an honest opinion into a space that eventually talks about more than football, a live, ongoing read on what real audiences respond to, built through a marketing lens instead of a sports-media one.",
      },
      {
        title: "Content System",
        tag: "MY ROLE",
        body: "Two recurring formats, tested against each other on purpose instead of picked upfront:",
        bullets: [
          "Street interviews with real fans outside stadiums (vox pop).",
          "Solo on-camera reaction pieces on the week's storylines, like Bogotá's Millonarios and Santa Fe rivalry, or national-team names like James Rodríguez and Luis Díaz.",
        ],
      },
      {
        title: "Execution",
        tag: "MY ROLE",
        body: "I shoot, edit and publish everything independently using Premiere and CapCut, concept to publishing, no team. Every video carries the same hashtag identity (#trivela, #bogota, #colombia, #futbol) and, when it fits, borrows a trending non-football hook, a reality-TV storyline, a viral audio, to reach past a football-only audience. Real, unedited posts from the account are embedded further down this page.",
      },
      {
        title: "Audience Learning",
        tag: "TEAM RESULT",
        body: "Early and small on purpose, a few months in, low three digits of followers, and I'm not going to pretend otherwise. But the data already answered a real question: street interviews with real fans consistently beat solo opinion pieces. That's not a vanity metric to me, it's the same read a brand team needs before scaling a content bet: know which format the audience actually leans into before spending more time on the wrong one. The next test is whether that same fan community follows Trivela past football itself, starting with how they see advertising and sponsorship at the stadium, and what of it actually lands versus what they tune out. That's the real test of whether this becomes a community built on consumer insight, not just football commentary.",
        stats: [
          { value: "52", label: "Followers" },
          { value: "513", label: "Total likes" },
          { value: "7,992", label: "Top video views" },
          { value: "10x+", label: "Interviews vs. solo pieces" },
        ],
        chart: {
          title: "Views by format",
          bars: [
            { label: "Typical reaction video", value: 700, max: 8000, valueLabel: "~700 views" },
            { label: "Top street interview", value: 7992, max: 8000, valueLabel: "7,992 views" },
          ],
        },
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
