
import React, { useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import TrialModal from '../components/TrialModal';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductsProps {
  onAddToCart?: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const categoryFilter = query.get('category');
  const [trialProduct, setTrialProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === categoryFilter);
  }, [categoryFilter]);

  // If we are looking at Hardware, show the cinematic landing page
  if (categoryFilter === 'HARDWARE') {
    return (
      <div className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
        {/* Hardware Hero / Comparison Section */}
        <section className="pt-20 pb-0">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Nano Cortex Column */}
              <div className="flex flex-col items-center text-center pt-24 pb-12 lg:border-r border-white/5">
                <h2 className="text-5xl lg:text-[64px] font-black tracking-tight mb-6 text-white">Nano Cortex</h2>
                <p className="text-gray-400 text-lg lg:text-xl font-medium max-w-[320px] leading-snug mb-10">
                  An infinite number of amps and pedals on your pedalboard
                </p>
                <div className="flex items-center space-x-4 mb-16">
                  <Link to="/product/nano-cortex">
                    <button className="px-10 py-3.5 rounded-full border border-white/20 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                      Learn more
                    </button>
                  </Link>
                  <button className="px-10 py-3.5 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl">
                    Find a dealer
                  </button>
                </div>
                <div className="w-full max-w-[500px] transform translate-y-12">
                  <img 
                    src="https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1000&auto=format&fit=crop" 
                    alt="Nano Cortex"
                    className="w-full h-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>

              {/* Quad Cortex Column */}
              <div className="flex flex-col items-center text-center pt-24 pb-12">
                <h2 className="text-5xl lg:text-[64px] font-black tracking-tight mb-6 text-white">Quad Cortex</h2>
                <p className="text-gray-400 text-lg lg:text-xl font-medium max-w-[320px] leading-snug mb-10">
                  The most powerful floorboard amp modeler on the planet
                </p>
                <div className="flex items-center space-x-4 mb-16">
                  <Link to="/product/cortex-prime">
                    <button className="px-10 py-3.5 rounded-full border border-white/20 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                      Learn more
                    </button>
                  </Link>
                  <button className="px-10 py-3.5 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl">
                    Find a dealer
                  </button>
                </div>
                <div className="w-full max-w-[650px] transform translate-y-12">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" 
                    alt="Quad Cortex"
                    className="w-full h-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Highlights for Hardware */}
        <section className="bg-black py-40">
          <div className="container mx-auto px-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Next Gen DSP</span>
              <h3 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-8">Built for the stage.</h3>
              <p className="text-gray-500 text-lg lg:text-xl font-light leading-relaxed">
                Whether you need the compact portability of Nano or the absolute power of Quad, SEANDSP hardware delivers studio-quality tones in any environment.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="bg-[#111] p-12 rounded-3xl border border-white/5">
                <div className="text-blue-500 mb-8 font-black text-2xl tracking-tighter italic">01 / CAPTURE</div>
                <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Neural Capture</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Capture the sound of any amplifier, cabinet, and pedal with unprecedented accuracy.</p>
              </div>
              <div className="bg-[#111] p-12 rounded-3xl border border-white/5">
                <div className="text-purple-500 mb-8 font-black text-2xl tracking-tighter italic">02 / TOUCH</div>
                <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Multi-Touch</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Intuitive 7" multi-touch display allows you to navigate and edit your signal chain effortlessly.</p>
              </div>
              <div className="bg-[#111] p-12 rounded-3xl border border-white/5">
                <div className="text-green-500 mb-8 font-black text-2xl tracking-tighter italic">03 / CONNECT</div>
                <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Cloud Sync</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Backup your presets and share them with the world via Cortex Cloud integration.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Standard Grid for Software/Other
  return (
    <div className="bg-white min-h-screen">
      {/* Products Intro Section */}
      <section className="bg-[#fcfcfc] border-b border-gray-100 py-32">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-blue-600 mb-6 block">
              The Collection
            </span>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black uppercase italic">
              {categoryFilter ? (categoryFilter === 'PLUGIN' ? 'Software' : categoryFilter) : 'Our Products'}
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Experience industry-leading audio technology. From surgical-precision plugins to the world's most powerful hardware modeling, our ecosystem is designed to empower professional creators with unmatched sonic fidelity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="py-24">
        <div className="container mx-auto px-10 lg:px-20">
          {categoryFilter && (
            <div className="flex items-center space-x-4 mb-16 opacity-50">
              <div className="h-[1px] w-12 bg-black" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Showing all {categoryFilter.toLowerCase() === 'plugin' ? 'software' : categoryFilter.toLowerCase()}s
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-32">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
                onFreeTrial={(p) => setTrialProduct(p)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-40 border-2 border-dashed border-gray-100 rounded-3xl">
              <p className="text-gray-400 font-medium uppercase tracking-widest">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <TrialModal 
        isOpen={!!trialProduct} 
        product={trialProduct} 
        onClose={() => setTrialProduct(null)} 
      />
    </div>
  );
};

export default Products;
