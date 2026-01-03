
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Button from '../components/Button';
import { Product } from '../types';
import { ArrowLeft, Plus, Check } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    onAddToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-10">
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black mb-20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" /> Store Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Visuals */}
          <div className="lg:sticky lg:top-40 space-y-8">
            <div className="bg-[#f9f9f9] aspect-square rounded-2xl overflow-hidden border border-gray-100 p-12 product-shadow">
              <img 
                src={product.image} 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000 scale-110" 
                alt={product.name} 
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
               {[1,2,3].map(i => (
                 <div key={i} className="aspect-square bg-[#fcfcfc] border border-gray-100 rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer product-shadow" />
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">{product.category}</span>
              <h1 className="text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none text-black">{product.name}</h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                {product.fullDescription}
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-baseline space-x-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Retail Price</span>
                <span className="text-6xl font-black italic text-black tracking-tighter">${product.price}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1 py-10 uppercase tracking-[0.3em] text-[11px] font-black rounded-xl shadow-2xl" onClick={handleAddToCart}>
                  {added ? <><Check className="w-4 h-4 mr-2" /> Added</> : 'Add to Cart'}
                </Button>
                <Button variant="outline" size="lg" className="flex-1 py-10 uppercase tracking-[0.3em] text-[11px] font-black rounded-xl" onClick={handleBuyNow}>
                  Buy Now
                </Button>
              </div>
            </div>

            <div className="pt-24 border-t border-gray-100 space-y-12">
               <div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-black flex items-center">
                   <Plus className="w-3 h-3 mr-3 text-blue-600" /> Technical Specifications
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                   {[
                     "High-DPI resolution rendering",
                     "96kHz / 24-bit floating point audio",
                     "Native Apple Silicon & Windows optimization",
                     "Expandable cloud preset ecosystem",
                     "Zero-latency internal processing",
                     "Precision electrical circuit simulation"
                   ].map((feat, idx) => (
                     <div key={idx} className="border-l-2 border-gray-100 pl-6 py-1">
                       <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">{feat}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
