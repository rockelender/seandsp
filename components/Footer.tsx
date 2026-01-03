
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-24">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <h2 className="text-xl font-black tracking-[0.4em] mb-8 text-black">SEANDSP</h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Next-generation audio technology. Crafting the tools for the future of music production.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-black">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><Link to="/products?category=HARDWARE" className="hover:text-black transition-colors">Hardware</Link></li>
              <li><Link to="/products?category=PLUGIN" className="hover:text-black transition-colors">Plugins</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Bundles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-black">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-black transition-colors">License Manager</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Downloads</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-black">Join Us</h4>
            <div className="flex space-x-6 text-gray-300">
               <span className="hover:text-black cursor-pointer transition-colors">IG</span>
               <span className="hover:text-black cursor-pointer transition-colors">YT</span>
               <span className="hover:text-black cursor-pointer transition-colors">FB</span>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-gray-50 text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase flex justify-between">
           <p>© SEANDSP 2024</p>
           <p>Privacy Policy / Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
