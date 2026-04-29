import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reserve — The Bungalow Café | Adajan, Surat" },
      { name: "description", content: "Reserve a table at The Bungalow Café in Adajan, Surat. Call 078787 57233 or send us a message." },
      { property: "og:title", content: "Contact & Reserve — The Bungalow Café" },
      { property: "og:description", content: "Find us, call us, or reserve your table online." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  date: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().trim().max(500).optional(),
});

function ContactPage() {
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      setStatus({ type: "err", msg: result.error.issues[0]?.message ?? "Please check the form" });
      return;
    }
    const { name, phone, date, guests, message } = result.data;
    const text = encodeURIComponent(
      `Hi Bungalow Café! I'd like to reserve a table.%0A%0AName: ${name}%0APhone: ${phone}%0ADate/Time: ${date ?? "-"}%0AGuests: ${guests ?? "-"}%0AMessage: ${message ?? "-"}`
    );
    window.open(`https://wa.me/917878757233?text=${text}`, "_blank");
    setStatus({ type: "ok", msg: "Opening WhatsApp to confirm your reservation…" });
    form.reset();
  }

  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact & Reserve</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Come say hello.</h1>
          <p className="mt-5 text-muted-foreground text-lg">Walk in, call us, or reserve your table below.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-3xl bg-card p-8 border border-border/40 shadow-soft">
            <h2 className="font-display text-3xl">Reserve a table</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll confirm your booking on WhatsApp.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your full name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="Phone number" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Date & time" name="date" placeholder="e.g. Sat 7:30 PM" />
                <Field label="Guests" name="guests" placeholder="e.g. 4" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Any special requests?"
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 font-medium shadow-soft hover:bg-primary-glow transition-colors">
                Send via WhatsApp <Send className="h-4 w-4" />
              </button>
              {status && (
                <p className={`text-sm ${status.type === "ok" ? "text-primary" : "text-destructive"}`}>{status.msg}</p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <InfoCard icon={MapPin} title="Address">
              A102, First Floor, Valentina Business Hub, Subhash Chandra Bose Marg, Adajan, Surat, Gujarat 395009
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <a href="tel:07878757233" className="text-primary font-medium">078787 57233</a>
            </InfoCard>
            <InfoCard icon={Clock} title="Timings">
              Open daily · 11 AM onwards
            </InfoCard>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-border/40 aspect-video">
              <iframe
                title="The Bungalow Café location"
                src="https://www.google.com/maps?q=Valentina+Business+Hub+Adajan+Surat&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={120}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-card p-6 border border-border/40 shadow-soft flex gap-4">
      <div className="h-11 w-11 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
