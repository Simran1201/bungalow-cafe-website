import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Bungalow Café | Our Story" },
      { name: "description", content: "Discover the story behind The Bungalow Café in Adajan, Surat — cozy interiors, garden seating, perfect for friends & family." },
      { property: "og:title", content: "About — The Bungalow Café" },
      { property: "og:description", content: "Our story, atmosphere and the people we welcome every day." },
      { property: "og:image", content: interior },
    ],
  }),
  component: AboutPage,
});

const atmosphere = ["Casual", "Cozy", "Romantic", "Trendy"];
const crowd = ["Friends & Groups", "Students", "Solo visitors", "Families"];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">A bungalow built for moments.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src={interior} alt="Café interior with teal walls" className="rounded-3xl shadow-soft w-full" loading="lazy" />
          <div>
            <h2 className="font-display text-4xl">Our Story</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              The Bungalow Café is designed to give a peaceful and relaxing experience.
              With cozy interiors and open garden seating, it's perfect for hangouts,
              dates, and casual meetings.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tucked inside Valentina Business Hub in Adajan, our space brings together
              warm teal walls, hanging greenery, and a sun-soaked rooftop — a small
              escape from the city, a few steps from your day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img src={outdoor} alt="Outdoor garden seating" className="rounded-3xl shadow-soft w-full" loading="lazy" />
          </div>
          <div className="md:order-1 space-y-10">
            <div>
              <h3 className="font-display text-3xl">Atmosphere</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {atmosphere.map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">{a}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl">Who visits</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {crowd.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
