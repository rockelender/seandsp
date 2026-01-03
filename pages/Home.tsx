
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import TrialModal from '../components/TrialModal';
import { PRODUCTS } from '../constants';
import { SubCategory, Product } from '../types';

interface HomeProps {
  onAddToCart?: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<SubCategory | 'All'>('All');
  const [trialProduct, setTrialProduct] = useState<Product | null>(null);
  
  const plugins = PRODUCTS.filter(p => p.category === 'PLUGIN');
  const filteredPlugins = activeCategory === 'All' 
    ? plugins 
    : plugins.filter(p => p.subCategory === activeCategory);

  const categories: (SubCategory | 'All')[] = ['All', 'Vocal', 'Guitar', 'Bass', 'Archetype', 'Multivoicer', 'Synth'];

  return (
    <div className="w-full bg-white">
      {/* Cinematic Light Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#f9f9f9]">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 text-center lg:text-left">
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 mb-6 block">New Release</span>
            <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-8 leading-[0.85] text-black uppercase italic">
              Professional Audio <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Redefined</span>.
            </h1>
            <p className="text-gray-500 mb-12 text-lg font-light tracking-wide max-w-md leading-relaxed">
              Cutting-edge guitar amp simulation technology. Meticulously captured, surgically precise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button size="lg" className="rounded-full shadow-2xl">Explore Products</Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative flex justify-center">
            <img 
              src={PRODUCTS.find(p => p.id === 'cortex-prime')?.image}
              className="w-[650px] h-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Neural DSP Hardware"
            />
          </div>
        </div>
      </section>

      {/* Plugins Section (from screenshot style) */}
      <section className="py-32 container mx-auto px-10 lg:px-20">
        <div className="flex flex-col mb-20">
          <h2 className="text-8xl font-black tracking-tighter text-black mb-12 uppercase italic">Plugins</h2>
          
          {/* Category Filter Pills - Modern Minimalist */}
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4 rounded-xl text-[12px] font-black tracking-widest uppercase transition-all duration-300 min-w-max ${
                  activeCategory === cat 
                  ? 'bg-black text-white shadow-2xl scale-105' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Plugin Grid - Using fixed gap and ensuring alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-32">
          {filteredPlugins.map(plugin => (
            <ProductCard 
              key={plugin.id} 
              product={plugin} 
              onAddToCart={onAddToCart} 
              onFreeTrial={(p) => setTrialProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* Trust & Technology Section */}
      <section className="bg-black py-40 text-white overflow-hidden relative">
        <div className="container mx-auto px-10 relative z-10">
          <div className="max-w-4xl mb-24">
            <h3 className="text-5xl font-black italic tracking-tighter uppercase mb-8">Unmatched Precision.</h3>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Our Neural DSP algorithms are trained on hundreds of thousands of data points to ensure every harmonic nuance of your favorite analog gear is reproduced with surgical precision. 
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:border-blue-500 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <h4 className="text-sm font-black tracking-widest uppercase">Native Performance</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Zero latency performance optimized for both macOS and Windows systems using industry-leading audio drivers.</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:border-purple-500 transition-colors">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              </div>
              <h4 className="text-sm font-black tracking-widest uppercase">Artist Curated</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Start with professional tones from world-renowned producers and artists. Instant inspiration, zero friction.</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <h4 className="text-sm font-black tracking-widest uppercase">Constant Updates</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Our X-Series updates bring PCOM compatibility and new features to your existing library for free.</p>
            </div>
          </div>
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

export default Home;
