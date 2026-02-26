import { motion } from "motion/react";
import { useCart, MenuItem } from "../context/CartContext";

const MENU_ITEMS: MenuItem[] = [
  {
    id: "vanila-cake",
    name: "Vanila Cake",
    price: 200000,
    desc: "Perpaduan Vanila dengan buah - buahan",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-vanilla-cake-with-fruit-png-image_10201245.png",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: 150000,
    desc: "Perpaduan Coklat dengan buah - buahan",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-chocolate-cake-with-fruit-png-image_10201246.png",
  },
  {
    id: "cupcake",
    name: "Cupcake",
    price: 110000,
    desc: "Cupcake Coklat dan chococips",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-chocolate-cupcake-with-chocolate-chips-png-image_10201247.png",
  },
  {
    id: "strawberry-cake",
    name: "Strawberry Cake",
    price: 180000,
    desc: "Kue Strawberry segar dengan krim lembut",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-strawberry-cake-png-image_10201248.png",
  },
  {
    id: "matcha-cake",
    name: "Matcha Cake",
    price: 165000,
    desc: "Teh hijau Jepang premium dengan lapisan krim",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-matcha-cake-png-image_10201249.png",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    price: 190000,
    desc: "Kue merah klasik dengan cream cheese frosting",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-red-velvet-cake-png-image_10201250.png",
  },
];

export default function Menu() {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(price)
      .replace("Rp", "Rp ");
  };

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Our Daily Offerings
          </h2>
          <p className="text-stone-500 font-light italic">
            Baked fresh every morning at dawn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="font-bold text-stone-900">
                  {formatPrice(item.price)}
                </span>
              </div>

              <div className="flex-grow flex items-center justify-center mb-6 h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full object-contain hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${item.id}/600/400`;
                  }}
                />
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm font-light">{item.desc}</p>
              </div>

              <button
                onClick={() => addToCart(item)}
                className="w-full md:w-auto bg-bakery-olive text-white px-8 py-3 rounded-xl font-bold hover:bg-stone-800 transition-colors duration-300 self-start"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
