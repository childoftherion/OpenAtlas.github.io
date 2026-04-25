import { renderPhotoRow } from "../components.js";
import { initReveal } from "../motion.js";

export function init() {
  const fjPhotos = [
    {
      src: "/assets/images/fj13/fj13-briggs-creek.jpg",
      alt: "FJ13 at Briggs Creek.",
      caption: "FJ13 at Briggs Creek",
    },
    {
      src: "/assets/images/fj13/fj13-lassen.jpg",
      alt: "FJ13 at Lassen Volcanic.",
      caption: "FJ13 at Lassen Volcanic",
    },
    {
      src: "/assets/images/fj13/fj13-night-lights.jpg",
      alt: "FJ13's night-lighting setup.",
      caption: "FJ13's Night Lights",
    },
  ];

  const travelPhotos = [
    {
      src: "/assets/images/travel/coffee-briggs.jpg",
      alt: "Coffee setup at Briggs.",
      caption: "Coffee at Briggs",
    },
    {
      src: "/assets/images/travel/emerald-lake.jpg",
      alt: "Emerald Lake at sunrise.",
      caption: "Emerald Lake",
    },
    {
      src: "/assets/images/travel/mt-hood-nf.jpg",
      alt: "Mount Hood National Forest.",
      caption: "Mt. Hood NF",
    },
    {
      src: "/assets/images/travel/lake-helen.jpg",
      alt: "Lake Helen basin.",
      caption: "Lake Helen",
    },
  ];

  const supportPhotos = [
    {
      src: "/assets/images/travel/support-hug-point.jpg",
      alt: "Hug Point arch on the Oregon coast.",
      caption: "Hug Point",
    },
    {
      src: "/assets/images/travel/support-lake-tahoe.jpg",
      alt: "Overlook at Lake Tahoe.",
      caption: "Lake Tahoe",
    },
    {
      src: "/assets/images/travel/support-lava-tube.jpg",
      alt: "Skylight inside a lava tube.",
      caption: "Lava Tube",
    },
    {
      src: "/assets/images/travel/support-cape-meares.jpg",
      alt: "Cape Meares lighthouse view.",
      caption: "Cape Meares",
    },
  ];

  const map = {
    "[data-photo-fj]": fjPhotos,
    "[data-photo-travel]": travelPhotos,
    "[data-photo-support]": supportPhotos,
  };

  for (const [sel, photos] of Object.entries(map)) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = renderPhotoRow(photos);
  }
  initReveal();
}
