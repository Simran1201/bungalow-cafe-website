import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Bungalow Café" className="h-12 w-12 rounded-full bg-white/10" />
            <div>
              <div className="font-display text-xl">The Bungalow Café</div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-80">Relax · Sip · Enjoy</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            A cozy café in Surat with indoor and garden seating. Perfect for friends, family, or a quiet coffee.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Visit</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>A102, First Floor, Valentina Business Hub, Subhash Chandra Bose Marg, Adajan, Surat 395009</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href="tel:07878757233">078787 57233</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0" /><span>11 AM onwards · Daily</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
            <li><Link to="/contact" className="hover:underline">Reserve Table</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
          <a
            href="https://wa.me/917878757233"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} The Bungalow Café. All rights reserved.</span>
          <span>Made with care in Surat, Gujarat</span>
        </div>
      </div>
    </footer>
  );
}
