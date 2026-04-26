// Library catalog, grouped by category. Each item can include an optional
// `review` (slug of a journal post) and `links` for affiliate URLs. When
// you add a new item, drop a photo into `/assets/images/library/` and
// reference it by relative path.

export const libraryCategories = [
  {
    id: "reference",
    title: "Reference Materials",
    tag: "The best books for planning your trip and reading around the campfire",
    items: [
      {
        author: "Adam Sawyer",
        name: "HIKING WATERFALLS Oregon: A Guide to the State's Best Waterfall Hikes",
        publisher: "Falcon Guides",
        image: "/assets/images/library/hiking-waterfalls-oregon.jpg",
        imageAlt: "Hiking Waterfalls Oregon book cover.",
        blurb: "The definitive guide to Oregon's waterfalls. Every hike rated for difficulty and scenery.",
        details: [
          "Covers 100+ waterfall hikes",
          "GPS coordinates included",
          "Seasonal access information"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/4vQPQoz" }]
      },
      {
        author: "Stan Tekiela",
        name: "Birds of Prey of the West: Field Guide",
        publisher: "Adventure Press",
        image: "/assets/images/library/birds-of-prey-west.jpg",
        imageAlt: "Birds of Prey of the West field guide cover.",
        blurb: "Comprehensive guide to raptors of the American West.",
        details: [
          "200+ species illustrated",
          "Quick ID comparisons",
          "Range maps included"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/3P2pnnk" }]
      },
      {
        author: "National Audubon Society",
        name: "National Audubon Society Field Guide to Rocks and Minerals: North America",
        publisher: "Alfred A. Knopf",
        image: "/assets/images/library/guide-rocks-minerals.jpg",
        imageAlt: "Rocks and Minerals field guide cover.",
        blurb: "The essential guide to identifying rocks and minerals across North America.",
        details: [
          "Full color photographs",
          "Comprehensive coverage",
          "Portable format"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/4sYRwK6" }]
      },
      {
        author: "National Audubon Society",
        name: "National Audubon Society Field Guide to North American Wildflowers: Western Region",
        publisher: "Alfred A. Knopf",
        image: "/assets/images/library/guide-wildflowers.jpg",
        imageAlt: "Wildflowers field guide cover.",
        blurb: "Identify wildflowers from the Rockies to the Pacific.",
        details: [
          "800+ species covered",
          "Blooming season charts",
          "Habitat information"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/4ue480Z" }]
      },
      {
        author: "National Audubon Society",
        name: "National Audubon Society Field Guide to North American Mushrooms",
        publisher: "Alfred A. Knopf",
        image: "/assets/images/library/guide-mushrooms.jpg",
        imageAlt: "Mushrooms field guide cover.",
        blurb: "Identify mushrooms with this comprehensive field guide.",
        details: [
          "800+ species photographed",
          "Edibility information",
          "Collection tips"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/4e47aA0" }]
      },
      {
        author: "Elbert L. Little",
        name: "National Audubon Society Field Guide to North American Trees: Western Region",
        publisher: "Alfred A. Knopf",
        image: "/assets/images/library/guide-trees.jpg",
        imageAlt: "Trees field guide cover.",
        blurb: "The definitive guide to identifying trees in the West.",
        details: [
          "700+ species covered",
          "Leaf/ bark photos",
          "Range maps"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/48pZi8q" }]
      },
      {
        author: "Ellen Morris Bishop",
        name: "In Search of Ancient Oregon: A Geological and Natural History",
        publisher: "Oregon State University Press",
        image: "/assets/images/library/ancient-oregon.jpg",
        imageAlt: "In Search of Ancient Oregon book cover.",
        blurb: "Explore Oregon's fascinating geological history.",
        details: [
          "Geological formations explained",
          "Full color photos",
          "Road trip format"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/48nnB6Z" }]
      },
      {
        author: "Gregory A. Plumb",
        name: "Waterfall Lover's Guide Pacific Northwest",
        publisher: "The Wilderness Press",
        image: "/assets/images/library/waterfall-lovers-guide.jpg",
        imageAlt: "Waterfall Lover's Guide cover.",
        blurb: "Discover the hidden waterfalls of the Pacific Northwest.",
        details: [
          "200+ waterfalls listed",
          "Driving directions",
          "Difficulty ratings"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/3QJkuA1" }]
      },
      {
        author: "Jon L. Dunn & Jonathan Alderfer",
        name: "National Geographic Field Guide to the Birds of North America, Fifth Edition",
        publisher: "National Geographic",
        image: "/assets/images/library/guide-birds.jpg",
        imageAlt: "National Geographic Birds field guide cover.",
        blurb: "The most comprehensive bird field guide available.",
        details: [
          "1000+ species covered",
          "Latest taxonomy",
          "Accurate range maps"
        ],
        links: [{ label: "Buy on Amazon", href: "https://amzn.to/4eEQZcz" }]
      },
      // === PLACEHOLDERS - Fill in as you go ===
      /*
      {
        author: "TODO: Author",
        name: "TODO: Book Title",
        publisher: "TODO: Publisher",
        image: "/assets/images/library/placeholder.jpg",
        imageAlt: "TODO: Add cover image",
        blurb: "TODO: Add description",
        details: [
          "TODO: Add detail 1",
          "TODO: Add detail 2",
          "TODO: Add detail 3"
        ],
        links: [{ label: "TODO: Add link", href: "#" }]
      },
      {
        author: "TODO: Author",
        name: "TODO: Book Title",
        publisher: "TODO: Publisher",
        image: "/assets/images/library/placeholder.jpg",
        imageAlt: "TODO: Add cover image",
        blurb: "TODO: Add description",
        details: [
          "TODO: Add detail 1",
          "TODO: Add detail 2",
          "TODO: Add detail 3"
        ],
        links: [{ label: "TODO: Add link", href: "#" }]
      },
      {
        author: "TODO: Author",
        name: "TODO: Book Title",
        publisher: "TODO: Publisher",
        image: "/assets/images/library/placeholder.jpg",
        imageAlt: "TODO: Add cover image",
        blurb: "TODO: Add description",
        details: [
          "TODO: Add detail 1",
          "TODO: Add detail 2",
          "TODO: Add detail 3"
        ],
        links: [{ label: "TODO: Add link", href: "#" }]
      },
      {
        author: "TODO: Author",
        name: "TODO: Book Title",
        publisher: "TODO: Publisher",
        image: "/assets/images/library/placeholder.jpg",
        imageAlt: "TODO: Add cover image",
        blurb: "TODO: Add description",
        details: [
          "TODO: Add detail 1",
          "TODO: Add detail 2",
          "TODO: Add detail 3"
        ],
        links: [{ label: "TODO: Add link", href: "#" }]
      }
      */
    ],
  },
];