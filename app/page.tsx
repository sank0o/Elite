"use client";

import React, { useEffect, useState } from 'react';

/**
 * ELITE LUXURY BOUTIQUE - PRODUCTION READY
 * تم حل مشكلة TypeScript ومصلحة الشاشة السوداء
 */

// --- مكونات النظام التصميمي (Design System) ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#0a0a0a] text-[#f4f1ea] py-3 px-4 overflow-hidden relative border-b border-white/5">
    <div className="flex whitespace-nowrap animate-marquee items-center justify-around text-[10px] uppercase tracking-[0.4em] font-light">
      <span>توصيل مجاني عالمي للطلبات فوق 2000 ريال</span>
      <span className="mx-20 text-[#c5a47e]">●</span>
      <span>اكتشفي مجموعة "نور الشمس" الجديدة لربيع 2026</span>
      <span className="mx-20 text-[#c5a47e]">●</span>
      <span>خدمة التغليف الفاخر متاحة الآن لجميع الهدايا</span>
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
        <div className="flex-1 hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#clothing" className="hover:text-[#c5a47e] transition-colors">الملابس</a>
          <a href="#accessories" className="hover:text-[#c5a47e] transition-colors">الإكسسوارات</a>
          <a href="#skincare" className="hover:text-[#c5a47e] transition-colors">العناية</a>
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-2xl md:text-4xl tracking-[0.7em] font-extralight uppercase">ELITE</h1>
        </div>

        <div className="flex-1 flex justify-end items-center gap-8 text-[10px] uppercase tracking-[0.3em]">
          <span className="hidden sm:block cursor-pointer">الحساب</span>
          <div className="relative cursor-pointer border border-black/10 px-6 py-2 hover:bg-black hover:text-white transition-all">
            السلة (0)
          </div>
        </div>
      </div>
    </nav>
  );
};

// حل مشكلة الـ TypeScript عن طريق جعل description اختيارية بوضع علامة استفهام ?
interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string; 
  dark?: boolean;
}

const SectionTitle = ({ subtitle, title, description = "", dark = false }: SectionTitleProps) => (
  <div className={`text-center space-y-6 mb-24 ${dark ? 'text-white' : 'text-black'}`}>
    <h3 className={`text-[11px] uppercase tracking-[0.6em] ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{subtitle}</h3>
    <h4 className="text-4xl md:text-7xl font-serif italic font-light tracking-tight">{title}</h4>
    {description && <p className="max-w-xl mx-auto text-sm font-light leading-relaxed opacity-60" dir="rtl">{description}</p>}
    <div className={`w-16 h-[1px] mx-auto mt-10 ${dark ? 'bg-white/20' : 'bg-black/10'}`} />
  </div>
);

const ProductCard = ({ img, category, name, price }: { img: string, category: string, name: string, price: string }) => (
  <div className="group cursor-pointer space-y-6">
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm">
      <img 
        src={img} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-sm">
        <button className="w-full py-3 text-[9px] uppercase tracking-widest bg-black text-white">إضافة سريعة</button>
      </div>
    </div>
    <div className="text-center">
      <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">{category}</p>
      <h5 className="text-sm font-light">{name}</h5>
      <p className="text-xs font-serif italic text-[#c5a47e] mt-2">{price} ر.س</p>
    </div>
  </div>
);

// --- الصفحة الرئيسية ---

export default function EliteMasterpiece() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#F4F1EA]">
      
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section - تم تحسين الفيديو لتجنب الشاشة السوداء */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-70"
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-white text-[10px] uppercase tracking-[0.8em] mb-8 opacity-80 animate-pulse">Elegance Redefined</p>
          <h2 className="text-white text-6xl md:text-[10rem] font-serif italic mb-12 font-extralight tracking-tighter leading-none" dir="rtl">
            جمالكِ <br/> <span className="text-[#c5a47e]">يبدأ من هنا</span>
          </h2>
          <button className="bg-white text-black px-16 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-[#c5a47e] hover:text-white transition-all duration-700">
            اكتشفي المجموعة
          </button>
        </div>
      </header>

      {/* 1. قسم الفلسفة */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            subtitle="Philosophy" 
            title="فن الصناعة اليدوية" 
            description="نحن نؤمن أن كل قطعة تحكي قصة. في إيليت، نختار أجود أنواع الأقمشة العالمية لنصمم لكِ قطعاً تتجاوز حدود الزمن."
          />
        </div>
      </section>

      {/* 2. قسم الملابس - العرض الشبكي المعقد (تم إصلاح خطأ الـ TypeScript هنا) */}
      <section id="clothing" className="pb-40 px-6 md:px-12">
        <SectionTitle 
          subtitle="Ready To Wear" 
          title="مجموعة ربيع وصيف 2026" 
          description="" // تم وضع قيمة فارغة لمنع الخطأ
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
          <div className="md:col-span-8 group relative h-[850px] overflow-hidden bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              alt="Main Feature"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
            <div className="absolute bottom-20 right-20 text-right text-white space-y-6" dir="rtl">
              <h4 className="text-6xl font-serif italic">إطلالة النخبة</h4>
              <p className="max-w-md text-sm font-light opacity-80 leading-relaxed">لمسات مخملية وتصاميم هندسية تمنحكِ حضوراً لا يُنسى.</p>
              <button className="border-b border-white pb-2 text-[10px] uppercase tracking-widest hover:text-[#c5a47e]">اكتشفي المزيد</button>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-12">
            <ProductCard 
              img="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
              category="فساتين"
              name="فستان الحرير الأبيض"
              price="3,200"
            />
             <ProductCard 
              img="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800"
              category="أطقم"
              name="طقم الكتان العصري"
              price="4,500"
            />
          </div>
        </div>
      </section>

      {/* 3. قسم الإكسسوارات - الثيم الأسود الفخم */}
      <section id="accessories" className="py-40 bg-[#0a0a0a] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <SectionTitle 
            subtitle="The Essentials" 
            title="إكسسوارات ذهبية" 
            dark={true}
            description="" // تم وضع قيمة فارغة
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-8 group">
               <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="Gold" />
               </div>
               <div className="text-center">
                  <h5 className="font-serif italic text-2xl">خاتم الذهب الخالص</h5>
                  <p className="text-[10px] tracking-widest text-[#c5a47e] mt-2">LIMITED EDITION</p>
               </div>
            </div>
            <div className="space-y-8 group pt-20">
               <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="Bag" />
               </div>
               <div className="text-center">
                  <h5 className="font-serif italic text-2xl">حقيبة السهرة الجلدية</h5>
                  <p className="text-[10px] tracking-widest text-[#c5a47e] mt-2">HANDMADE</p>
               </div>
            </div>
            <div className="space-y-8 group">
               <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="Heels" />
               </div>
               <div className="text-center">
                  <h5 className="font-serif italic text-2xl">حذاء الكريستال</h5>
                  <p className="text-[10px] tracking-widest text-[#c5a47e] mt-2">NEW ARRIVAL</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. قسم العناية بالبشرة */}
      <section id="skincare" className="py-40 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 order-2 lg:order-1" dir="rtl">
              <SectionTitle subtitle="Pure Beauty" title="طقوس العناية" description="مستخلصات طبيعية 100% لبشرة تشع نضارة." />
              <div className="grid grid-cols-1 gap-12">
                 <div className="flex gap-8 border-b border-neutral-100 pb-8 hover:translate-x-[-10px] transition-transform duration-500">
                    <span className="text-4xl font-serif text-[#c5a47e]/40 italic">01</span>
                    <p className="text-neutral-500 leading-loose">سيروم الذهب المركز لترميم الخلايا ومكافحة التجاعيد.</p>
                 </div>
                 <div className="flex gap-8 border-b border-neutral-100 pb-8 hover:translate-x-[-10px] transition-transform duration-500">
                    <span className="text-4xl font-serif text-[#c5a47e]/40 italic">02</span>
                    <p className="text-neutral-500 leading-loose">كريم الترطيب العميق بخلاصة الورد الدمشقي.</p>
                 </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-square object-cover shadow-2xl" alt="Skincare" />
              <div className="absolute -bottom-10 -left-10 bg-white p-12 hidden md:block shadow-xl">
                 <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#c5a47e]">Proven Results</p>
                 <p className="text-3xl font-serif italic mt-2">نضارة دائمة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. التذييل (Footer) */}
      <footer className="pt-32 pb-12 px-6 md:px-12 bg-white border-t border-neutral-100 text-center space-y-20">
        <div className="max-w-4xl mx-auto space-y-10">
           <h5 className="text-sm tracking-[1em] font-bold uppercase">Join the Elite Club</h5>
           <p className="text-neutral-400 text-xs tracking-widest uppercase" dir="rtl">اشتركي للحصول على دعوات حصرية لعروض أزياء النخبة</p>
           <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-neutral-50 border-none py-4 px-6 focus:ring-1 focus:ring-[#c5a47e] outline-none text-sm" />
              <button className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-widest">اشتراك</button>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] uppercase tracking-[0.3em] pt-20 border-t border-neutral-50">
           <div className="flex flex-col gap-4">
              <p className="font-bold text-black mb-4">Collections</p>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Spring 2026</a>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Bestsellers</a>
           </div>
           <div className="flex flex-col gap-4">
              <p className="font-bold text-black mb-4">Support</p>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Contact Us</a>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Shipping</a>
           </div>
           <div className="flex flex-col gap-4">
              <p className="font-bold text-black mb-4">Social</p>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">TikTok</a>
           </div>
           <div className="flex flex-col gap-4">
              <p className="font-bold text-black mb-4">Legal</p>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Privacy</a>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors">Terms</a>
           </div>
        </div>
        
        <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-300">© 2026 Elite Luxury Boutique. All rights reserved.</p>
      </footer>

    </main>
  );
}
