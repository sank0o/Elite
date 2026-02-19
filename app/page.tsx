"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE IMPERIAL VERSION 3.0 (IRAQ & GLOBAL)
 * ---------------------------------------------------------------------------------------
 * [UPDATES]: 
 * 1. Primary Currency: Iraqi Dinar (IQD) with Multi-currency support.
 * 2. Join Form: Full Name & Phone Number (Global Codes +964 first).
 * 3. Payment Logic: COD for Iraq / Card for Global.
 * 4. Maintaining 500+ Lines of High-End Code.
 * ---------------------------------------------------------------------------------------
 */

// --- 1. التكوين والبيانات الضخمة (Large Data Sets) ---

const CURRENCIES = [
  { code: 'IQD', label: 'د.ع', rate: 1, name: 'دينار عراقي' },
  { code: 'USD', label: '$', rate: 0.00076, name: 'دولار أمريكي' },
  { code: 'SAR', label: 'ر.س', rate: 0.0029, name: 'ريال سعودي' },
  { code: 'AED', label: 'د.إ', rate: 0.0028, name: 'درهم إماراتي' },
  { code: 'KWD', label: 'د.ك', rate: 0.00023, name: 'دينار كويتي' },
];

const COUNTRY_CODES = [
  { code: '+964', country: 'العراق', flag: '🇮🇶' },
  { code: '+966', country: 'السعودية', flag: '🇸🇦' },
  { code: '+971', country: 'الإمارات', flag: '🇦🇪' },
  { code: '+965', country: 'الكويت', flag: '🇰🇼' },
  { code: '+962', country: 'الأردن', flag: '🇯🇴' },
  { code: '+974', country: 'قطر', flag: '🇶🇦' },
  { code: '+1', country: 'أمريكا', flag: '🇺🇸' },
  { code: '+44', country: 'بريطانيا', flag: '🇬🇧' },
];

const NAVIGATION_LINKS = [
  { id: 'new', labelAr: 'وصلنا حديثاً', labelEn: 'New Arrivals' },
  { id: 'clothing', labelAr: 'الأزياء', labelEn: 'Ready To Wear' },
  { id: 'accessories', labelAr: 'الإكسسوارات', labelEn: 'Accessories' },
  { id: 'beauty', labelAr: 'الجمال', labelEn: 'Beauty & Care' },
  { id: 'story', labelAr: 'قصتنا', labelEn: 'Our Heritage' }
];

const PRODUCTS_DATABASE = [
  { id: 1, name: "فستان السهرة الحريري", basePrice: 425000, cat: "dresses", tag: "حصري", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b" },
  { id: 2, name: "حقيبة الكرواسون الجلدية", basePrice: 285000, cat: "bags", tag: "الأكثر مبيعاً", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa" },
  { id: 3, name: "سيروم الذهب الملكي", basePrice: 89000, cat: "skincare", tag: "جديد", img: "https://images.unsplash.com/photo-1596462502278-27bfad450216" },
  { id: 4, name: "عطر الياسمين والمسك", basePrice: 125000, cat: "skincare", tag: "إصدار محدود", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 5, name: "حذاء الكريستال الشفاف", basePrice: 145000, cat: "dresses", tag: "نفذت الكمية تقريباً", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95" },
  { id: 6, name: "عقد اللؤلؤ الطبيعي", basePrice: 590000, cat: "bags", tag: "نخبة", img: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4" },
  { id: 7, name: "جاكيت الصوف الإيطالي", basePrice: 310000, cat: "dresses", tag: "شتاء 2026", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543" },
  { id: 8, name: "نظارات شمسية كلاسيك", basePrice: 115000, cat: "bags", tag: "أساسي", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { id: 9, name: "قفازات الجلد الناعم", basePrice: 45000, cat: "accessories", tag: "شتوي", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { id: 10, name: "روب الحمام الفاخر", basePrice: 95000, cat: "beauty", tag: "راحة", img: "https://images.unsplash.com/photo-1563203362-722a84278c2e" }
];

const REVIEWS = [
  { id: 101, user: "لجين خالد", city: "بغداد", text: "التغليف وحده قصة فنية، الجودة لا يعلى عليها فعلاً والدفع عند الاستلام سهل كل شي.", stars: 5 },
  { id: 102, user: "دلال حمد", city: "دبي", text: "خدمة العملاء سريعة جداً، والشحن الدولي كان أسرع مما توقعت.", stars: 5 },
  { id: 103, user: "سارة محمد", city: "أربيل", text: "الفستان قطعة فنية، كل من رآني سألني عنه. فخورة بوجود هكذا براند.", stars: 5 },
  { id: 104, user: "مريم عبدالله", city: "الدوحة", text: "أفضل منتجات عناية بالبشرة استخدمتها في حياتي، أنصح بها بشدة.", stars: 5 }
];

// --- 2. المكونات الفرعية التفصيلية (Micro-Components) ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#1a1a1a] text-[#f4f1ea] py-2.5 overflow-hidden border-b border-white/5 relative z-[200]">
    <div className="flex whitespace-nowrap animate-marquee items-center justify-around">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-10 px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">الدفع عند الاستلام متاح داخل العراق فقط</span>
          <span className="text-[#c5a47e] text-lg">✦</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]" dir="rtl">توصيل لكافة المحافظات ودول العالم</span>
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

const SectionHeader = ({ sub, title, desc }: { sub: string, title: string, desc?: string }) => (
  <div className="text-center space-y-4 mb-20 px-4">
    <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a47e] font-bold block">{sub}</span>
    <h2 className="text-4xl md:text-7xl font-serif italic text-[#2d2d2d] leading-tight tracking-normal">{title}</h2>
    {desc && <p className="max-w-xl mx-auto text-[#6d6875] text-sm md:text-base font-light leading-relaxed mt-6" dir="rtl">{desc}</p>}
    <div className="flex justify-center items-center gap-4 mt-10">
      <div className="w-8 h-[1px] bg-[#f3e5e9]" />
      <div className="w-2 h-2 rounded-full border border-[#c5a47e]" />
      <div className="w-8 h-[1px] bg-[#f3e5e9]" />
    </div>
  </div>
);

// --- 3. المكون الرئيسي (Main Page) ---

export default function EliteImperialStoreV3() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const formatPrice = (basePrice: number) => {
    const converted = basePrice * currency.rate;
    return new Intl.NumberFormat('en-US').format(Math.round(converted)) + " " + currency.label;
  };

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
          
          <div className="flex-1 flex items-center gap-6">
            <select 
              className="bg-transparent text-[10px] font-bold border-none outline-none cursor-pointer text-[#c5a47e]"
              onChange={(e) => setCurrency(CURRENCIES.find(c => c.code === e.target.value) || CURRENCIES[0])}
            >
              {CURRENCIES.map(c => <option key={c.code} value={c.code} className="text-black">{c.code} ({c.label})</option>)}
            </select>
            <div className="hidden md:block h-6 w-[1px] bg-neutral-200" />
            <div className="relative group p-2 bg-neutral-50 rounded-full cursor-pointer hover:bg-[#f3e5e9] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#c5a47e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
          </div>

          <div className="flex-1 text-center">
            <h1 className={`text-2xl md:text-5xl font-extralight tracking-[0.5em] transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-110'}`}>ELITE</h1>
          </div>

          <div className="flex-1 hidden lg:flex justify-end gap-10">
            {NAVIGATION_LINKS.map(link => (
              <a key={link.id} href={`#${link.id}`} className="group relative overflow-hidden py-1">
                <span className="block text-[11px] font-bold uppercase tracking-normal transition-transform duration-500 group-hover:-translate-y-full">{link.labelAr}</span>
                <span className="absolute top-full left-0 block text-[11px] font-bold uppercase tracking-widest text-[#c5a47e] transition-transform duration-500 group-hover:-translate-y-full">{link.labelEn}</span>
              </a>
            ))}
          </div>
          
          <div className="lg:hidden p-2 ml-4">
             <div className="w-6 h-[1px] bg-black mb-1.5" />
             <div className="w-4 h-[1px] bg-black" />
          </div>
        </div>
      </nav>

      {/* --- بطل الصفحة (Hero) --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-100 animate-slow-zoom">
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-6xl space-y-12">
          <p className="text-white text-[10px] uppercase tracking-[0.8em] font-bold opacity-80 animate-fade-in-down">Modern Luxury From Baghdad</p>
          <h2 className="text-6xl md:text-[11rem] font-serif italic text-white leading-none tracking-normal animate-reveal-text" dir="rtl">
            أناقتكِ <br/> <span className="text-[#f3e5e9] drop-shadow-2xl">تكتب التاريخ</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-10">
            <button className="bg-white text-black px-16 py-6 text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-700 w-full md:w-auto shadow-2xl">تسوقي الآن</button>
            <button className="backdrop-blur-md border border-white/30 text-white px-16 py-6 text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-white hover:text-black transition-all duration-700 w-full md:w-auto">اكتشفي السر</button>
          </div>
        </div>
      </header>

      {/* --- قسم المجموعات (Collections) --- */}
      <section id="clothing" className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="space-y-6 text-right md:text-left" dir="rtl">
              <h3 className="text-[12px] text-[#c5a47e] font-bold uppercase tracking-[0.4em]">Essential Curations</h3>
              <h4 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] leading-tight">قطعٌ تليق <br/> بحضوركِ الملكي</h4>
            </div>
            <div className="flex gap-8 border-b border-neutral-100 pb-4 overflow-x-auto w-full md:w-auto no-scrollbar">
              {['all', 'dresses', 'bags', 'skincare', 'accessories'].map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${activeCategory === cat ? 'text-[#c5a47e]' : 'text-neutral-400 hover:text-black'}`}>
                  {cat === 'all' ? 'الكل' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="group flex flex-col space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-[#fdfaf6] cursor-pointer">
                  <img src={`${prod.img}?auto=format&fit=crop&q=80&w=1000`} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt={prod.name} />
                  <div className="absolute top-8 left-8 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-[#c5a47e] text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest">{prod.tag}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     <button className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:bg-[#c5a47e] hover:text-white transition-all">أضيفي للسلة</button>
                  </div>
                </div>
                <div className="text-center space-y-1.5">
                  <p className="text-[9px] text-[#b5838d] font-bold uppercase tracking-[0.2em]">{prod.cat}</p>
                  <h4 className="text-lg font-light tracking-normal leading-tight">{prod.name}</h4>
                  <p className="text-sm font-serif italic text-[#c5a47e] font-bold">{formatPrice(prod.basePrice)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- قسم الدفع والسياسة (Payment Policy) --- */}
      <section className="py-32 bg-[#fdfaf6] border-y border-[#f3e5e9]">
        <div className="max-w-[1500px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
             <img src="https://images.unsplash.com/photo-1556742049-04ff56f71b12?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Security" />
             <div className="absolute inset-0 bg-[#c5a47e]/10" />
          </div>
          <div className="order-1 lg:order-2 space-y-12 text-right" dir="rtl">
            <SectionHeader sub="Payment & Shipping" title="سهولة الاقتناء" />
            <div className="space-y-8">
               <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-neutral-100">
                  <h5 className="text-xl font-serif italic text-[#c5a47e] mb-4">داخل العراق 🇮🇶</h5>
                  <p className="text-sm text-[#6d6875] leading-loose">نفتخر بتقديم خدمة **الدفع عند الاستلام** لكافة محافظات العراق. كما يمكنكم الدفع مسبقاً عبر البطاقات المصرفية لضمان سرعة المعالجة.</p>
               </div>
               <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-neutral-100">
                  <h5 className="text-xl font-serif italic text-[#c5a47e] mb-4">بقية دول العالم 🌍</h5>
                  <p className="text-sm text-[#6d6875] leading-loose">يتم شحن الطلبات الدولية عبر DHL/FedEx. الدفع متاح حصراً عبر **البطاقات الائتمانية** (Visa/MasterCard) من خلال بوابة دفع آمنة ومشفرة بالكامل.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- قسم قصة العلامة (Heritage) --- */}
      <section id="story" className="py-56 bg-white overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16 text-right order-2 lg:order-1" dir="rtl">
            <SectionHeader sub="Our Heritage" title="فخامة ولدت <br/> في بغداد" />
            <p className="text-xl md:text-3xl font-light text-[#6d6d6d] leading-relaxed font-serif italic">"بدأت رحلتنا في عام 2026 برؤية واحدة: أن نصدر الجمال العراقي للعالم. كل خيط نستخدمه يروي قصة تمكين، وكل قطعة هي وعد بالأناقة الأبدية."</p>
            <div className="grid grid-cols-2 gap-12 pt-10">
              <div className="space-y-2"><p className="text-4xl font-serif italic text-[#c5a47e]">120+</p><p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]">حرفية يدوية</p></div>
              <div className="space-y-2"><p className="text-4xl font-serif italic text-[#c5a47e]">2026</p><p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]">سنة التأسيس</p></div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-20">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891" className="w-full h-full object-cover" alt="Heritage" />
             </div>
             <div className="absolute -bottom-10 -left-10 w-full h-full border border-[#f3e5e9] rounded-[4rem] -z-0 translate-x-4 translate-y-4" />
          </div>
        </div>
      </section>

      {/* --- مراجعات العميلات (Reviews) --- */}
      <section className="py-32 bg-[#fffcf9] overflow-hidden">
        <SectionHeader sub="Our Muse Says" title="ملهماتنا يتحدثن" />
        <div className="flex gap-10 px-6 animate-infinite-scroll">
          {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[480px] bg-white p-12 rounded-[3rem] border border-[#f3e5e9] shadow-sm">
               <div className="flex text-[#c5a47e] gap-1.5 mb-8">{[...Array(rev.stars)].map((_, s) => <span key={s}>★</span>)}</div>
               <p className="text-lg font-light leading-relaxed italic text-[#4a4a4a] mb-10" dir="rtl">"{rev.text}"</p>
               <div className="flex justify-between items-center border-t border-neutral-50 pt-8">
                  <div className="text-right" dir="rtl"><p className="text-[11px] font-bold text-[#2d2d2d] tracking-widest uppercase">{rev.user}</p><p className="text-[9px] text-[#b5838d] tracking-widest uppercase mt-1">{rev.city}</p></div>
                  <div className="w-10 h-10 rounded-full bg-[#fdfaf6] flex items-center justify-center text-[#c5a47e] font-serif">E</div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- قسم الانضمام المعدل (Join Form) --- */}
      <section className="py-48 bg-[#1a1a1a] text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#c5a47e]">Join Our Elite Inner Circle</h4>
            <h3 className="text-4xl md:text-7xl font-serif italic">انضمي للنخبة</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto pt-8">
            <div className="space-y-3 text-right" dir="rtl">
              <label className="text-[10px] uppercase font-bold text-[#c5a47e] tracking-widest">الاسم الكامل</label>
              <input type="text" placeholder="اكتبي اسمكِ هنا" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#c5a47e] transition-all text-sm" />
            </div>
            <div className="space-y-3 text-right" dir="rtl">
              <label className="text-[10px] uppercase font-bold text-[#c5a47e] tracking-widest">رقم الهاتف</label>
              <div className="flex gap-4">
                <input type="tel" placeholder="770 000 0000" className="flex-1 bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#c5a47e] transition-all text-sm text-left" />
                <select className="bg-transparent border-b border-white/20 py-4 text-[10px] outline-none font-bold" onChange={(e) => setSelectedCountry(COUNTRY_CODES.find(c => c.code === e.target.value) || COUNTRY_CODES[0])}>
                  {COUNTRY_CODES.map(c => <option key={c.code} value={c.code} className="text-black">{c.flag} {c.code}</option>)}
                </select>
              </div>
            </div>
            <button className="md:col-span-2 mt-12 bg-white text-black px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-700">تأكيد الانضمام</button>
          </div>
        </div>
      </section>

      {/* --- التذييل (Footer) --- */}
      <footer className="pt-40 pb-16 px-8 bg-white border-t border-[#f3e5e9]">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="space-y-10">
              <h5 className="text-3xl font-extralight tracking-[0.5em] text-[#2d2d2d]">ELITE</h5>
              <p className="text-xs text-neutral-500 leading-[2.5] uppercase tracking-widest" dir="rtl">دار إيليت هي الوجهة التي تجتمع فيها الحرفية التقليدية مع الرؤية العصرية لتمكين المرأة.</p>
              <div className="flex gap-8">
                {['INSTAGRAM', 'TIKTOK', 'PINTEREST'].map(s => <a key={s} href="#" className="text-[9px] font-black border-b border-black/10 pb-1 hover:border-[#c5a47e] transition-all">{s}</a>)}
              </div>
            </div>
            <div className="space-y-8 text-right md:text-left">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">خدماتنا</h6>
              <ul className="space-y-5 text-[11px] font-medium text-neutral-600">
                {['تتبع طلبك', 'الشحن والإرجاع', 'سياسة الخصوصية', 'اتصلي بنا'].map(i => <li key={i} className="hover:text-black cursor-pointer transition-colors tracking-normal">{i}</li>)}
              </ul>
            </div>
            <div className="space-y-8 text-right md:text-left">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">العملات المدعومة</h6>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold text-neutral-600 uppercase">
                {CURRENCIES.map(c => <button key={c.code} onClick={() => setCurrency(c)} className="hover:text-[#c5a47e] transition-colors">{c.name}</button>)}
              </div>
            </div>
            <div className="space-y-8 text-right md:text-left" dir="rtl">
              <h6 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a47e]">تواجدي معنا</h6>
              <p className="text-[11px] text-neutral-500 leading-relaxed">بغداد، حي المنصور <br/> دبي، منطقة التصميم d3</p>
              <p className="text-[11px] text-neutral-500 font-bold">Concierge@EliteHouse.com</p>
            </div>
          </div>
          <div className="pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-300">© 2026 ELITE LUXURY HOUSE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10 text-[9px] uppercase tracking-widest text-neutral-400">
               <a href="#" className="hover:text-black transition-colors">Privacy</a>
               <a href="#" className="hover:text-black transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 45s linear infinite; }
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite alternate; }
        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1.5s ease-out forwards; }
        @keyframes reveal-text { 0% { opacity: 0; transform: scale(0.95) translateY(30px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-reveal-text { animation: reveal-text 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
