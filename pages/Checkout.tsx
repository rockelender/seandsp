
import React from 'react';
import { CartItem } from '../types';
import Button from '../components/Button';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onClearCart }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your purchase! (This is a demo)');
    onClearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="pt-60 pb-40 text-center container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 uppercase">Your cart is empty</h1>
        <p className="text-gray-500 mb-10">Add some professional gear to your studio.</p>
        <Button size="lg" onClick={() => window.location.hash = '#/products'}>Explore Products</Button>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tight mb-12 uppercase">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Shipping Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-blue-500">1. Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">First Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Email Address</label>
                    <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Phone Number</label>
                    <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-blue-500">2. Shipping Address</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Street Address</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="123 Studio Way" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">City</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="L.A." />
                    </div>
                    <div className="col-span-1">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">State</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="CA" />
                    </div>
                    <div className="col-span-1">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Zip</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="90001" />
                    </div>
                  </div>
                </div>
              </section>

              <Button type="submit" size="lg" className="w-full py-6">Complete Order</Button>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="glass-dark p-8 rounded-3xl border border-white/10 sticky top-40">
              <h3 className="text-lg font-bold tracking-tight mb-8 uppercase">Order Summary</h3>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold uppercase">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10 uppercase tracking-tighter">
                  <span>Total</span>
                  <span className="text-gradient">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center space-x-3 text-gray-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Secure 256-bit SSL Payment</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500">
                  <Truck className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Fast Free Worldwide Delivery</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">All major cards & PayPal accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
