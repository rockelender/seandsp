
import React from 'react';
import { X, Laptop } from 'lucide-react';
import { Product } from '../types';

interface TrialModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white z-[110] rounded-[40px] shadow-2xl transition-all duration-500 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'} overflow-hidden`}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12 flex flex-col items-center text-center">
          {/* Laptop Mockup Simulation */}
          <div className="relative w-full max-w-md mb-10 group">
             {/* Laptop Frame */}
             <div className="relative z-10 pt-[5%] px-[12%] pb-[15%] bg-black rounded-t-[20px] shadow-2xl border-x-4 border-t-4 border-gray-800">
                <div className="aspect-[1.6/1] bg-gray-900 rounded overflow-hidden">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
             </div>
             {/* Laptop Bottom */}
             <div className="h-4 bg-gray-700 rounded-b-[4px] w-[110%] -ml-[5%] shadow-xl"></div>
             <div className="h-1 bg-gray-500 rounded-b-[4px] w-[20%] mx-auto"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-black tracking-tight mb-8">
            Download {product.name}
          </h2>

          <div className="relative w-full flex items-center justify-center mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
              14-day free trial
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <button className="bg-[#f2f2f2] hover:bg-gray-200 text-black py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all">
              Windows
            </button>
            <button className="bg-[#f2f2f2] hover:bg-gray-200 text-black py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all">
              macOS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrialModal;
