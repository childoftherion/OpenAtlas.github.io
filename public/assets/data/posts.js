// Journal entries. To add a new post:
//   1. Create `new-site/pages/journal/<slug>/index.html` (use an existing post as a template).
//   2. Append a new entry to this array with the same `slug`.
//   3. Drop a cover image into `new-site/assets/images/posts/`.

export const posts = [
  {
    slug: "west-coast-awakens-earthquakes",
    title: "West Coast Awakens: Recent Oregon and California Earthquakes Rumble the Rugged Frontier",
    excerpt:
      "A restless stretch of the West Coast has been rumbling beneath the surface, with recent earthquakes in Oregon and California reminding residents that the ground here never truly sleeps.",
    category: "Field Report",
    tags: ["Earthquakes", "Oregon", "California", "News"],
    author: "freedomland",
    date: "2026-04-26",
    image: "/assets/images/posts/west-coast-awakens-earthquakes-hero.png",
    imageAlt: "Map showing recent earthquake activity along the West Coast.",
    url: "/pages/journal/west-coast-awakens-earthquakes/",
    readMinutes: 3,
  },
  {
    slug: "yeti-rambler-26oz-review",
    title: "YETI Rambler 26oz Water Bottle: Full Review, Pros, Cons, and Specs",
    excerpt:
      "The 26 oz Rambler pairs double-wall insulation with a rugged DuraCoat finish that has survived pavement drops, volcanic rock, and a dunk in the McKenzie.",
    category: "Gear Review",
    tags: ["Gear Review", "Yeti", "Hydration"],
    author: "freedomland",
    date: "2026-04-23",
    image: "/assets/images/gear/yeti-trio.jpg",
    imageAlt: "YETI Rambler trio — tumbler, stackable mug, and water bottle.",
    url: "/pages/journal/yeti-rambler-26oz-review/",
    readMinutes: 7,
  },
  {
    slug: "lava-beds-national-monument",
    title: "Lava Beds National Monument",
    excerpt:
      "Sharp lava, hidden caves, and wide open high desert shaped by the Medicine Lake volcano — with human history layered from Native rock art to the Modoc War.",
    category: "Destination",
    tags: ["Caving", "Hiking", "National Park Service", "Volcano", "California"],
    author: "freedomland",
    date: "2026-04-18",
    image: "/assets/images/posts/lava-beds-hero.jpg",
    imageAlt:
      "Visitor center at Lava Beds National Monument under a winter sky.",
    url: "/pages/journal/lava-beds-national-monument/",
    readMinutes: 11,
  },
  {
    slug: "tamolitch-falls-blue-pool",
    title: "Tamolitch Falls (Blue Pool)",
    excerpt:
      "A turquoise pool on the McKenzie River, fed by water that vanishes into an ancient lava flow and resurfaces through porous basalt at 37°F.",
    category: "Destination",
    tags: ["Hiking", "Hiking Trails", "US Forest Service", "Volcano", "Oregon"],
    author: "freedomland",
    date: "2026-04-17",
    image: "/assets/images/posts/tamolitch-hero.jpg",
    imageAlt: "The turquoise Blue Pool at Tamolitch Falls.",
    url: "/pages/journal/tamolitch-falls-blue-pool/",
    readMinutes: 9,
  },
  {
    slug: "valentine-cave-lava-beds",
    title: "Valentine Cave: An Easy Walk into a Lava Tube",
    excerpt:
      "A well-preserved lava tube at Lava Beds that rewards a quiet walk — cool air, smooth lavacicles, and a clear path where most visitors turn back after 200 feet.",
    category: "Field Notes",
    tags: ["Caving", "Lava Beds", "National Park Service", "California"],
    author: "freedomland",
    date: "2026-04-16",
    image: "/assets/images/posts/valentine-featured.jpg",
    imageAlt: "Valentine Cave entrance staircase descending into cool shadow.",
    url: "/pages/journal/valentine-cave-lava-beds/",
    readMinutes: 6,
  },
  {
    slug: "lassen-volcanic-national-park",
    title: "Lassen Volcanic: Emerald Lake, Lake Helen, and the Hydrothermal Basins",
    excerpt:
      "An overlooked National Park where a shield volcano, a plug dome, a strato, and a cinder cone sit in the same skyline — and where spring sun on alpine meltwater turns Emerald Lake unreal.",
    category: "Destination",
    tags: ["Hiking", "National Park Service", "Volcano", "California"],
    author: "freedomland",
    date: "2026-04-10",
    image: "/assets/images/travel/emerald-lake.jpg",
    imageAlt: "Emerald Lake at Lassen Volcanic, ringed by snowmelt and pine.",
    url: "/pages/journal/lassen-volcanic-national-park/",
    readMinutes: 10,
  },
  {
    slug: "oregon-coast-101-highlights",
    title: "Oregon Coast 101: Hug Point, Cape Meares, and Why You Slow Down",
    excerpt:
      "A quiet weekend tracing Highway 101 — low-tide arches at Hug Point, the crooked Sitka spruce on Cape Meares, and the slow rhythm of running the coast on FJ time.",
    category: "Destination",
    tags: ["Coast", "Oregon", "Overlanding", "Road Trip"],
    author: "freedomland",
    date: "2026-04-05",
    image: "/assets/images/travel/support-hug-point.jpg",
    imageAlt: "Hug Point sea arch on the Oregon coast at low tide.",
    url: "/pages/journal/oregon-coast-101-highlights/",
    readMinutes: 8,
  },
  {
    slug: "umpqua-hot-springs",
    title: "Umpqua Hot Springs: Oregon's Steamy Paradise Awaits Your Soak",
    excerpt: "Umpqua Hot Springs offers tiered geothermal pools from 100-115°F in Oregon's Umpqua National Forest, a magical escape blending rugged beauty and relaxation.",
    category: "Destination",
    tags: ["Hot Springs", "Hiking", "US Forest Service", "Oregon"],
    author: "freedomland",
    date: "2026-04-28",
    image: "/assets/images/posts/umpqua-hot-springs-hero.jpg",
    imageAlt: "Umpqua Hot Springs' tiered geothermal pools cascading down a travertine terrace.",
    url: "/pages/journal/umpqua-hot-springs/",
    readMinutes: 3,
  },
  {
    slug: "rogue-rock-gym-rises-again",
    title: "Rogue Rock Gym Rises Again: Medford’s Climbing Community Prepares for a Comeback",
    excerpt: "The story of Rogue Rock Gym's closure and planned reopening reflects the resilience of Medford's climbing community after an unexpected shutdown.",
    category: "Field Report",
    tags: ["Rock Climbing", "Community", "Medford", "Oregon"],
    author: "freedomland",
    date: "2026-04-28",
    image: "/assets/images/posts/rogue-rock-gym-rises-again-hero.jpg",
    imageAlt: "Rogue Rock Gym in Medford, Oregon, ready for its reopening under new ownership.",
    url: "/pages/journal/rogue-rock-gym-rises-again/",
    readMinutes: 2,
  },
  {
    slug: "adventure-outdoors-sports-challenge-excite-teach",
    title: "Adventure Outdoors: Sports That Challenge, Excite, and Teach",
    excerpt: "Outdoor sports build confidence, stamina, and skills in middle school students through adventures like hiking, biking, climbing, and kayaking.",
    category: "Field Notes",
    tags: ["Outdoor Sports", "Adolescents", "Education", "Health"],
    author: "freedomland",
    date: "2026-04-28",
    image: "/assets/images/posts/adventure-outdoors-sports-challenge-excite-teach-hero.jpg",
    imageAlt: "Students participating in outdoor sports like hiking and kayaking.",
    url: "/pages/journal/adventure-outdoors-sports-challenge-excite-teach/",
    readMinutes: 4,
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getOtherPosts(slug, limit = 3) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

export function postsByTag(tag) {
  const t = tag.toLowerCase();
  return posts.filter((p) => (p.tags ?? []).some((x) => x.toLowerCase() === t));
}

export function latestPosts(limit = 3) {
  return posts.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export function postsByCategory(category) {
  return posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}
