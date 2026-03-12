import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Laptop, Headphones, Watch, Monitor } from 'lucide-react';

// Components
import { Navbar, MobileMenu } from './components/Navigation';
import { Hero, CategoryBar, ProductCard } from './components/Content';
import { FeaturedSection, PhilosophyBanner, Footer } from './components/Sections';

// --- DATA KATALOG ---
const products = [
  { 
    id: 1, 
    slug: "aeropad-x1",
    name: "AeroPad X1", 
    tagline: "Tablet Performa Tinggi",
    description: "Tablet dengan layar 120Hz dan chip M4. Dirancang untuk kebutuhan desain grafis, edit video, dan multitasking berat.",
    category: "Tablet", 
    price: 18999000, 
    image: "/assets/images/tablet.png",
    specs: ["Chip M4", "2TB SSD", "GPU 12-Core"],
  },
  { 
    id: 2, 
    slug: "zenith-phone-v",
    name: "Zenith Phone V", 
    tagline: "Smartphone Titanium",
    description: "Ponsel berbahan titanium dengan fitur koneksi satelit. Memiliki RAM 16GB dan sensor kamera besar untuk hasil foto maksimal.",
    category: "Smartphone", 
    price: 24990000, 
    image: "/assets/images/phone.png",
    specs: ["SD 8 Gen 4", "16GB RAM", "Kamera 1 Inci"],
  },
  { 
    id: 3, 
    slug: "monolith-m1",
    name: "Monolith M1", 
    tagline: "Workstation Profesional",
    description: "Komputer desktop dengan layar 6K OLED. Menggunakan kartu grafis RTX 5090 untuk kebutuhan rendering dan olah data cepat.",
    category: "Workstation", 
    price: 42500000, 
    image: "/assets/images/workstation.png",
    specs: ["6K OLED", "RTX 5090", "Liquid Cooling"],
  },
  { 
    id: 4, 
    slug: "sonic-one",
    name: "Sonic One", 
    tagline: "Headphone Peredam Suara",
    description: "Headphone dengan teknologi peredam suara (ANC) aktif. Baterai tahan hingga 40 jam dengan kualitas suara jernih.",
    category: "Audio", 
    price: 6499000, 
    image: "/assets/images/audio.png",
    specs: ["Lossless", "Baterai 40j", "ANC Pro"],
  },
  { 
    id: 5, 
    slug: "vector-watch",
    name: "Vector Watch", 
    tagline: "Jam Tangan Pintar",
    description: "Jam tangan dengan sensor detak jantung dan GPS akurat. Menggunakan kaca safir yang tahan gores untuk pemakaian harian.",
    category: "Wearable", 
    price: 3999000, 
    image: "/assets/images/wearable.png",
    specs: ["Sensor EKG", "GPS L5", "Kaca Safir"],
  },
  { 
    id: 6, 
    slug: "origin-laptop",
    name: "Origin Laptop", 
    tagline: "Laptop Tipis & Ringan",
    description: "Laptop dengan ketebalan hanya 1.2cm. Menggunakan prosesor i9 dan baterai yang tahan lama untuk bekerja di mana saja.",
    category: "Laptop", 
    price: 32000000, 
    image: "/assets/images/laptop.png",
    specs: ["Intel i9", "32GB RAM", "Baterai 18j"],
  },
];

const categories = [
  { name: "Semua", icon: Globe },
  { name: "Smartphone", icon: Smartphone },
  { name: "Laptop", icon: Laptop },
  { name: "Audio", icon: Headphones },
  { name: "Wearable", icon: Watch },
  { name: "Workstation", icon: Monitor },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waNumber = "6281547190395"; 
  const handleOrderWA = (product) => {
    const message = `Halo, saya ingin bertanya tentang ${product.name} (Kode: ${product.slug}). Bisa berikan info stoknya?`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredProducts = products.filter(p => 
    activeCategory === "Semua" || p.category.includes(activeCategory)
  );

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar scrolled={scrolled} onOpenMenu={() => setMobileMenu(true)} />
      <MobileMenu isOpen={mobileMenu} onClose={() => setMobileMenu(false)} />

      <main>
        <Hero />
        
        <CategoryBar 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {filteredProducts.map(product => (
                 <ProductCard 
                   key={product.id} 
                   product={product} 
                   onOrder={() => handleOrderWA(product)} 
                 />
               ))}
            </div>
          </div>
        </section>

        <FeaturedSection onOrder={(name) => handleOrderWA(products.find(p => p.name === name))} />
        <PhilosophyBanner />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::selection {
          background: #2563eb;
          color: white;
        }
      `}} />
    </div>
  );
}
