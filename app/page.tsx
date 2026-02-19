"use client";

import React, { useEffect, useState } from 'react';

// --- المكونات الفرعية ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#0a0a0a] text-[#f4f1ea] py-3 px-4 overflow-hidden relative border-b border-white/5">
    <div className="flex whitespace-nowrap animate-marquee items-center justify-around text-[10px] uppercase tracking-[0.2em] font-light">
      <span className="px-4">توصيل مجاني عالمي للطلبات فوق 2000 ريال</span>
      <span className="text-[#c5a47e]">●</span>
      <span className="px-4">اكتشفي مجموعة "نور الشمس" الجديدة لربيع 2026</span>
      <span className="text-[#c5a47e]">●</span>
      <span className="px-4">خدمة التغليف الفاخر متاحة الآن لجميع الهدايا</span>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `}</style>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* الروابط - تم إيقاف التباعد للحروف العربية لمنع التقطع */}
        <div className="flex-1 hidden lg:flex gap-10 text-[11px] uppercase font-medium">
          <a href="#clothing" className="hover:text-[#c5a47e] transition-colors tracking-widest">الملابس</a>
          <a href="#accessories" className="hover:text-[#c5a47e] transition-colors tracking-widest">الإكسسوارات</a>
          <a href="#skincare" className="hover:text-[#c5a47e] transition-colors tracking-widest">العناية</a>
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-2xl md:text-4xl tracking-[0.5em] font-extralight uppercase">ELITE</h1>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4 md:gap-8 text-[11px] uppercase">
          <span className="hidden sm:block cursor-pointer tracking-widest">الحساب</span>
          <div className="relative cursor-pointer border border-black/10 px-4 md:px-6 py-2 hover:bg-black hover:text-white transition-all">
            <span className="tracking-normal">السلة (0)</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  dark?: boolean;
}

const SectionTitle = ({ subtitle, title, description = "", dark = false }: SectionTitleProps) => (
  <div className={`text-center space-y-6 mb-16 md:mb-24 ${dark ? 'text-white' : 'text-black'}`}>
    <h3 className={`text-[10px] uppercase tracking-[0.4em] ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{subtitle}</h3>
    <h4 className="text-3xl md:text-7xl font-serif italic font-light leading-tight">{title}</h4>
    {description && <p className="max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed opacity-70 px-4" dir="rtl">{description}</p>}
    <div className={`w-12 h-[1px] mx-auto mt-8 ${dark ? 'bg-white/20' : 'bg-black/10'}`} />
  </div>
);

// --- الصفحة الرئيسية ---

export default function EliteMasterpiece() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#F4F1EA]">
      
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section - تم إصلاح مشكلة تباعد حروف العناوين العربية */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-white text-[10px] uppercase tracking-[0.5em] mb-6 opacity-80">Elegance Redefined</p>
          <h2 className="text-white text-5xl md:text-[9rem] font-serif italic mb-10 font-extralight leading-none tracking-normal" dir="rtl">
            جمالكِ <br/> <span className="text-[#c5a47e]">يبدأ من هنا</span>
          </h2>
          <button className="bg-white text-black px-12 md:px-20 py-4 md:py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-[#c5a47e] hover:text-white transition-all duration-700">
            اكتشفي المجموعة
          </button>
        </div>
      </header>

      {/* 1. قسم الفلسفة */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            subtitle="Philosophy" 
            title="فن الصناعة اليدوية" 
            description="نحن نؤمن أن كل قطعة تحكي قصة. في إيليت، نختار أجود أنواع الأقمشة العالمية لنصمم لكِ قطعاً تتجاوز حدود الزمن وتبرز تفردكِ."
          />
        </div>
      </section>

      {/* 2. قسم الملابس */}
      <section id="clothing" className="pb-24 md:pb-40 px-4 md:px-12">
        <SectionTitle subtitle="Ready To Wear" title="مجموعة 2026" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
          <div className="md:col-span-8 group relative h-[500px] md:h-[850px] overflow-hidden bg-neutral-100 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              alt="Elite Fashion"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
            <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-right text-white space-y-4 md:space-y-6" dir="rtl">
              <h4 className="text-4xl md:text-6xl font-serif italic">إطلالة النخبة</h4>
              <p className="max-w-md text-xs md:text-sm font-light opacity-90 leading-relaxed">لمسات مخملية وتصاميم هندسية تمنحكِ حضوراً ملكياً في كل مناسبة.</p>
              <button className="border-b border-white pb-1 text-[10px] uppercase tracking-widest hover:text-[#c5a47e] hover:border-[#c5a47e] transition-all">اكتشفي المزيد</button>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8 md:gap-12">
            {/* منتج 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-50 mb-4">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="Silk Dress" />
              </div>
              <div className="text-center">
                <p className="text-[9px] text-neutral-400 uppercase tracking-widest">فساتين</p>
                <h5 className="text-sm font-light">فستان الحرير الأبيض</h5>
                <p className="text-xs font-serif italic text-[#c5a47e] mt-1">3,200 ر.س</p>
              </div>
            </div>
            {/* منتج 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-50 mb-4">
                <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="Linen Set" />
              </div>
              <div className="text-center">
                <p className="text-[9px] text-neutral-400 uppercase tracking-widest">أطقم</p>
                <h5 className="text-sm font-light">طقم الكتان العصري</h5>
                <p className="text-xs font-serif italic text-[#c5a47e] mt-1">4,500 ر.س</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. التذييل (Footer) */}
      <footer className="pt-24 pb-12 px-6 bg-[#fafafa] border-t border-neutral-100 text-center space-y-16">
        <div className="max-w-lg mx-auto space-y-8">
           <h5 className="text-xl tracking-[0.5em] font-light uppercase">ELITE</h5>
           <p className="text-neutral-400 text-[10px] uppercase tracking-widest leading-loose" dir="rtl">انضمي إلى عالمنا لتلقي دعوات حصرية لعروض الأزياء والوصول المبكر للمجموعات الجديدة.</p>
           <div className="flex border-b border-black/10 pb-2">
              <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-transparent border-none py-2 px-2 outline-none text-sm text-center" />
              <button className="text-[9px] uppercase tracking-widest font-bold px-4">إرسال</button>
           </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[9px] uppercase tracking-[0.2em] pt-10 border-t border-black/5 max-w-6xl mx-auto">
           <a href="#" className="hover:text-[#c5a47e]">Instagram</a>
           <a href="#" className="hover:text-[#c5a47e]">TikTok</a>
           <a href="#" className="hover:text-[#c5a47e]">Shipping</a>
           <a href="#" className="hover:text-[#c5a47e]">Privacy</a>
        </div>
        
        <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-300">© 2026 Elite Luxury Boutique. Created for Excellence.</p>
      </footer>

    </main>
  );
}
