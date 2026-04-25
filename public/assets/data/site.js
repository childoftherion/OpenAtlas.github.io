// Site-wide metadata. Edit this file to change the brand name, nav items,
// tagline, or copyright notice.

export const site = {
  brand: { name: "Open Atlas", aside: "Gear", tagline: "The road is calling." },
  description:
    "Honest, field-tested stories from overlanding in the Pacific Northwest and beyond. Built around the FJ13 Toyota FJ Cruiser.",
  copyrightHolder: "Open Atlas",
  copyrightYear: 2026,
  nav: [
    { label: "Explore", href: "/pages/explore/" },
    { label: "Pacific Northwest", href: "/pages/pacific-northwest/" },
    { label: "FJ13", href: "/pages/fj13/" },
    { label: "Our Gear", href: "/pages/our-gear/" },
    { label: "Resources", href: "/pages/resources/" },
    { label: "About", href: "/pages/about/" },
    {
      label: "Fuel the Adventure",
      href: "/pages/fuel-the-adventure/",
      cta: true,
    },
  ],
  footerColumns: [
    {
      title: "Adventures",
      links: [
        { label: "Latest Journal", href: "/pages/explore/" },
        { label: "Pacific Northwest", href: "/pages/pacific-northwest/" },
        { label: "Our Gear", href: "/pages/our-gear/" },
        { label: "Trip Planning", href: "/pages/resources/" },
      ],
    },
    {
      title: "Rig",
      links: [
        { label: "Meet FJ13", href: "/pages/fj13/" },
        { label: "Fuel the Adventure", href: "/pages/fuel-the-adventure/" },
      ],
    },
    {
      title: "Project",
      links: [
        { label: "About Open Atlas", href: "/pages/about/" },
        { label: "Contact", href: "/pages/contact/" },
        { label: "Home", href: "/" },
      ],
    },
  ],
  pillars: [
    {
      title: "Destinations that matter",
      body:
        "Waterfalls, lava tubes, forest roads, and the quiet corners most maps gloss over.",
      icon: "map",
    },
    {
      title: "Gear we actually use",
      body:
        "Reviews informed by miles of trail, mud, condensation, and the occasional river dunk.",
      icon: "compass",
    },
    {
      title: "A rig, kept ready",
      body:
        "The FJ13 is how we get to the good stuff. Keeping it capable is half the work.",
      icon: "truck",
    },
    {
      title: "Leave it better",
      body:
        "We travel on public lands. That means pack it out, tread lightly, and respect the places that let us in.",
      icon: "leaf",
    },
  ],
  stats: [
    { value: "3", label: "States covered", note: "and counting" },
    { value: "20+", label: "Destinations in the directory" },
    { value: "8", label: "Categories of field-tested gear" },
    { value: "1", label: "Trail rig", note: "the FJ13" },
  ],
};
