
import React, { useState } from 'react';
import { ShoppingCart, Menu, Globe, User, ChevronDown, Cpu, Laptop, MapPin, Activity } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const hardwareItems = [
    {
      title: "Quad Cortex",
      icon: <Cpu className="w-4 h-4 text-white" />,
      links: ["Cortex Control", "Manual", "Device list"]
    },
    {
      title: "Nano Cortex",
      icon: <Laptop className="w-4 h-4 text-white" />,
      links: ["Manual", "Device list"]
    }
  ];

  const softwareItems = [
    { name: "Archetype: John Mayer X", path: "/product/john-mayer" },
    { name: "Archetype: Misha Mansoor X", path: "/product/misha-mansoor" },
    { name: "Mantra", path: "/product/mantra" },
    { name: "Parallax X", path: "/product/parallax-x" },
    { name: "All Software", path: "/products?category=PLUGIN" }
  ];

  const handleNavClick = (path: string) => {
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-20 flex items-center border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1 group" onClick={() => setActiveDropdown(null)}>
          <div className="flex items-center">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-opacity group-hover:opacity-80">
              <path d="M5 15L10 5L15 25L20 15H35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-black tracking-[0.3em] ml-[-5px] text-white">SEANDSP</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12 h-full">
          {/* Hardware Dropdown */}
          <div 
            className="relative h-20 flex items-center cursor-pointer group"
            onMouseEnter={() => setActiveDropdown('hardware')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('/products?category=HARDWARE')}
              className="text-[11px] font-bold tracking-[0.25em] uppercase flex items-center text-white hover:text-gray-400 transition-colors"
            >
              HARDWARE <ChevronDown className={`ml-1.5 w-3 h-3 transition-transform duration-300 ${activeDropdown === 'hardware' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'hardware' && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] bg-[#0a0a0a] border border-white/10 rounded-b-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] p-8 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-10">
                  {hardwareItems.map((section, idx) => (
                    <div key={idx} className="space-y-5">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          {section.icon}
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-white">{section.title}</span>
                      </div>
                      <div className="pl-11 space-y-3">
                        {section.links.map(link => (
                          <a key={link} href="#" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">{link}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t border-white/10 space-y-5">
                    <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group/item">
                      <MapPin className="w-4 h-4 group-hover/item:text-blue-500 transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Store Locator</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group/item">
                      <Activity className="w-4 h-4 group-hover/item:text-green-500 transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Cortex Cloud</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Software Dropdown */}
          <div 
            className="relative h-20 flex items-center cursor-pointer group"
            onMouseEnter={() => setActiveDropdown('software')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('/products?category=PLUGIN')}
              className="text-[11px] font-bold tracking-[0.25em] uppercase flex items-center text-white hover:text-gray-400 transition-colors"
            >
              SOFTWARE <ChevronDown className={`ml-1.5 w-3 h-3 transition-transform duration-300 ${activeDropdown === 'software' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'software' && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] bg-[#0a0a0a] border border-white/10 rounded-b-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] p-8 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black text-gray-600 tracking-[0.3em] uppercase mb-4">Latest Software</h4>
                  <div className="space-y-4">
                    {softwareItems.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        className="block text-[10px] font-black text-gray-500 hover:text-white transition-colors uppercase tracking-[0.15em] hover:translate-x-1 transition-transform"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            to="/products" 
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-white hover:text-gray-400 transition-colors"
          >
            PRODUCTS
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block group">
            <Globe className="w-5 h-5 text-gray-400 stroke-[1.5px] group-hover:text-white transition-colors" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block group">
            <User className="w-5 h-5 text-gray-400 stroke-[1.5px] group-hover:text-white transition-colors" />
          </button>
          <button onClick={onCartClick} className="relative group p-2">
            <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors stroke-[1.5px]" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-black transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
