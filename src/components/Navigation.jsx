import React from 'react';
import { Zap, Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ scrolled, onOpenMenu }) => (
  <nav className={`fixed top-0 w-full z-100 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-gray-100' : 'py-10 bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-2xl font-extrabold tracking-tighter uppercase">Tech.Core</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {[
          { label: "Toko", href: "#toko" },
          { label: "Bantuan", href: "#bantuan" },
          { label: "Katalog", href: "#katalog" },
          { label: "Pusat", href: "#pusat" }
        ].map(item => (
          <a 
            key={item.label} 
            href={item.href} 
            className="text-sm font-bold text-gray-400 hover:text-black transition-colors tech-mono lowercase"
          >
            //{item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
         <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors"><Search size={20} /></button>
         <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
           <ShoppingBag size={20} />
           <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
         </button>
         <button className="md:hidden p-2.5 bg-black text-white rounded-xl shadow-lg" onClick={onOpenMenu}><Menu size={20} /></button>
      </div>
    </div>
  </nav>
);

export const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-white z-200 flex flex-col transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
    <div className="flex justify-between items-center p-8">
      <span className="text-2xl font-extrabold tracking-tighter">TECH.CORE</span>
      <button onClick={onClose} className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all"><X size={24} /></button>
    </div>
    <div className="flex flex-col grow justify-center p-8 md:p-12 gap-6">
      {[
        { label: "Toko", href: "#toko" },
        { label: "Bantuan", href: "#bantuan" },
        { label: "Katalog", href: "#katalog" },
        { label: "Pusat", href: "#pusat" }
      ].map((item) => (
        <a 
          key={item.label} 
          href={item.href}
          onClick={onClose}
          className="text-4xl font-extrabold hover:text-blue-600 transition-colors flex items-center justify-between group tracking-tighter border-b border-gray-50 pb-4"
        >
          {item.label}
          <ArrowRight size={28} className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </a>
      ))}
    </div>
  </div>
);
