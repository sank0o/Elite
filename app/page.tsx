"use client";

import React, { useEffect, useState } from 'react';

/**
 * THEME: LUXE FEMME 2026
 * نظام متكامل يجمع بين النعومة (Soft) والقوة (Luxury)
 */

// --- 1. المكونات العلوية ---

const TopBanner = () => (
  <div className="w-full bg-[#fdfaf6] text-[#b5838d] py-2 px-4 border-b border-[#f3e5e9] text-center">
    <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
      ✨ قطعة مجانية من مجموعة العناية عند الشراء بقيمة 1500 ريال ✨
    </p>
  </div>
);

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1500px] mx-auto px-6 flex justify-between items-center">
        {/* السلة - تصميم ناعم للجوال */}
        <div className="flex-1">
          <button className="group relative flex items-center gap-2">
            <div className="bg-[#fdfaf6] p-2 rounded-full group-hover:bg-[#f3e5e9] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" /></svg>
            </div>
            <span className="text-[10px] font-bold text-[#6d6875] hidden md:block tracking-widest uppercase">السلة (0)</span>
          </button>
        </div>
        
        {/* الشعار - مركزي وفخم */}
        <div className="flex-1 text-center">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.3em] text-[#4a4e69] transition-transform duration-700 hover:scale-105">ELITE</h1>
        </div>

        {/* الروابط - تم حل مشكلة تباعد الحروف العربية */}
        <div className="flex-1 hidden lg:flex justify-end gap-10 text-[11px] font-bold text-[#6d6875]">
          <a href="#new" className="hover:text-[#b5838d] transition-colors">وصلنا حديثاً</a>
          <a href="#best" className="hover:text-[#b5838d] transition-colors">الأكثر مبيعاً</a>
          <a href="#about" className="hover:text-[#b5838d] transition-colors">قصتنا</a>
        </div>
      </div>
    </nav>
  );
};

// --- 2. مكونات العرض ---

const AestheticCard = ({ img, title, price, category }: { img: string, title: string, price: string, category: string }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#fdfaf6] mb-6 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
      <img src={img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={title} />
      <div className="absolute top-6 left-6">
        <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#b5838d]">{category}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#6d6875]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="text-center space-y-2 px-4">
      <h5 className="text-sm font-medium text-[#4a4e69] tracking-normal">{title}</h5>
      <p className="text-xs font-serif italic text-[#b5838d] font-bold">{price} ر.س</p>
    </div>
  </div>
);

// --- 3. الصفحة الرئيسية ---

export default function EliteGirlTheme() {
  return (
    <main className="min-h-screen bg-[#fffcf9] text-[#4a4e69] selection:bg-[#f3e5e9]">
      <TopBanner />
      <CustomNavbar />

      {/* Hero Section - تصميم سينمائي ناعم */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40224-425026601_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#6d6875]/10" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-white font-bold drop-shadow-md">Handcrafted Elegance</p>
          <h2 className="text-5xl md:text-[9rem] font-serif italic text-white leading-tight drop-shadow-lg" dir="rtl">
            كوني <span className="text-[#f3e5e9]">الأجمل</span>
          </h2>
          <div className="pt-8">
            <button className="bg-white text-[#4a4e69] px-16 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#b5838d] hover:text-white transition-all duration-700 rounded-full shadow-2xl">
              ابدئي رحلتكِ الآن
            </button>
          </div>
        </div>
      </header>

      {/* 4. قسم المجموعات المختارة (Curated Collections) */}
      <section id="new" className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h3 className="text-3xl md:text-5xl font-serif italic">مختارات النخبة</h3>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#b5838d] font-bold">Curated for You</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          <AestheticCard 
            img="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            category="Ready to Wear"
            title="فستان الكتان الناعم"
            price="1,850"
          />
          <AestheticCard 
            img="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
            category="Accessories"
            title="نظارات شمسية كلاسيك"
            price="920"
          />
          <AestheticCard 
            img="https://images.unsplash.com/photo-1596462502278-27bfad450216"
            category="Skin Rituals"
            title="مجموعة إشراقة الصباح"
            price="640"
          />
        </div>
      </section>

      {/* 5. قسم "عالمنا" (Our World) - تصميم تفاعلي */}
      <section id="about" className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Brand Story" />
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f3e5e9] rounded-full -z-10 animate-pulse" />
          </div>
          
          <div className="flex-1 space-y-10 text-right" dir="rtl">
            <h4 className="text-[12px] text-[#b5838d] tracking-[0.5em] uppercase font-bold">The Elite Story</h4>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight text-[#4a4e69]">جمالٌ يحكي <br/> تفاصيلكِ</h3>
            <p className="text-[#6d6875] text-lg font-light leading-relaxed">
              بدأت رحلتنا من الرغبة في تمكين كل فتاة من التعبير عن ذاتها بأرقى الأساليب. في "إيليت"، نحن لا نقدم منتجات، بل نقدم لحظات من الثقة والجمال المستدام.
            </p>
            <div className="flex gap-8 justify-end pt-6 text-center">
               <div>
                  <p className="text-3xl font-serif text-[#b5838d]">10K+</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#4a4e69]">عميلة سعيدة</p>
               </div>
               <div className="w-[1px] h-12 bg-[#f3e5e9]" />
               <div>
                  <p className="text-3xl font-serif text-[#b5838d]">100%</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#4a4e69]">صناعة يدوية</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. قسم آراء العميلات (Testimonials) */}
      <section className="py-32 bg-[#fdfaf6]">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <div className="flex gap-10 animate-scroll">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="min-w-[300px] bg-white p-10 rounded-[2rem] shadow-sm space-y-6">
                <div className="flex text-[#b5838d] gap-1">
                  {[...Array(5)].map((_, s) => <span key={s}>★</span>)}
                </div>
                <p className="text-sm italic font-light leading-relaxed" dir="rtl">
                  "التجربة كانت مذهلة! جودة القماش في الفستان فاقت توقعاتي، والتعامل كان في منتهى الرقي. شكراً إيليت."
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a4e69]">سارة أ. - الرياض</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll { animation: scroll 40s linear infinite; }
        `}</style>
      </section>

      {/* 7. التذييل (Footer) */}
      <footer className="pt-32 pb-12 px-6 bg-white border-t border-[#f3e5e9] text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h5 className="text-3xl tracking-[0.6em] font-extralight text-[#4a4e69]">ELITE</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-bold uppercase tracking-widest text-[#6d6875]">
             <a href="#" className="hover:text-[#b5838d] transition-colors tracking-normal">خدمة العملاء</a>
             <a href="#" className="hover:text-[#b5838d] transition-colors tracking-normal">الشحن والإرجاع</a>
             <a href="#" className="hover:text-[#b5838d] transition-colors tracking-normal">سياسة الخصوصية</a>
             <a href="#" className="hover:text-[#b5838d] transition-colors tracking-normal">تواصل معنا</a>
          </div>
          <div className="pt-20 border-t border-[#f3e5e9]">
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#b7b7a4]">© 2026 ELITE HOUSE. CREATED FOR THE MODERN MUSE.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
