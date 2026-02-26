import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif text-white italic">Lumière</h2>
            <p className="max-w-sm text-stone-400 font-light leading-relaxed">
              Bringing the authentic taste of artisanal French baking to your neighborhood. Every loaf is a labor of love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">Visit Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-bakery-crust" />
                <span>123 Boulangerie Way <br /> Paris, France 75004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-bakery-crust" />
                <span>+33 1 23 45 67 89</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">Hours</h4>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-stone-500">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Lumière Boulangerie. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
