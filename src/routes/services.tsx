import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed, ShoppingBag, Bike, Trees, Sun, Music, ParkingCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Bungalow Café | Dine-in, Takeaway & Delivery" },
      { name: "description", content: "Dine-in, takeaway and no-contact delivery. Outdoor seating, rooftop, live music and free parking at The Bungalow Café." },
      { property: "og:title", content: "Services — The Bungalow Café" },
      { property: "og:description", content: "Dining options, features and amenities." },
    ],
  }),
  component: ServicesPage,
});

const dining = [
  { icon: UtensilsCrossed, title: "Dine-in", desc: "Indoor and garden seating with a warm ambience." },
  { icon: ShoppingBag, title: "Takeaway", desc: "Order ahead and pick up — quick and easy." },
  { icon: Bike, title: "No-contact Delivery", desc: "Hot meals brought to your doorstep." },
];

const features = [
  { icon: Trees, title: "Outdoor Seating" },
  { icon: Sun, title: "Rooftop Seating" },
  { icon: Music, title: "Live Music" },
  { icon: ParkingCircle, title: "Free Parking" },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Services</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">However you like it.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl mb-8">Dining Options</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {dining.map((d) => (
              <div key={d.title} className="rounded-3xl bg-card p-7 border border-border/40 shadow-soft">
                <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl mb-8">Features & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl bg-card p-7 text-center border border-border/40 shadow-soft hover:bg-primary hover:text-primary-foreground transition-colors group">
                <div className="h-14 w-14 mx-auto rounded-full bg-secondary text-primary grid place-items-center group-hover:bg-white/20 group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-medium">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
