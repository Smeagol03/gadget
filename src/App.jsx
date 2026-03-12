import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Laptop, Headphones, Watch, Monitor } from 'lucide-react';

// Components
import { Navbar, MobileMenu } from './components/Navigation';
import { Hero, CategoryBar, ProductCard } from './components/Content';
import { FeaturedSection, PhilosophyBanner, Footer, HelpSection, ContactCenter } from './components/Sections';
import { TechLabel, Button } from './components/UI';

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

        {/* Toko Section */}
        <section id="toko" className="py-24 bg-white relative scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <TechLabel className="mb-4">/katalog_produk</TechLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Produk Terbaru</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Jelajahi rangkaian perangkat teknologi paling canggih dengan desain elegan dan performa maksimal.</p>
            </div>

            <CategoryBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
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

        {/* Katalog Section - Full Grid */}
        <section id="katalog" className="py-32 bg-gray-50/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <TechLabel className="mb-4">/semua_produk</TechLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Katalog Lengkap</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Semua produk Tech.Core dalam satu tempat. Filter berdasarkan kategori untuk menemukan yang Anda butuhkan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {products.map((product, idx) => (
                 <ProductCard
                   key={product.id}
                   product={product}
                   onOrder={() => handleOrderWA(product)}
                 />
               ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="outline" className="px-12 py-5 mx-auto">
                Lihat Lebih Banyak
              </Button>
            </div>
          </div>
        </section>

        <FeaturedSection onOrder={(name) => handleOrderWA(products.find(p => p.name === name))} />
        <PhilosophyBanner />
        <HelpSection />
        <ContactCenter />
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
