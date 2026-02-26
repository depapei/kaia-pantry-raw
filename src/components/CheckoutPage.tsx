import { motion } from "motion/react";
import { ArrowLeft, CreditCard, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState, FormEvent } from "react";

interface CheckoutPageProps {
  onBack: () => void;
}

export default function CheckoutPage({ onBack }: CheckoutPageProps) {
  const { cart, totalPrice, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price).replace("Rp", "Rp ");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      onBack();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-bakery-cream flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif mb-4">Order Successful!</h2>
          <p className="text-stone-500 font-light mb-8">
            Thank you for your purchase. We've sent a confirmation email to your inbox.
          </p>
          <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
              className="h-full bg-bakery-olive"
            />
          </div>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-4">Redirecting you back...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bakery-cream pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-500 hover:text-bakery-olive transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Bakery</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-bakery-cream rounded-full flex items-center justify-center text-bakery-olive">
                  <Truck size={20} />
                </div>
                <h2 className="text-2xl font-serif">Shipping Information</h2>
              </div>
              
              <form id="checkout-form" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input required type="email" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Shipping Address</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="123 Bakery St, Flour District" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">City</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="Paris" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Postal Code</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="75004" />
                </div>
              </form>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-bakery-cream rounded-full flex items-center justify-center text-bakery-olive">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-2xl font-serif">Payment Method</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="border-2 border-bakery-olive bg-bakery-olive/5 rounded-2xl p-4 flex flex-col items-center gap-2 transition-all">
                  <CreditCard className="text-bakery-olive" />
                  <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
                </button>
                <button className="border-2 border-stone-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-stone-200 transition-all">
                  <div className="w-6 h-6 rounded-full border-2 border-stone-200" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Other Methods</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Card Number</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="**** **** **** ****" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Expiry Date</label>
                    <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">CVV</label>
                    <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bakery-olive/20 transition-all" placeholder="***" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 sticky top-32">
              <h2 className="text-xl font-serif mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400 font-mono text-xs">{item.quantity}x</span>
                      <span className="text-stone-700">{item.name}</span>
                    </div>
                    <span className="font-bold text-stone-900">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-serif font-bold pt-3 text-stone-900">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <button 
                form="checkout-form"
                type="submit"
                className="w-full bg-bakery-olive text-white py-4 rounded-xl font-bold mt-8 hover:bg-stone-800 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Place Order
                <ShieldCheck size={18} />
              </button>
              
              <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center mt-6">
                Secure encrypted checkout
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
