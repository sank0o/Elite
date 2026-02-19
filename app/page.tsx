"use client";

import React, { useEffect, useState } from 'react';

export default function LuxuryBoutique() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-white min-h-screen" />;

  return (
    <div className="min-h-screen bg-[#fff] text-[#000] selection:bg-[#e5e5e5]">
      
      {/* 1. Header Navigation - Minimalist Style */}
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <div className="flex-1 hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-light">
            <a href="#shop" className="hover:opacity-40 transition-all">Collections</a>
            <a href="#heritage" className="hover:opacity-40 transition-all">Heritage</a>
          </div>
          
          <div className="flex-1 text-center">
            <h1 className="text-2xl md:text-3xl tracking-[0.7em] font-extralight uppercase">ELITE</h1>
          </div>
          
          <div className="flex-1 flex justify-end gap-8 text-[10px] uppercase tracking-[0.3em] font-light">
            <span className="cursor-pointer border-b border-black pb-0.5">Bag (0)</span>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Full Screen Narrative */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-90 scale-100"
          >
            <source 
              src="https://cdn.pixabay.com/video/2020/05/25/40224-425026601_large.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 mt-20">
          <p className="text-white text-[10px] uppercase tracking-[0.6em] mb-6 animate-fadeIn">Autumn / Winter 2026</p>
          <h2 className="text-white text-5xl md:text-8xl font-serif italic mb-10 font-extralight tracking-tight" dir="rtl">فخامة التفاصيل</h2>
          <button className="bg-white text-black px-16 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-[0.6s] shadow-2xl">
            Discover the House
          </button>
        </div>
      </section>

      {/* 3. The Boutique Gallery - Inspired by Dior & Chanel */}
      <section id="shop" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Row 1: Clothing Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-40">
            <div className="md:col-span-7 overflow-hidden bg-neutral-50 group">
              <img 
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=1500" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
                alt="Apparel"
              />
            </div>
            <div className="md:col-span-5 text-right space-y-8 pr-4" dir="rtl">
              <span className="text-[11px] text-neutral-400 uppercase tracking-[0.4em]">المجموعة الجاهزة</span>
              <h3 className="text-4xl md:text-6xl font-serif font-light leading-tight">الأناقة <br/> في بساطتها</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-lg max-w-md ml-0 mr-auto">
                قطع صُممت لتدوم، تعبر عن قوة الأنوثة وتفرد الحضور بلمسات عصرية.
              </p>
              <button className="text-[10px] uppercase tracking-[0.3em] border-b border-neutral-300 pb-2 hover:border-black transition-all">مشاهدة المجموعة</button>
            </div>
          </div>

          {/* Row 2: Accessories & Beauty - Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Accessory 1 */}
            <div className="space-y-10 group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-neutral-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-[1s]"
                  alt="Leather Goods"
                />
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-xl font-serif italic">حقائب جلدية</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">صناعة يدوية</p>
              </div>
            </div>

            {/* Accessory 2 */}
            <div className="space-y-10 group cursor-pointer md:mt-24">
              <div className="aspect-square overflow-hidden bg-neutral-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-105"
                  alt="Beauty"
                />
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-xl font-serif italic">مستحضرات التجميل</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">الجمال المطلق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Luxury Experience - The "Elite" Statement */}
      <section id="heritage" className="py-40 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="w-[1px] h-20 bg-white/30 mx-auto mb-12" />
          <h3 className="text-3xl md:text-5xl font-serif italic font-extralight leading-relaxed" dir="rtl">
            "إيليت ليست مجرد اسم، بل هي تجربة تعيد تعريف مفهوم الرفاهية في عالمكِ الخاص."
          </h3>
          <p className="text-[10px] uppercase tracking-[0.8em] text-white/50 pt-8 italic">The Essence of Craftsmanship</p>
        </div>
      </section>

      {/* 5. Modern Footer */}
      <footer className="py-32 px-6 md:px-12 bg-white border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-2xl tracking-[0.5em] font-light mb-8">ELITE</h5>
            <p className="text-neutral-400 text-xs leading-loose max-w-sm" dir="rtl">
              انضمي إلى عالمنا لتلقي دعوات حصرية لعروض الأزياء، والوصول المبكر إلى مجموعاتنا المحدودة.
            </p>
          </div>
          <div className="space-y-6 text-[10px] uppercase tracking-[0.3em]">
            <p className="font-bold">Contact</p>
            <p className="text-neutral-400">Help Center</p>
            <p className="text-neutral-400">Boutique Finder</p>
          </div>
          <div className="space-y-6 text-[10px] uppercase tracking-[0.3em]">
            <p className="font-bold">Social</p>
            <p className="text-neutral-400 cursor-pointer hover:text-black transition-colors">Instagram</p>
            <p className="text-neutral-400 cursor-pointer hover:text-black transition-colors">TikTok</p>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-neutral-50 text-center">
          <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-300">© 2026 ELITE HOUSE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
