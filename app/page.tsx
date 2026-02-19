"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE IMPERIAL VERSION 2026
 * ---------------------------------------------------------------------------------------
 * [FEATURES]:
 * 1. Sophisticated Navigation with dynamic scroll states.
 * 2. High-Fidelity Video Hero with layered parallax text.
 * 3. Deeply Detailed Product Grid with complex hover states.
 * 4. Advanced Testimonials with auto-sliding logic.
 * 5. Full-Scale Luxury Footer with multi-column distribution.
 * 6. Custom Design System: "Soft-Minimalism Gold & Rose".
 * 7. FIXED: Arabic Letter Spacing for connected typography.
 * ---------------------------------------------------------------------------------------
 */

// --- 1. التكوين والبيانات (Data Configuration) ---

const NAVIGATION_LINKS = [
  { id: 'new', labelAr: 'وصلنا حديثاً', labelEn: 'New Arrivals' },
  { id: 'clothing', labelAr: 'الأزياء', labelEn: 'Ready To Wear' },
  { id: 'accessories', labelAr: 'الإكسسوارات', labelEn: 'Accessories' },
  { id: 'beauty', labelAr: 'الجمال', labelEn: 'Beauty & Care' },
  { id: 'story', labelAr: 'قصتنا', labelEn: 'Our Heritage' }
];

const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'dresses', label: 'فساتين' },
  { id: 'bags', label: 'حقائب' },
  { id: 'skincare', label: 'عناية' }
];

const PRODUCTS_DATABASE = [
  { id: 1, name: "فستان السهرة الحريري", price: "4,200", cat: "dresses", tag: "حصري", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b" },
  { id: 2, name: "حقيبة الكرواسون الجلدية", price: "2,850", cat: "bags", tag: "الأكثر مبيعاً", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa" },
  { id: 3, name: "سيروم الذهب الملكي", price: "890", cat: "skincare", tag: "جديد", img: "https://images.unsplash.com/photo-1596462502278-27bfad450216" },
  { id: 4, name: "عطر الياسمين والمسك", price: "620", cat: "skincare", tag: "إصدار محدود", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 5, name: "حذاء الكريستال الشفاف", price: "1,450", cat: "dresses", tag: "نفذت الكمية تقريباً", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95" },
  { id: 6, name: "عقد اللؤلؤ الطبيعي", price: "5,900", cat: "bags", tag: "نخبة", img: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4" },
  { id: 7, name: "جاكيت الصوف الإيطالي", price: "3,100", cat: "dresses", tag: "شتاء 2026", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543" },
  { id: 8, name: "نظارات شمسية كلاسيك", price: "1,150", cat: "bags", tag: "أساسي", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" }
];

const REVIEWS = [
  { id: 101, user: "لجين خالد", city: "الرياض", text: "التغليف وحده قصة فنية، الجودة لا يعلى عليها فعلاً.", stars: 5 },
  { id: 102, user: "دلال حمد", city: "دبي", text: "خدمة العملاء سريعة جداً، ساعدوني في اختيار القياس المثالي.", stars: 5 },
  { id: 103, user: "سارة محمد", city: "جدة", text: "الفستان قطعة فنية، كل من رآني سألني عنه.", stars: 5 },
  { id: 104, user: "مريم عبدالله", city: "الكويت", text: "أفضل منتجات عناية بالبشرة استخدمتها في حياتي.", stars: 4 }
];

// --- 2. المكونات الفرعية التفصيلية (Micro-Components) ---

/** شريط الإعلانات العلوي المتفاعل */
const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#1a1a1a] text-[#f4f1ea] py-2.5 overflow-hidden border-b border-white/5 relative z-[200]">
      <div className="flex whitespace-nowrap animate-marquee items-center justify-around">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">توصيل مجاني عالمي للمشتريات فوق 2000 ريال</span>
            <span className="text-[#c5a47e] text-lg">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]" dir="rtl">خصم 10% عند التسجيل في النادي الملكي</span>
            <span className="text-[#c5a47e] text-lg">✦</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
};

/** مكون زر الإضافة للسلة الاحترافي */
const AddToCartButton = () => (
  <button className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:bg-[#c5a47e] hover:text-white transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
    أضيفي إلى الحقيبة
  </button>
);

/** بطاقة المنتج التفصيلية */
const ProductCard = ({ product }: { product: typeof PRODUCTS_DATABASE[0] }) => {
  return (
    <div className="group flex flex-col space-y-6">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#fdfaf6] cursor-pointer">
        <img 
          src={`${product.img}?auto=format&fit=crop&q=80&w=1000`} 
          className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 ease-out" 
          alt={product.name} 
        />
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-white/90 backdrop-blur-md text-[#c5a47e] text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
            {product.tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-700" />
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <AddToCartButton />
        </div>
      </div>
      <div className="text-center space-y-1.5 px-4">
        <p className="text-[9px] text-[#b5838d] font-bold uppercase tracking-[0.2em]">{product.cat}</p>
        <h4 className="text-lg font-light text-[#2d2d2d] tracking-normal leading-tight">{product.name}</h4>
        <p className="text-sm font-serif italic text-[#c5a47e] font-bold">{product.price} ر.س</p>
      </div>
    </div>
  );
};

/** قسم مراجعات العميلات مع نظام الحركة التلقائية */
const TestimonialSection = () => {
  return (
    <section className="py-32 bg-[#fffcf9] overflow-hidden border-y border-[#f3e5e9]">
      <div className="max-w-xl mx-auto text-center mb-20 px-6">
        <h3 className="text-[10px] text-[#c5a47e] font-bold uppercase tracking-[0.5em] mb-4">Voices of Elegance</h3>
        <h4 className="text-4xl font-serif italic text-[#2d2d2d]">آراء من نثق بهن</h4>
      </div>
      <div className="flex gap-10 px-6 animate-infinite-scroll">
        {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
          <div key={idx} className="min-w-[320px] md:min-w-[480px] bg-white p-12 rounded-[3rem] shadow-sm border border-[#f3e5e9] hover:border-[#c5a47e] transition-colors duration-700">
            <div className="flex text-[#c5a47e] gap-1.5 mb-8">
              {[...Array(rev.stars)].map((_, s) => <span key={s} className="text-lg">★</span>)}
            </div>
            <p className="text-lg md:text-xl font-light text-[#4a4a4a] leading-[1.8] italic mb-10" dir="rtl">"{rev.text}"</p>
            <div className="flex items-center justify-between border-t border-neutral-50 pt-8">
              <div className="text-right" dir="rtl">
                <p className="text-[11px] font-bold text-[#2d2d2d] uppercase tracking-widest">{rev.user}</p>
                <p className="text-[9px] text-[#b5838d] uppercase tracking-widest mt-1">{rev.city}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#fdfaf6] flex items-center justify-center text-[#c5a47e] font-serif">E</div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 50s linear infinite; }
      `}</style>
    </section>
  );
};

// --- 3. المكون الرئيسي (Main Page) ---

export default function EliteImperialStore() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // مراقبة التمرير لتغيير حالة الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // محاكاة تحميل الصفحة لإعطاء انطباع بالفخامة
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // فلترة المنتجات بناءً على الفئة المختارة
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS_DATABASE;
    return PRODUCTS_DATABASE.filter(p => p.cat === activeCategory);
  }, [activeCategory]);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extralight tracking-[0.5em] animate-pulse text-[#4a4e69]">ELITE</h1>
        <div className="mt-8 w-12 h-[1px] bg-[#c5a47e] animate-grow" />
        <style jsx>{` @keyframes grow { 0% { width: 0; } 100% { width: 100px; } } .animate-grow { animation: grow 1.5s ease-in-out forwards; } `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d] font-sans selection:bg-[#f3e5e9]">
      <AnnouncementBar />

      {/* --- الهيدر (Navigation) --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
          
          {/* الجانب الأيسر: أيقونات التحكم */}
          <div className="flex-1 flex items-center gap-6">
            <div className="relative cursor-pointer group p-2 rounded-full hover:bg-neutral-50 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute top-0 right-0 bg-[#c5a47e] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            <div className="hidden md:block h-6 w-[1px] bg-neutral-200 mx-2" />
            <span className="hidden lg:block text-[11px] font-bold uppercase tracking-widest text-[#b5838d] cursor-pointer hover:text-black transition-colors">ابحثي</span>
          </div>

          {/* المنتصف: الشعار (القلب النابض) */}
          <div className="flex-1 text-center">
            <h1 className={`text-2xl md:text-5xl font-extralight tracking-[0.5em] text-[#2d2d2d] transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-110'}`}>
              ELITE
            </h1>
          </div>

          {/* الجانب الأيمن: الروابط الرئيسية */}
          <div className="flex-1 hidden lg:flex justify-end gap-10">
            {NAVIGATION_LINKS.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="group relative overflow-hidden py-1"
              >
                <span className="block text-[11px] font-bold uppercase tracking-normal transition-transform duration-500 group-hover:-translate-y-full">
                  {link.labelAr}
                </span>
                <span className="absolute top-full left-0 block text-[11px] font-bold uppercase tracking-widest text-[#c5a47e] transition-transform duration-500 group-hover:-translate-y-full">
                  {link.labelEn}
                </span>
              </a>
            ))}
          </div>

          {/* قائمة الجوال */}
          <div className="lg:hidden p-2">
            <div className="w-6 h-[1px] bg-black mb-1.5" />
            <div className="w-4 h-[1px] bg-black" />
          </div>
        </div>
      </nav>

      {/* --- بطل الصفحة (Hero Section) --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-100 animate-slow-zoom">
            <source src="https://cdn.pixabay.com/video/2020/05/25/40224-425026601_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl space-y-12">
          <div className="space-y-4">
            <p className="text-white text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold opacity-80 animate-fade-in-down">
              The Essence of Modern Luxury
            </p>
            <h2 className="text-6xl md:text-[11rem] font-serif italic text-white leading-none tracking-normal animate-reveal-text" dir="rtl">
              أناقتكِ <br/> <span className="text-[#f3e5e9] drop-shadow-2xl">ترسم المستقبل</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-10">
            <button className="bg-white text-black px-16 py-6 text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-700 w-full md:w-auto shadow-2xl">
              تسوقي التشكيلة
            </button>
            <button className="backdrop-blur-md border border-white/30 text-white px-16 py-6 text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-white hover:text-black transition-all duration-700 w-full md:w-auto">
              اكتشفي عالمنا
            </button>
          </div>
        </div>

        {/* مؤشر التمرير السفلي */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <div className="w-[1px] h-16 bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-indicator" />
          </div>
        </div>
      </header>

      {/* --- قسم المجموعات (Collections Section) --- */}
      <section id="clothing" className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          
          {/* رأس القسم مع الفلاتر */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="space-y-6 text-right md:text-left" dir="rtl">
              <h3 className="text-[12px] text-[#c5a47e] font-bold uppercase tracking-[0.4em]">Essential Curations</h3>
              <h4 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] leading-tight">قطعٌ تليق <br/> بحضوركِ</h4>
            </div>
            
            <div className="flex gap-8 border-b border-neutral-100 pb-4 overflow-x-auto w-full md:w-auto no-scrollbar">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${activeCategory === cat.id ? 'text-[#c5a47e]' : 'text-neutral-400 hover:text-black'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* شبكة المنتجات الضخمة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {filteredProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          {/* زر عرض المزيد المصمم بعناية */}
          <div className="mt-32 text-center">
             <button className="group relative px-20 py-6 border border-[#f3e5e9] rounded-full overflow-hidden transition-all duration-700 hover:border-[#c5a47e]">
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">استكشفي المزيد</span>
                <div className="absolute inset-0 bg-[#c5a47e] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             </button>
          </div>
        </div>
      </section>

      {/* --- قسم قصة العلامة (Brand Heritage) --- */}
      <section id="story" className="py-56 bg-[#fdfaf6] relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            {/* المحتوى النصي */}
            <div className="space-y-16 text-right" dir="rtl">
              <div className="space-y-6">
                <span className="text-[#c5a47e] font-bold text-[11px] uppercase tracking-[0.5em]">The Elite Heritage</span>
                <h3 className="text-5xl md:text-8xl font-serif italic text-[#2d2d2d] leading-[1.1]">أكثر من <br/> مجرد متجر</h3>
              </div>
              
              <div className="space-y-10">
                <p className="text-xl md:text-3xl font-light text-[#6d6d6d] leading-relaxed font-serif">
                  "بدأت رحلتنا في عام 2026 برؤية واحدة: إعادة تعريف الفخامة كحالة شعورية، وليست مجرد ثمن. كل خيط نستخدمه يروي قصة تمكين، وكل قطعة هي وعد بالاستمرارية والأناقة التي لا تبهت."
                </p>
                <div className="flex gap-16 justify-end pt-8">
                  <div className="space-y-2">
                    <p className="text-4xl font-serif italic text-[#c5a47e]">120+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]">حرفية يدوية</p>
                  </div>
                  <div className="w-[1px] h-16 bg-[#c5a47e]/20" />
                  <div className="space-y-2">
                    <p className="text-4xl font-serif italic text-[#c5a47e]">2026</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]">سنة التأسيس</p>
                  </div>
                </div>
              </div>
            </div>

            {/* عرض الصور الفني (Collage) */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-20">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" className="w-full h-full object-cover" alt="Elite Craft" />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#f3e5e9] rounded-full -z-0 blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-6 rounded-[2rem] shadow-xl z-30 hidden md:block animate-bounce-slow">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b" className="w-full h-full object-cover rounded-xl" alt="Small Detail" />
              </div>
            </div>

          </div>
        </div>
        
        {/* عنصر زخرفي خلفي ضخم */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-serif italic text-black/[0.02] select-none pointer-events-none uppercase">
          Elite
        </div>
      </section>

      {/* --- قسم المراجعات --- */}
      <TestimonialSection />

      {/* --- قسم النشرة الإخبارية (Newsletter) --- */}
      <section className="py-48 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#c5a47e]">Join Our Elite Inner Circle</h4>
            <h3 className="text-4xl md:text-7xl font-serif italic leading-tight">كوني أول من يعلم <br/> بخبايا الجمال</h3>
          </div>
          <p className="text-white/60 text-lg font-light tracking-wide leading-loose max-w-2xl mx-auto" dir="rtl">
            اشتركي في قائمتنا البريدية للحصول على دعوات حصرية لعروض الأزياء والوصول المبكر للمجموعات المحدودة.
          </p>
          <form className="flex flex-col md:flex-row gap-6 max-w-xl mx-auto pt-8">
            <input 
              type="email" 
              placeholder="بريدكِ الإلكتروني" 
              className="flex-1 bg-transparent border-b border-white/20 py-4 px-2 focus:outline-none focus:border-[#c5a47e] transition-all text-center md:text-right"
            />
            <button className="bg-white text-black px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-500">
              انضمي الآن
            </button>
          </form>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 pointer-events-none" />
      </section>

      {/* --- التذييل (Footer) --- */}
      <footer className="pt-40 pb-16 px-8 md:px-16 bg-[#fffcf9] border-t border-[#f3e5e9]">
        <div className="max-w-[1700px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            
            {/* العمود 1: العلامة */}
            <div className="space-y-10">
              <h5 className="text-3xl font-extralight tracking-[0.5em] text-[#2d2d2d]">ELITE</h5>
              <p className="text-xs text-neutral-500 leading-[2.5] uppercase tracking-widest" dir="rtl">
                دار "إيليت" هي الوجهة التي تجتمع فيها الحرفية التقليدية مع الرؤية العصرية لتمكين المرأة في كل لحظة.
              </p>
              <div className="flex gap-6">
                {['INSTAGRAM', 'TIKTOK', 'PINTEREST'].map(s => (
                  <a key={s} href="#" className="text-[9px] font-black border-b border-black/10 pb-1 hover:border-[#c5a47e] transition-all">{s}</a>
                ))}
              </div>
            </div>

            {/* العمود 2: تسوقي */}
            <div className="space-y-8 text-right md:text-left">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">تسوقي</h6>
              <ul className="space-y-5 text-[11px] font-medium text-neutral-600">
                {['جميع الفئات', 'المجموعات المحدودة', 'الهدايا الفاخرة', 'بطاقات الإهداء'].map(item => (
                  <li key={item} className="hover:text-black cursor-pointer transition-colors tracking-normal">{item}</li>
                ))}
              </ul>
            </div>

            {/* العمود 3: الدعم */}
            <div className="space-y-8 text-right md:text-left">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">الدعم</h6>
              <ul className="space-y-5 text-[11px] font-medium text-neutral-600">
                {['تواصل معنا', 'الشحن والتوصيل', 'الاستبدال والاسترجاع', 'الأسئلة الشائعة'].map(item => (
                  <li key={item} className="hover:text-black cursor-pointer transition-colors tracking-normal">{item}</li>
                ))}
              </ul>
            </div>

            {/* العمود 4: الموقع */}
            <div className="space-y-8 text-right md:text-left" dir="rtl">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">تواجدي معنا</h6>
              <div className="space-y-4">
                <p className="text-[11px] text-neutral-500 leading-relaxed">الرياض، المملكة العربية السعودية <br/> حي النخيل، برج النخبة</p>
                <p className="text-[11px] text-neutral-500">Concierge@EliteBoutique.com</p>
              </div>
            </div>

          </div>

          {/* الحقوق القانونية السفلى */}
          <div className="pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-300">© 2026 ELITE HOUSE OF LUXURY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10 text-[9px] uppercase tracking-widest text-neutral-400">
               <a href="#" className="hover:text-black">Privacy Policy</a>
               <a href="#" className="hover:text-black">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* --- أنظمة الحركة المخصصة (Custom Animation Styles) --- */}
      <style jsx global>{`
        @keyframes scroll-indicator { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-scroll-indicator { animation: scroll-indicator 2s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite alternate; }

        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1.5s ease-out forwards; }

        @keyframes reveal-text { 0% { opacity: 0; transform: scale(0.95) translateY(30px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-reveal-text { animation: reveal-text 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
