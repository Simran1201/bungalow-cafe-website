import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import outdoor from "@/assets/outdoor.jpg";
import pasta from "@/assets/pasta.jpg";
import pizza from "@/assets/pizza.jpg";
import nachos from "@/assets/nachos.jpg";
import garlic from "@/assets/garlic-bread.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import mojito from "@/assets/mojito.jpg";
import iced from "@/assets/iced-coffee.jpg";
import cheese from "@/assets/cheesecake.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Bungalow Café | Food, Drinks & Ambience" },
      { name: "description", content: "Step inside The Bungalow Café through pictures of our food, drinks, ambience, and outdoor seating." },
      { property: "og:title", content: "Gallery — The Bungalow Café" },
      { property: "og:description", content: "Food, drinks, ambience and outdoor seating." },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});

const sections = [
  { title: "Food", images: [pasta, pizza, nachos, garlic] },
  { title: "Drinks", images: [cappuccino, iced, mojito, cheese] },
  { title: "Ambience", images: [interior, interior, interior] },
  { title: "Outdoor Seating", images: [outdoor, outdoor, outdoor] },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Gallery</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">A peek inside.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl md:text-4xl text-primary">{s.title}</h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {s.images.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-3xl shadow-soft group">
                    <img src={img} alt={`${s.title} ${i + 1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
