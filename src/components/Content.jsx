import React from 'react';
import { ArrowUpRight, Terminal, Cpu, Zap, Shield } from 'lucide-react';
import { Button, TechLabel } from './UI';

export const Hero = () => (
  <section id='hero' className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden bg-white">
    {/* Animated binary background */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-mono text-[7px] overflow-hidden leading-none select-none">
       {[...Array(60)].map((_, i) => (
         <div key={i} className="whitespace-nowrap mb-1 animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
           {Array(25).fill("01101010 10101101 11100101 00101011").join(" ")}
         </div>
       ))}
    </div>

    {/* Gradient overlay */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl opacity-60"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-blue-50/40 to-transparent rounded-full blur-3xl opacity-50"></div>

    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 md:py-16 relative z-10">
      <div className="animate-fade-in">
        {/* Tech badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-8 hover:bg-blue-100/80 transition-colors cursor-default">
          <Zap size={14} className="text-blue-600" />
          <span className="tech-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider">Next-Gen Technology 2026</span>
        </div>

        <h1 className="text-5xl md:text-[5.5vw] font-black leading-[1.05] tracking-tighter mb-8" style={{ fontFamily: 'var(--font-hero)' }}>
          <span className="relative inline-block">
            <span className="text-blue-600">Teknologi</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 10 Q50 2 100 8 T198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-blue-600"/>
            </svg>
          </span><br/>
          Dalam Genggaman
        </h1>
        

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
            <Cpu size={24} className="text-blue-600 mb-2" />
            <span className="tech-mono text-[9px] font-bold text-gray-600 uppercase">AI Powered</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
            <Zap size={24} className="text-blue-600 mb-2" />
            <span className="tech-mono text-[9px] font-bold text-gray-600 uppercase">Ultra Fast</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
            <Shield size={24} className="text-blue-600 mb-2" />
            <span className="tech-mono text-[9px] font-bold text-gray-600 uppercase">Secure</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary" className="px-10 py-5 text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40">
            Jelajahi Katalog
            <ArrowUpRight size={18} />
          </Button>
          <Button variant="outline" className="px-10 py-5 text-sm border-gray-200 hover:border-blue-600 hover:text-blue-600">
            <Terminal size={16} />
            Demo Interaktif
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex items-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="tech-mono font-medium">100+ Produk Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="tech-mono font-medium">Garansi Resmi</span>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center animate-fade-in stagger-2">
         {/* Animated glow rings */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border-2 border-blue-200/30 animate-spin" style={{ animationDuration: '20s' }}></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-blue-300/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full bg-blue-600 opacity-[0.08] blur-3xl scale-90"></div>
         
         <img
           src="/assets/images/hero.png"
           alt="Hero Gadget"
           className="relative z-0 w-full max-w-[500px] object-contain transition-all duration-1000 hover:scale-105 hover:rotate-1 drop-shadow-2xl"
         />
         
         {/* Corner accents */}
         <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-300/40 rounded-tl-3xl"></div>
         <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-300/40 rounded-br-3xl"></div>
      </div>
    </div>
  </section>
);

export const CategoryBar = ({ categories, activeCategory, setActiveCategory }) => (
  <section className="py-6 bg-white border-y border-gray-100 sticky top-[92px] z-50 glass">
     <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => setActiveCategory(cat.name)}
              className={`flex-none px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 tech-mono ${activeCategory === cat.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100'}`}
            >
              {activeCategory === cat.name && "> "}
              {cat.name.toLowerCase()}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
           <TechLabel className="text-gray-300">Produk Tersedia: 06</TechLabel>
        </div>
     </div>
  </section>
);

export const ProductCard = ({ product, onOrder }) => (
  <div className="group bg-white p-8 rounded-[32px] border border-gray-100 transition-all duration-700 hover:border-blue-100 hover:shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)] flex flex-col h-full">
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-10 flex items-center justify-center shrink-0">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-3/4 h-3/4 object-contain transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute top-5 left-5">
        <TechLabel className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
           ID: {product.id.toString().padStart(2, '0')}
        </TechLabel>
      </div>
    </div>

    <div className="flex flex-col grow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tighter mb-1">{product.name}</h3>
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Terminal size={12} />
            <span className="tech-mono text-[9px] font-bold lowercase">/{product.slug}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {product.specs.map(spec => (
          <div key={spec} className="tech-mono text-[9px] font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md border border-blue-100/50">
            {spec}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left">Harga Resmi</span>
          <span className="text-xl font-extrabold tracking-tight">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
          </span>
        </div>
        <Button onClick={onOrder} variant="primary" className="w-full py-5 rounded-2xl shadow-none hover:shadow-xl group">
           <span className="text-xs uppercase tracking-widest">Tanya Stok via WhatsApp</span>
           <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  </div>
);
