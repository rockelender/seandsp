
import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#050505] z-[70] shadow-2xl transition-transform duration-500 ease-out border-l border-white/5 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center justify-between border-b border-white/5">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
                <p className="text-xs uppercase tracking-widest">Cart is empty</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="w-24 h-24 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{item.name}</h4>
                    <p className="text-gray-500 text-[10px] mb-2 uppercase tracking-tight">{item.category}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-light">${item.price}</span>
                      <button onClick={() => onRemove(item.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 border-t border-white/5 bg-[#080808]">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Subtotal</span>
                <span className="text-xl font-light">${subtotal}</span>
              </div>
              <Button 
                size="lg" 
                className="w-full py-6 uppercase tracking-[0.2em] text-xs font-bold"
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
