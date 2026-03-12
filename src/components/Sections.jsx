import React from 'react';
import { ArrowUpRight, Zap, ArrowRight, Instagram, Twitter, Linkedin, Terminal } from 'lucide-react';
import { SectionHeader, Button, TechLabel } from './UI';

export const FeaturedSection = ({ onOrder }) => (
  <section className="py-32 px-6 md:px-12 bg-gray-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] blur-3xl group-hover:bg-blue-600/10 transition-all duration-1000"></div>
            <div className="relative p-4 bg-white rounded-[40px] border border-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=1200" 
                alt="Monolith" 
                className="w-full h-auto rounded-[32px] transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
         </div>
         <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Terminal size={18} />
               </div>
               <TechLabel>Produk_Unggulan.v4</TechLabel>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-8">
               Performa dalam<br/><span className="text-blue-600">Desain Minimalis.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
               Seri Monolith menghadirkan standar baru untuk komputer kerja. Gabungan estetika bersih dengan kekuatan pemrosesan maksimal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
               {["Rangka Titanium Cair", "Sistem Operasi Neural", "Layar 6K Pro", "Presisi Akurat"].map(feat => (
                 <div key={feat} className="flex items-center gap-3 group/item">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform"></div>
                   <span className="text-sm font-bold text-gray-700 tech-mono">{feat}</span>
                 </div>
               ))}
            </div>
            <Button onClick={() => onOrder("Monolith M1")} variant="secondary" className="w-full sm:w-fit px-12 py-5 rounded-2xl group">
              Tanya Produk <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
         </div>
      </div>
    </div>
  </section>
);

export const PhilosophyBanner = () => (
  <section className="py-40 bg-black text-white relative overflow-hidden text-center px-6">
    <div className="absolute inset-0 opacity-20 pointer-events-none tech-mono text-[10px] text-blue-500/30 select-none overflow-hidden">
       {Array(30).fill(0).map((_, i) => (
         <div key={i} className="whitespace-nowrap mb-2 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>
           {Array(20).fill("STATUS_SISTEM_OPTIMAL_STABILITAS_100%_LATENSI_0MS").join(" ")}
         </div>
       ))}
    </div>
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-12">
        "Fungsi adalah utama, kualitas adalah <span className="text-blue-500">selamanya</span>."
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <TechLabel className="text-blue-400">Lab_Desain_Zurich</TechLabel>
        <div className="w-12 h-px bg-gray-800 hidden md:block"></div>
        <TechLabel className="text-blue-400">Perangkat_Masa_Depan</TechLabel>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="pt-32 pb-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-2xl font-extrabold tracking-tighter text-black uppercase">Tech.Core</span>
          </div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm mb-12">
            Pelopor perangkat teknologi dengan desain minimalis dan spesifikasi masa depan.
          </p>
          <div className="flex gap-6">
            <Instagram size={20} className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            <Twitter size={20} className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xs font-bold text-black mb-8 uppercase tracking-widest tech-mono">/produk</h4>
            <ul className="space-y-4">
              {["Semua Produk", "Produk Baru", "Spesifikasi Lab", "Aksesoris"].map(l => (
                <li key={l}><a href="#" className="text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors tech-mono lowercase">//{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-black mb-8 uppercase tracking-widest tech-mono">/layanan</h4>
            <ul className="space-y-4">
              {["Bantuan", "Garansi", "Pengiriman", "Pengembalian"].map(l => (
                <li key={l}><a href="#" className="text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors tech-mono lowercase">//{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-black mb-8 uppercase tracking-widest tech-mono">/berita</h4>
            <div className="flex items-center bg-gray-50 rounded-2xl px-5 py-3 border border-gray-100 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
              <input type="email" placeholder="email@anda.com" className="bg-transparent outline-none w-full text-xs font-bold tech-mono" />
              <button className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-8">
        <TechLabel className="text-gray-300">© 2026 Tech.Core_Node_01.Global</TechLabel>
        <div className="flex gap-10">
          <TechLabel className="text-gray-300 cursor-pointer hover:text-blue-600 transition-colors">Privasi</TechLabel>
          <TechLabel className="text-gray-300 cursor-pointer hover:text-blue-600 transition-colors">Ketentuan</TechLabel>
        </div>
      </div>
    </div>
  </footer>
);
