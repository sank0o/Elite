"use client";

import React from 'react';

export default function EliteWomenStore() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#F4F1EA]">
      
      {/* 1. التنبيه العلوي (Announcement Bar) */}
      <div className="bg-[#111111] text-white text-[9px] uppercase tracking-[0.3em] py-3 text-center">
        توصيل مجاني للطلبات الفاخرة فوق 1000 ريال • اكتشفي مجموعة 2026
      </div>

      {/* 2. القائمة (Premium Navigation) */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-8 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="flex gap-8 text-[10px] uppercase tracking-widest hidden lg:flex">
          <a href="#new" className="hover:opacity-50 transition-opacity">الجديد</a>
          <a href="#boutique" className="hover:opacity-50 transition-opacity">البوتيك</a>
        </div>
        
        <div className="text-2xl tracking-[0.6em] font-light pl-4">ELITE</div>
        
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest">
          <button className="hover:opacity-50 transition-opacity">البحث</button>
          <button className="relative border-b border-black pb-1">السلة (0)</button>
        </div>
      </nav>

      {/* 3. واجهة الفيديو السينمائية (Cinematic Reveal) */}
      <header className="relative h-[90vh] mx-4 md:mx-6 overflow-hidden rounded-sm bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover scale-100 transition-transform duration-[10s] hover:scale-110"
          >
            <source 
              src="https://cdn.pixabay.com/video/2023/11/03/187652-880623253_large.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="absolute bottom-20 right-12 z-10 text-right text-white max-w-xl" dir="rtl">
          <h2 className="text-[11px] uppercase tracking-[0.5em] mb-4 opacity-80">فصل جديد من الأناقة</h2>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.2] mb-8 font-serif">قصة تتجلى في <br/> كل تفصيل</h1>
          <button className="bg-white text-black px-12 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500">
            اكتشفي المجموعة كاملة
          </button>
        </div>
      </header>

      {/* 4. قسم "قصة العلامة" (Brand Story) */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 mb-6">فلسفتنا</h3>
        <p className="text-2xl md:text-3xl font-serif italic text-[#1a1a1a] leading-relaxed" dir="rtl">
          "نحن لا نصنع الملابس فحسب، بل نصمم الثقة. كل قطعة في إيليت هي وعد بالتميز، صُنعت لأجلكِ لتعكس جوهركِ الحقيقي."
        </p>
      </section>

      {/* 5. قسم المنتجات الشبكي (Curated Collection) */}
      <section className="px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* كرت المنتج 1 - الملابس */}
          <div className="group relative h-[600px] overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-serif mb-2">الأزياء الراقية</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-80 border-b border-white inline-block pb-1">تسوقي الآن</p>
            </div>
          </div>

          {/* كرت المنتج 2 - الإكسسوارات */}
          <div className="group relative h-[600px] overflow-hidden cursor-pointer md:mt-12">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-serif mb-2">الإكسسوارات</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-80 border-b border-white inline-block pb-1">اكتشفي المزيد</p>
            </div>
          </div>

          {/* كرت المنتج 3 - العناية */}
          <div className="group relative h-[600px] overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1556229167-da318a2803a3?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-serif mb-2">العناية والجمال</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-80 border-b border-white inline-block pb-1">المجموعة الكاملة</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. قسم العرض الفاخر (Full Width Showcase) */}
      <section className="bg-[#F9F9F9] py-32 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-10">
          <h2 className="text-[12px] uppercase tracking-[0.5em] text-[#c5a47e]">الحرفية اليدوية</h2>
          <h3 className="text-4xl md:text-6xl font-serif leading-tight">اهتمام بالغ بأدق <br/> الخيوط والتفاصيل</h3>
          <p className="text-gray-500 font-light leading-loose max-w-2xl mx-auto" dir="rtl">
            نحن نؤمن أن الفخامة لا تكمن في المظهر فحسب، بل في الشعور الذي تمنحه القطعة لصاحبتها. نستخدم أرقى أنواع الحرير، وأجود الجلود، وأندر المكونات الطبيعية.
          </p>
        </div>
      </section>

      {/* 7. التذييل (Minimal Footer) */}
      <footer className="py-24 px-6 md:px-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <h5 className="text-xl tracking-[0.4em] font-light">ELITE</h5>
          <p className="text-[10px] text-gray-400 max-w-xs leading-relaxed">
            اشتركي في رسائلنا الإخبارية لتكوني أول من يعرف عن المجموعات الحصرية والفعاليات الخاصة.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[10px] uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <p className="font-bold mb-2">الخدمات</p>
            <a href="#">تواصل معنا</a>
            <a href="#">الشحن والترجيع</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold mb-2">القانونية</p>
            <a href="#">الخصوصية</a>
            <a href="#">الشروط</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold mb-2">تابعونا</p>
            <a href="#">Instagram</a>
            <a href="#">Tiktok</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
