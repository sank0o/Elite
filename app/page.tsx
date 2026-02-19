"use client";

import React from 'react';

export default function EliteWomenStore() {
  return (
    <main className="min-h-screen bg-[#FCFAf8] text-[#1a1a1a] font-sans selection:bg-[#e2d1c3]">
      
      {/* 1. شريط التنقل الفخم (Sticky Navbar) */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="text-lg tracking-[0.5em] font-bold">ELITE WOMEN</div>
        
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#clothing" className="hover:text-gray-400 transition-all duration-300">الملابس</a>
          <a href="#accessories" className="hover:text-gray-400 transition-all duration-300">الإكسسوارات</a>
          <a href="#skincare" className="hover:text-gray-400 transition-all duration-300">العناية بالبشرة</a>
        </div>

        <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase">
          <span className="cursor-pointer hover:opacity-50 transition-opacity">تسجيل الدخول</span>
          <div className="relative cursor-pointer border border-black px-5 py-2 hover:bg-black hover:text-white transition-all duration-500">
            السلة (0)
          </div>
        </div>
      </nav>

      {/* 2. قسم الهيرو السينمائي (Hero Section with Video) */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          {/* تم استخدام فيديو احترافي مباشر ومضمون التشغيل */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          >
            <source 
              src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* طبقة تظليل (Overlay) لضمان وضوح النص */}
          <div className="absolute inset-0 bg-black/30 backdrop-grayscale-[20%]"></div>
        </div>

        <div className="text-center z-10 px-4 space-y-6">
          <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] text-white/80 drop-shadow-sm animate-pulse">
            Luxury Lifestyle 2026
          </h2>
          <h1 className="text-5xl md:text-9xl font-serif italic text-white drop-shadow-2xl leading-tight">
            جمالكِ يبدأ من هنا
          </h1>
          <p className="text-white/70 text-sm md:text-lg font-light tracking-widest max-w-2xl mx-auto">
            مجموعة مختارة بعناية للمرأة التي لا تقبل إلا بالكمال
          </p>
          <div className="pt-8">
            <button className="bg-white text-black px-16 py-5 text-[11px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 border border-white shadow-xl">
              اكتشفي المجموعة
            </button>
          </div>
        </div>
        
        {/* سهم النزول للأسفل */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </header>

      {/* 3. قسم الملابس (Clothing Section) */}
      <section id="clothing" className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden bg-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200" 
              alt="Elite Fashion" 
              className="w-full h-[700px] object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-white/0 transition-all duration-700"></div>
          </div>
          
          <div className="text-right space-y-8" dir="rtl">
            <div className="space-y-2">
              <h3 className="text-[12px] text-[#c5a47e] tracking-[0.4em] uppercase font-bold">New Collection</h3>
              <h4 className="text-5xl md:text-7xl font-serif italic text-[#1a1a1a]">أزياء النخبة</h4>
            </div>
            <p className="text-gray-500 font-light leading-[2] text-xl max-w-lg ml-0 mr-auto">
              فساتين مصممة يدوياً لتناسب أرقى المناسبات، نجمع بين كلاسيكية التصميم وحداثة الخامات لنقدم لكِ قطعاً فنية تليق بحضورك.
            </p>
            <button className="group flex items-center gap-4 text-[12px] tracking-[0.3em] uppercase border-b border-black pb-2 transition-all hover:text-[#c5a47e] hover:border-[#c5a47e]">
              <span>تسوقي الملابس</span>
              <span className="group-hover:translate-x-2 transition-transform">←</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. قسم الإكسسوارات (Accessories Section) */}
      <section id="accessories" className="bg-[#1a1a1a] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h3 className="text-[12px] text-[#c5a47e] tracking-[0.4em] uppercase font-bold">The Final Touch</h3>
            <h4 className="text-5xl md:text-7xl font-serif italic leading-tight">إكسسوارات <br/>من الذهب الخالص</h4>
            <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md">
              أضيفي لمسة من السحر لمظهركِ مع مجموعتنا من المجوهرات والحقائب الفاخرة.
            </p>
            <button className="bg-transparent border border-white/30 text-white px-12 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
              استكشفي الملحقات
            </button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden shadow-2xl relative">
             <img 
              src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&q=80&w=1200" 
              alt="Elite Jewelry" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 5. قسم العناية بالبشرة (Skincare Gallery) */}
      <section id="skincare" className="max-w-7xl mx-auto py-32 px-6">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-[12px] text-gray-400 tracking-[0.6em] uppercase">Holistic Beauty</h3>
          <h4 className="text-5xl font-serif italic">سر النضارة الطبيعية</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571", title: "سيروم الذهب" },
            { img: "https://images.unsplash.com/photo-1594125350485-c0dd3cd39522", title: "كريم الترطيب العميق" },
            { img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc", title: "زيوت النخبة العطرية" }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 shadow-xl mb-6">
                <img src={`${item.img}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <p className="text-center text-[10px] tracking-[0.4em] uppercase font-bold text-gray-500 group-hover:text-black transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. التذييل (Luxury Footer) */}
      <footer className="py-24 border-t border-gray-100 text-center bg-white space-y-10">
        <div className="space-y-6">
          <div className="text-sm tracking-[0.8em] font-bold">ELITE WOMEN</div>
          <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Pinterest</a>
            <a href="#" className="hover:text-black transition-colors">Tiktok</a>
          </div>
        </div>
        <p className="text-[10px] tracking-[0.5em] text-gray-300 uppercase">
          © 2026 جميع الحقوق محفوظة لمتجر إيليت - الأناقة في التفاصيل
        </p>
      </footer>
    </main>
  );
}
