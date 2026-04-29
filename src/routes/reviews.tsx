import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — The Bungalow Café | 4.1 ★ (495 reviews)" },
      { name: "description", content: "Read what guests say about The Bungalow Café — 4.1 stars from 495 reviews. Cozy ambience, great food, perfect for hangouts." },
      { property: "og:title", content: "Reviews — The Bungalow Café" },
      { property: "og:description", content: "4.1 ★ from 495 happy guests." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Aanya P.", text: "Perfect place for family & friends. The teal interiors and rooftop garden make every visit feel special.", rating: 5 },
  { name: "Rohan M.", text: "Pink sauce pasta is a must-try. Coffee is great too.", rating: 4 },
  { name: "Priya S.", text: "Ambience is relaxing and beautiful. I came for an hour and stayed for three.", rating: 5 },
  { name: "Dev K.", text: "Lovely spot for a date night. Live music made the evening unforgettable.", rating: 5 },
  { name: "Meera J.", text: "Loved the cheesecake. Service was warm and quick.", rating: 4 },
  { name: "Karan T.", text: "Great place to work from. Wi-Fi is solid and the coffee keeps coming.", rating: 4 },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Reviews</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">What our guests say.</h1>
          <div className="mt-10 inline-flex flex-col items-center gap-2 px-10 py-7 rounded-3xl bg-card border border-border shadow-soft">
            <div className="font-display text-6xl text-primary">4.1</div>
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill={i < 4 ? "currentColor" : "none"} />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">Based on 495 reviews</div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl bg-card p-7 border border-border/40 shadow-soft">
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
      </section>
    </>
  );
}
