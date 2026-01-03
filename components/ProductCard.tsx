
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onFreeTrial?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onFreeTrial }) => {
  const navigate = useNavigate();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart) onAddToCart(product);
    navigate('/checkout');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart) onAddToCart(product);
  };

  const handleFreeTrial = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onFreeTrial) onFreeTrial(product);
  };

  return (
    <div className="group flex flex-col h-full w-full">
      {/* Product Image Area */}
      <Link to={`/product/${product.id}`} className="w-full relative rounded-xl overflow-hidden mb-8 aspect-[1.6/1] bg-black block product-shadow group-hover:shadow-2xl transition-all duration-700">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-1000"
        />
        
        {/* Yellow Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-8 py-2 rounded-b-xl text-[10px] font-black tracking-[0.2em] uppercase shadow-lg z-10">
            BESTSELLER
          </div>
        )}

        {/* Status LED Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#111111]/90 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-[9px] font-bold tracking-[0.15em] uppercase flex items-center space-x-2.5 z-10 shadow-2xl min-w-max">
          <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] ${product.isComingSoon ? 'bg-red-500 shadow-red-500/50 animate-pulse' : 'bg-green-500 shadow-green-500/50'}`} />
          <div className="w-3.5 h-3.5 bg-white/10 rounded flex items-center justify-center text-[6px] font-black border border-white/5">::</div>
          <span>{product.isComingSoon ? 'PCOM COMING SOON' : 'COMPATIBLE'}</span>
        </div>
      </Link>

      {/* Text Info */}
      <div className="text-center flex-grow flex flex-col items-center">
        <Link to={`/product/${product.id}`} className="mb-3 block">
          <h3 className="text-[26px] font-black tracking-tight text-black hover:text-blue-600 transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {/* Fixed min-height for description to keep cards aligned */}
        <div className="min-h-[48px] flex items-center justify-center mb-4">
          <p className="text-[13px] text-gray-500 leading-snug font-normal max-w-[280px]">
            {product.shortDescription}
          </p>
        </div>
        
        {/* Price Row */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <span className="text-[20px] font-black text-black tracking-tight">€{product.price}.00</span>
          <button className="text-gray-300 hover:text-gray-500 transition-colors">
            <Info className="w-4 h-4 fill-current stroke-white" />
          </button>
        </div>

        {/* Action Button Grid - Stays at bottom */}
        <div className="mt-auto w-full space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Link to={`/product/${product.id}`} className="w-full">
              <button className="w-full border border-gray-200 rounded-full py-2.5 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-gray-50 transition-colors">
                Learn more
              </button>
            </Link>
            <button 
              onClick={handleFreeTrial}
              className="w-full border border-gray-200 rounded-full py-2.5 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-gray-50 transition-colors"
            >
              Free trial
            </button>
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#f2f2f2] rounded-full py-3 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-gray-200 transition-colors"
          >
            Add to cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="w-full bg-black rounded-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-gray-800 transition-all shadow-lg"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
