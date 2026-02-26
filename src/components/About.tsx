import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bakery-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000" 
                alt="Baker at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-bakery-olive rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl hidden md:flex">
              <p className="font-serif italic text-lg leading-tight">Est. 1994 <br /> in Provence</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-bakery-crust uppercase tracking-widest text-xs font-bold">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              The Secret is in <br /> <span className="italic">the Patience.</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed">
              <p>
                Founded on the belief that bread is more than just sustenance—it's a connection to the earth and our heritage. At Lumière, we honor the slow traditions of French baking.
              </p>
              <p>
                Every loaf begins with our 30-year-old starter, "Céleste," and undergoes a minimum 24-hour cold fermentation process. This patience yields a complex flavor profile and a texture that is as nourishing as it is delicious.
              </p>
              <p>
                We source our grains exclusively from organic, regenerative farms, ensuring that every bite supports both your health and the planet.
              </p>
            </div>
            
            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-stone-200">
              <div>
                <h4 className="font-serif text-2xl mb-1">100%</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400">Organic Grains</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-1">48h</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400">Slow Ferment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
