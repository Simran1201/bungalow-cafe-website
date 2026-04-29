import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Cake, Music, Sun, Star, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import pasta from "@/assets/pasta.jpg";
import garlicBread from "@/assets/garlic-bread.jpg";
import pizza from "@/assets/pizza.jpg";
import nachos from "@/assets/nachos.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Bungalow Café — Relax. Sip. Enjoy. | Adajan, Surat" },
      { name: "description", content: "Cozy café in Adajan, Surat. Great coffee, pasta, pizza, rooftop seating & live music. Reserve your table today." },
      { property: "og:title", content: "The Bungalow Café — Relax. Sip. Enjoy." },
      { property: "og:description", content: "Cozy café in Adajan, Surat. Great coffee, pasta, pizza & rooftop seating." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Coffee, title: "Great Coffee", desc: "Hand-crafted espresso & specialty brews." },
  { icon: Cake, title: "Desserts", desc: "Freshly baked cakes and indulgent treats." },
  { icon: Music, title: "Live Music", desc: "Acoustic evenings to soothe your senses." },
  { icon: Sun, title: "Rooftop Seating", desc: "Open garden vibes under the sky." },
];

const popular = [
  { name: "Pink Sauce Pasta", img: pasta },
  { name: "Garlic Bread with Cheese", img: garlicBread },
  { name: "Margarita Pizza", img: pizza },
  { name: "Loaded Nachos", img: nachos },
  { name: "Iced Coffee", img: icedCoffee },
];

const reviews = [
  { name: "Aanya P.", text: "Perfect place for family & friends. Calm, beautiful and the food is just chef's kiss.", rating: 5 },
  { name: "Rohan M.", text: "Pink sauce pasta is a must-try. Coffee is great too. Loved the rooftop garden vibe.", rating: 4 },
  { name: "Priya S.", text: "Ambience is relaxing and beautiful. Great spot for quiet work or a long catch-up.", rating: 5 },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cozy café interior" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs uppercase tracking-[0.25em]">
              Adajan, Surat
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
              The Bungalow Café
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-display italic opacity-90">
              Relax. Sip. Enjoy.
            </p>
            <p className="mt-6 text-base md:text-lg opacity-90 max-w-xl">
              Cozy café with great food, coffee, and vibes — indoor seating, garden tables, and a rooftop made for slow afternoons.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium shadow-glow hover:scale-[1.02] transition-transform">
                Reserve Table <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 text-primary-foreground px-7 py-3.5 font-medium hover:bg-white/20 transition-colors">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={interior} alt="Café interior" className="rounded-3xl shadow-soft w-full" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground rounded-2xl p-6 shadow-glow">
              <div className="font-display text-4xl">4.1★</div>
              <div className="text-xs uppercase tracking-widest opacity-80">495 reviews</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A cozy little corner in Surat.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              The Bungalow Café is designed to give a peaceful and relaxing experience.
              With cozy interiors and open garden seating, it's perfect for hangouts,
              dates, and casual meetings.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Why visit</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Made for slow, happy moments.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="group rounded-3xl bg-card p-7 shadow-soft border border-border/40 hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-2xl bg-secondary text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular items */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Popular Items</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by our regulars.</h2>
            </div>
            <Link to="/menu" className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {popular.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-square overflow-hidden rounded-3xl shadow-soft">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="mt-3 font-medium text-center">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Reviews</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">4.1 ★ from 495 happy guests.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-3xl bg-card p-7 shadow-soft border border-border/40">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">"{r.text}"</p>
                <p className="mt-5 text-sm font-semibold text-primary">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 md:p-16 text-primary-foreground">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl">Visit us today, or reserve your table.</h2>
                <p className="mt-4 opacity-90 text-lg">Open 11 AM onwards · ₹400–600 per person</p>
                <p className="mt-2 opacity-80 text-sm flex items-center gap-2"><MapPin className="h-4 w-4" /> A102, Valentina Business Hub, Adajan, Surat</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium shadow-glow hover:scale-[1.02] transition-transform">
                  Reserve Table
                </Link>
                <a href="tel:07878757233" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 font-medium hover:bg-white/20">
                  Call: 078787 57233
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
