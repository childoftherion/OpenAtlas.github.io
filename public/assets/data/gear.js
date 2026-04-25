// Gear catalog, grouped by category. Each item can include an optional
// `review` (slug of a journal post) and `links` for affiliate URLs. When
// you add a new item, drop a photo into `/assets/images/gear/` and
// reference it by relative path.

export const gearCategories = [
  {
    id: "vision",
    title: "Vision",
    tag: "See it clearly",
    items: [
      {
        brand: "Columbia Outfitters",
        name: "C3057 Titanium Frames",
        image: "/assets/images/gear/columbia-frames.jpg",
        imageAlt: "Columbia Outfitters C3057 titanium eyeglass frames.",
        blurb:
          "For the avid adventurer who needs frames that hold up to the moisture of the underground and the high winds of the summit — comfortable, durable, and forgettable in the best way.",
        details: [
          "Titanium alloy frame, spring-hinge temples.",
          "Weight: featherweight under a headlamp strap.",
          "Finish holds up to sweat, rain, and the occasional slot-canyon scrape.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
  {
    id: "hydration",
    title: "Hydration",
    tag: "Keep drinking",
    items: [
      {
        brand: "YETI",
        name: "Rambler Trio — 30 oz Tumbler, 10 oz Mug, 26 oz Bottle",
        image: "/assets/images/gear/yeti-trio.jpg",
        imageAlt: "YETI Rambler trio — tumbler, mug, and bottle.",
        blurb:
          "We found the best way to match consistency and utility during our travels with YETI. From coffee before hitting the trail to staying hydrated on steep ascents, the Rambler lineup covers every leg of the day.",
        details: [
          "Double-wall vacuum insulation across the set.",
          "DuraCoat finish resists chips and scuffs.",
          "Dishwasher safe — a rarity at this build quality.",
        ],
        review: "yeti-rambler-26oz-review",
        links: [
          { label: "30 oz Tumbler", href: "#" },
          { label: "10 oz Mug", href: "#" },
          { label: "26 oz Bottle", href: "#" },
        ],
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    tag: "First task of the day",
    items: [
      {
        brand: "Stanley",
        name: "Classic 48 oz French Press",
        image: "/assets/images/gear/stanley-french-press.jpg",
        imageAlt:
          "A scuffed Stanley classic 48 oz French press on a camp table.",
        blurb:
          "Don't let its beat-up appearance fool you. Coffee is the first task of any successful day of outdoor exploration, and the Stanley French Press has come to our rescue to simplify the morning routine.",
        details: [
          "18/8 stainless steel — survives tailgate drops and bear-box jostles.",
          "Insulated walls keep the second cup hot 30 min later.",
          "Big enough for two, small enough to pack every trip.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
  {
    id: "shelter",
    title: "Shelter & Sleep",
    tag: "Leave the ground behind",
    items: [
      {
        brand: "Eagle's Nest Outfitters (ENO)",
        name: "OneLink Hammock System",
        image: "/assets/images/gear/eno-hammock.svg",
        imageAlt: "Illustration of a hammock slung between two trees at dusk.",
        blurb:
          "Tents are so overrated. Poles, footprints, rain fly, stakes — give yourself a break. The OneLink system from ENO is lightweight, easy to pack, and rocks you to sleep off the ground.",
        details: [
          "Integrated hammock, straps, bug net, and rain tarp.",
          "Pack weight in the low four-pound range.",
          "Shoulder sling carries; sets up in under five minutes at camp.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
      {
        brand: "Therm-a-Rest",
        name: "NeoAir XTherm NXT Sleeping Pad",
        image: "/assets/images/gear/therm-a-rest-pad.svg",
        imageAlt: "Illustration of an inflated insulated sleeping pad.",
        blurb:
          "When the hammock isn't the move and the ground is the hotel, this is the pad we pack. R-value 7.3 turns a cold volcanic plateau into a passable bed.",
        details: [
          "R-value 7.3 — four-season capable.",
          "Pump sack included; ~2 minute inflate.",
          "Stuffs smaller than a 1L Nalgene.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
  {
    id: "clothing-packs",
    title: "Clothing & Packs",
    tag: "Layer, pack, repeat",
    items: [
      {
        brand: "Patagonia",
        name: "Nano Puff Hoody",
        image: "/assets/images/gear/patagonia-nano-puff.svg",
        imageAlt: "Illustration of an insulated puffy jacket.",
        blurb:
          "The first thing we grab from the cargo drawer in the FJ. Compressible, water-resistant, and warm enough for 95% of spring PNW evenings.",
        details: [
          "PrimaLoft Gold Eco synthetic insulation.",
          "DWR-treated recycled polyester shell.",
          "Stuffs into its own chest pocket the size of a grapefruit.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
      {
        brand: "Osprey",
        name: "Talon 33 Pack",
        image: "/assets/images/gear/osprey-pack.svg",
        imageAlt: "Illustration of a hiking backpack with integrated straps.",
        blurb:
          "Big enough for a long day hike with water, layers, camera, and lunch; small enough it doesn't feel like overkill on the quick ones.",
        details: [
          "AirScape back panel ventilates on summer climbs.",
          "Integrated rain cover; trekking pole attachment.",
          "Hip-belt pockets for phone + snack, as they should.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    tag: "Navigate and capture",
    items: [
      {
        brand: "Garmin",
        name: "Montana 710i Handheld GPS",
        image: "/assets/images/gear/garmin-montana.svg",
        imageAlt: "Illustration of a rugged handheld GPS device.",
        blurb:
          "This handheld GPS gives us the best of both worlds. A large touch display improves trail planning and tracking accuracy, and with the suction mount it doubles as a basic automotive navigator.",
        details: [
          "inReach two-way satellite messaging + SOS.",
          "Preloaded TopoActive maps; expandable via microSD.",
          "Mounts to the FJ13's windshield with the suction kit.",
        ],
        links: [
          { label: "Montana 710i (affiliate)", href: "#" },
          { label: "Suction Cup Mount (affiliate)", href: "#" },
        ],
      },
      {
        brand: "Garmin",
        name: "Instinct Esports Edition GPS Smartwatch",
        image: "/assets/images/gear/garmin-instinct.svg",
        imageAlt: "Illustration of a rugged GPS smartwatch on a trail face.",
        blurb:
          "A rugged GPS smartwatch that tracks trails as easily as it tracks sleep — our everyday piece on and off the trail.",
        details: [
          "Solar charging extends battery on multi-day trips.",
          "Barometric altimeter + compass for quick orientation.",
          "10 ATM water rating for rivers and rainstorms.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
      {
        brand: "DJI",
        name: "Mini 4 Pro Drone",
        image: "/assets/images/gear/dji-drone.svg",
        imageAlt: "Top-down illustration of a compact quadcopter drone.",
        blurb:
          "Our aerial eye for understanding a landscape before we commit to a route. Under 250g, so it ducks many registration requirements, and the 4K footage gets us usable b-roll for every post.",
        details: [
          "Sub-250g takeoff weight.",
          "4K/100fps; omnidirectional obstacle sensing.",
          "Follows a battery cadence that matches a coffee refill.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
  {
    id: "fj13-overlanding",
    title: "FJ13 Overlanding",
    tag: "Trail rig essentials",
    items: [
      {
        brand: "MAXTRAX",
        name: "MKII Recovery Boards",
        image: "/assets/images/gear/maxtrax.svg",
        imageAlt: "Illustration of a pair of orange traction recovery boards.",
        blurb:
          "When sand, mud, or spring snow turns a forest road into a slip-and-slide, these boards put the FJ back in motion without waiting for a winch pull.",
        details: [
          "Reinforced nylon construction resists UV and flex fatigue.",
          "Integrated shovels, mounting points, and leashes.",
          "Bright orange — easier to find after a long recovery.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
      {
        brand: "ARB",
        name: "40-liter Weatherproof Storage Box",
        image: "/assets/images/gear/arb-box.svg",
        imageAlt: "Illustration of a rugged weatherproof gear storage box.",
        blurb:
          "Kitchen, coffee, and recovery kits live here. Stackable, weatherproof, and the right size to slide behind the driver's seat.",
        details: [
          "Gasket-sealed lid; dust and rain proof.",
          "Stackable footprint pairs with the drawer system.",
          "Built-in tie-down points for rough-road stacking.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
      {
        brand: "Goal Zero",
        name: "Yeti 500 Portable Power Station",
        image: "/assets/images/gear/goal-zero.svg",
        imageAlt: "Illustration of a portable power station with display and ports.",
        blurb:
          "Keeps the drone, laptop, lights, and camera batteries going across long weekends when the FJ is parked and the hammock is up.",
        details: [
          "~500 Wh LFP battery chemistry.",
          "Pure sine-wave AC inverter + USB-C PD.",
          "Solar ready for truly off-grid stretches.",
        ],
        links: [{ label: "Affiliate link", href: "#" }],
      },
    ],
  },
];

// Useful for gear-item template to render category descriptions on pages.
export const gearDisclosure =
  "Some links on this page are affiliate links. If you click through and buy something we recommend, Open Atlas may earn a small commission at no extra cost to you. We only recommend gear we actually carry and use on the trail.";
