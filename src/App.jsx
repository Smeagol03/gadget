import React, { useState } from 'react';
import { ArrowUpRight, Search, Plus } from 'lucide-react';

// --- MOCK DATA ---
const products = [
  { id: 1, name: "iPhone 15 Pro Max", category: "Smartphone", price: 23999000, image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 2, name: "Galaxy S24 Ultra", category: "Smartphone", price: 21999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 3, name: "MacBook Pro M3", category: "Laptop", price: 28499000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 4, name: "Sony WH-1000XM5", category: "Audio", price: 5999000, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 5, name: "iPad Air Gen 5", category: "Tablet", price: 10499000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 6, name: "ROG Zephyrus", category: "Laptop", price: 32999000, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600&h=600" },
];

const categories = ["Semua", "Smartphone", "Laptop", "Tablet", "Audio"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const waNumber = "6281234567890"; 

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOrderWA = (productName) => {
    const message = `Halo, saya ingin memesan: ${productName}.`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredProducts = products.filter(p => 
    (activeCategory === "Semua" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-red-600 selection:text-white">
      
      {/* NAVBAR - STRICT & MINIMAL */}
      <nav className="border-b-2 border-black sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12">
          <div className="font-black text-2xl md:text-3xl tracking-tighter uppercase">
            Gadget<span className="text-red-600">.</span>Pro
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-12 border-2 border-black">
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent focus:outline-none uppercase text-sm font-bold placeholder-black"
              placeholder="CARI GADGET..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="p-2 bg-black text-white flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
          </div>

          <div className="text-sm font-bold uppercase tracking-widest hidden sm:block">
            Est. 2024
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION - ASYMMETRICAL & BOLD TYPOGRAPHY */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[85vh] border-b-2 border-black">
        <div className="md:col-span-7 flex flex-col justify-end p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black bg-white">
          <div className="mb-auto pt-8">
            <p className="font-bold uppercase tracking-widest text-red-600 mb-4 text-sm md:text-base">01 // Esensi Teknologi</p>
          </div>
          <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] break-words">
            The<br/>Future<br/><span className="text-red-600">Now.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-medium max-w-md leading-tight">
            KURASI GADGET TERBAIK UNTUK PRODUKTIVITAS MAKSIMAL. TANPA KOMPROMI.
          </p>
        </div>
        <div className="md:col-span-5 bg-gray-100 flex items-center justify-center p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <img 
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800&h=1000" 
            alt="Hero Gadget" 
            className="w-full h-auto object-cover grayscale mix-blend-multiply relative z-10 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
      </section>

      {/* BRAND TICKER - BRUTALIST ELEMENT */}
      <div className="border-b-2 border-black bg-black text-white py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 font-black uppercase tracking-widest text-xl">
          <span>APPLE</span> <span className="text-red-600">/</span>
          <span>SAMSUNG</span> <span className="text-red-600">/</span>
          <span>SONY</span> <span className="text-red-600">/</span>
          <span>ASUS ROG</span> <span className="text-red-600">/</span>
          <span>APPLE</span> <span className="text-red-600">/</span>
          <span>SAMSUNG</span> <span className="text-red-600">/</span>
          <span>SONY</span> <span className="text-red-600">/</span>
          <span>ASUS ROG</span> <span className="text-red-600">/</span>
        </div>
      </div>

      {/* 2. FEATURED PRODUCT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
        <div className="p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between bg-gray-50">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Sorotan<br/>Minggu Ini</h2>
          <img 
            src={products[0].image} 
            alt={products[0].name} 
            className="w-full max-w-md mx-auto aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
          <div className="border-2 border-black p-8 md:p-12 relative">
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-4 py-2 uppercase tracking-widest">
              New Arrival
            </div>
            <p className="font-bold text-gray-500 uppercase tracking-widest mb-2">{products[0].category}</p>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{products[0].name}</h3>
            <p className="text-2xl font-medium mb-8">{formatPrice(products[0].price)}</p>
            <button 
              onClick={() => handleOrderWA(products[0].name)}
              className="bg-black text-white w-full py-4 font-black uppercase tracking-widest text-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              Beli Sekarang <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY / ABOUT SECTION */}
      <section className="border-b-2 border-black p-6 md:p-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-4xl mx-auto leading-tight">
          "KAMI PERCAYA BAHWA DESAIN YANG BAIK ADALAH SESEDIKIT MUNGKIN DESAIN. KAMI HANYA MENYEDIAKAN TEKNOLOGI YANG BENAR-BENAR ANDA BUTUHKAN."
        </h2>
        <p className="mt-8 text-gray-400 font-bold tracking-widest uppercase">02 // Filosofi Kami</p>
      </section>

      {/* 4. FULL CATALOG SECTION */}
      <section className="bg-white">
        {/* FILTER */}
        <div className="border-b-2 border-black flex overflow-x-auto hide-scrollbar">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-6 uppercase font-black tracking-widest whitespace-nowrap border-r-2 border-black transition-colors ${
                activeCategory === cat 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full p-24 text-center border-b-2 border-black font-bold uppercase text-2xl">
              TIDAK ADA HASIL.
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`border-b-2 border-black sm:border-r-2 p-6 flex flex-col group hover:bg-black hover:text-white transition-colors duration-300 ${
                  (index + 1) % 3 === 0 ? 'lg:border-r-0' : ''
                } ${
                  (index + 1) % 2 === 0 ? 'sm:border-r-0 lg:border-r-2' : ''
                }`}
              >
                <div className="bg-gray-100 mb-6 overflow-hidden relative border-2 border-transparent group-hover:border-white transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 font-bold uppercase tracking-widest text-xs bg-white text-black px-2 py-1">
                    {product.category}
                  </div>
                </div>
                
                <h3 className="font-black text-2xl uppercase tracking-tighter mb-2 leading-none">{product.name}</h3>
                <p className="font-bold text-lg mt-auto mb-6">{formatPrice(product.price)}</p>
                
                <button 
                  onClick={() => handleOrderWA(product.name)}
                  className="mt-auto border-2 border-black group-hover:border-white group-hover:bg-white group-hover:text-black py-3 font-bold uppercase tracking-widest flex items-center justify-between px-4 transition-all"
                >
                  Pesan via WA <Plus className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
        <div className="p-12 md:p-24 border-b-2 md:border-b-0 md:border-r-2 border-gray-800 flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">Let's<br/>Talk.</h2>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-widest hover:text-red-600 transition-colors w-max border-b-2 border-white hover:border-red-600 pb-1">
            Hubungi Kami <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-8 mb-16">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-4">Navigasi</h4>
              <ul className="space-y-2 font-bold uppercase">
                <li><a href="#" className="hover:text-red-600">Produk</a></li>
                <li><a href="#" className="hover:text-red-600">Tentang</a></li>
                <li><a href="#" className="hover:text-red-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-4">Sosial</h4>
              <ul className="space-y-2 font-bold uppercase">
                <li><a href="#" className="hover:text-red-600">Instagram</a></li>
                <li><a href="#" className="hover:text-red-600">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-gray-800 pt-8 flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-500">
            <span>© {new Date().getFullYear()} GADGET.PRO</span>
            <span>DESIGN BY ALPIAN</span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          min-width: 200%;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}