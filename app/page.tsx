"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE SUPREME IMPERIAL VERSION 4.0
 * ---------------------------------------------------------------------------------------
 * [MODIFICATIONS]:
 * 1. PRIMARY CURRENCY: Iraqi Dinar (IQD) as the base for all calculations.
 * 2. GLOBAL CURRENCY SWITCHER: Supports USD, SAR, AED, KWD.
 * 3. JOIN FORM: Replaced Email with Full Name & Mobile Number (Iraq +964 Default).
 * 4. PAYMENT LOGIC: Explicitly detailed (COD for Iraq, Card for International).
 * 5. AESTHETIC: Maintained the high-end Soft Rose & Gold visual identity.
 * 6. TYPOGRAPHY: Fixed Arabic letter-spacing for perfect connectivity.
 * ---------------------------------------------------------------------------------------
 */

// --- 1. التكوين وقواعد البيانات (Global Data Sets) ---

// مصفوفة العملات مع أسعار الصرف بالنسبة للدينار العراقي
const CURRENCY_CONFIG = [
  { code: 'IQD', label: 'د.ع', rate: 1, name: 'دينار عراقي', symbol: 'IQD' },
  { code: 'USD', label: '$', rate: 0.00076, name: 'دولار أمريكي', symbol: 'USD' },
  { code: 'SAR', label: 'ر.س', rate: 0.0029, name: 'ريال سعودي', symbol: 'SAR' },
  { code: 'AED', label: 'د.إ', rate: 0.0028, name: 'درهم إماراتي', symbol: 'AED' },
  { code: 'KWD', label: 'د.ك', rate: 0.00023, name: 'دينار كويتي', symbol: 'KWD' },
];

// مفاتيح الدول لنموذج التسجيل
const COUNTRY_DIAL_CODES = [
  { code: '+964', country: 'العراق', flag: '🇮🇶' },
  { code: '+966', country: 'السعودية', flag: '🇸🇦' },
  { code: '+971', country: 'الإمارات', flag: '🇦🇪' },
  { code: '+965', country: 'الكويت', flag: '🇰🇼' },
  { code: '+962', country: 'الأردن', flag: '🇯🇴' },
  { code: '+968', country: 'عمان', flag: '🇴🇲' },
  { code: '+974', country: 'قطر', flag: '🇶🇦' },
  { code: '+20', country: 'مصر', flag: '🇪🇬' },
  { code: '+1', country: 'أمريكا', flag: '🇺🇸' },
  { code: '+44', country: 'بريطانيا', flag: '🇬🇧' },
];

// روابط التنقل الرئيسية
const NAV_MENU_ITEMS = [
  { id: 'new', labelAr: 'وصلنا حديثاً', labelEn: 'New Arrivals' },
  { id: 'clothing', labelAr: 'الأزياء', labelEn: 'Ready To Wear' },
  { id: 'accessories', labelAr: 'الإكسسوارات', labelEn: 'Accessories' },
  { id: 'beauty', labelAr: 'الجمال', labelEn: 'Beauty & Care' },
  { id: 'story', labelAr: 'قصتنا', labelEn: 'Our Heritage' }
];

// فئات المنتجات للفلترة
const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'dresses', label: 'فساتين' },
  { id: 'bags', label: 'حقائب' },
  { id: 'skincare', label: 'عناية' },
  { id: 'shoes', label: 'أحذية' }
];

// قاعدة بيانات المنتجات (السعر الأساسي بالدينار العراقي)
const MASTER_PRODUCT_LIST = [
  { id: 1, name: "فستان السهرة الحريري", basePrice: 425000, cat: "dresses", tag: "حصري", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b" },
  { id: 2, name: "حقيبة الكرواسون الجلدية", basePrice: 285000, cat: "bags", tag: "الأكثر مبيعاً", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa" },
  { id: 3, name: "سيروم الذهب الملكي", basePrice: 89000, cat: "skincare", tag: "جديد", img: "https://images.unsplash.com/photo-1596462502278-27bfad450216" },
  { id: 4, name: "عطر الياسمين والمسك", basePrice: 125000, cat: "skincare", tag: "إصدار محدود", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 5, name: "حذاء الكريستال الشفاف", basePrice: 145000, cat: "shoes", tag: "نفذت الكمية تقريباً", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95" },
  { id: 6, name: "عقد اللؤلؤ الطبيعي", basePrice: 590000, cat: "bags", tag: "نخبة", img: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4" },
  { id: 7, name: "جاكيت الصوف الإيطالي", basePrice: 310000, cat: "dresses", tag: "شتاء 2026", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543" },
  { id: 8, name: "نظارات شمسية كلاسيك", basePrice: 115000, cat: "accessories", tag: "أساسي", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { id: 9, name: "كريم الترطيب العميق", basePrice: 75000, cat: "skincare", tag: "طبيعي", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571" },
  { id: 10, name: "حقيبة المساء المخملية", basePrice: 210000, cat: "bags", tag: "سهرة", img: "https://images.unsplash.com/photo-1566150905458-1bf1fd113f0d" },
  { id: 11, name: "بلوزة الحرير الأبيض", basePrice: 180000, cat: "dresses", tag: "كلاسيك", img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153" },
  { id: 12, name: "حذاء المخمل الوردي", basePrice: 165000, cat: "shoes", tag: "رقيق", img: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637" }
];

const TESTIMONIALS_DATA = [
  { id: 1, user: "نور الزبيدي", city: "بغداد", text: "أجمل براند عراقي، التعامل راقي جداً والتوصيل سريع لباب البيت والدفع عند الاستلام مريح جداً.", stars: 5 },
  { id: 2, user: "ريم القحطاني", city: "الرياض", text: "وصلني الطلب للسعودية خلال ٤ أيام فقط، الجودة خيالية وتستحق كل ريال.", stars: 5 },
  { id: 3, user: "زينب علي", city: "البصرة", text: "الخامات تجنن والقياسات مضبوطة بالمليم، شكراً لاهتمامكم بأدق التفاصيل.", stars: 5 },
  { id: 4, user: "هبة محمد", city: "أربيل", text: "قطع فريدة فعلاً، أحببت اهتمامكم بالتغليف الفاخر.", stars: 5 }
];

// --- 2. المكونات الفرعية (Micro-Components) ---

/** شريط الإعلانات العلوي المتفاعل */
const DynamicAnnouncementBar = () => {
  return (
    <div className="w-full bg-[#1a1a1a] text-[#f4f1ea] py-2.5 overflow-hidden border-b border-white/5 relative z-[200]">
      <div className="flex whitespace-nowrap animate-marquee items-center justify-around">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">الدفع عند الاستلام متاح داخل العراق فقط</span>
            <span className="text-[#c5a47e] text-lg">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]" dir="rtl">شحن دولي سريع لكافة أنحاء العالم</span>
            <span className="text-[#c5a47e] text-lg">✦</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      `}</style>
    </div>
  );
};

/** مكون عرض السعر الموحد */
const PriceDisplay = ({ basePrice, currentCurrency }: { basePrice: number, currentCurrency: typeof CURRENCY_CONFIG[0] }) => {
  const converted = basePrice * currentCurrency.rate;
  const formatted = new Intl.NumberFormat('en-US').format(Math.round(converted));
  return (
    <p className="text-sm font-serif italic text-[#c5a47e] font-bold">
      {formatted} {currentCurrency.label}
    </p>
  );
};

/** مكون رأس القسم */
const SectionHeading = ({ sub, title, desc }: { sub: string, title: string, desc?: string }) => (
  <div className="text-center space-y-4 mb-24 px-4">
    <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a47e] font-bold block">{sub}</span>
    <h2 className="text-4xl md:text-7xl font-serif italic text-[#2d2d2d] leading-tight tracking-normal">{title}</h2>
    {desc && <p className="max-w-xl mx-auto text-[#6d6875] text-sm md:text-base font-light leading-relaxed mt-8" dir="rtl">{desc}</p>}
    <div className="flex justify-center items-center gap-4 mt-12">
      <div className="w-12 h-[1px] bg-[#f3e5e9]" />
      <div className="w-2 h-2 rounded-full border border-[#c5a47e]" />
      <div className="w-12 h-[1px] bg-[#f3e5e9]" />
    </div>
  </div>
);

// --- 3. المكون الرئيسي (Main Page Component) ---

export default function EliteSupremeStore() {
  // الحالات البرمجية (States)
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [appLoading, setAppLoading] = useState(true);
  const [currency, setCurrency] = useState(CURRENCY_CONFIG[0]);
  const [country, setCountry] = useState(COUNTRY_DIAL_CODES[0]);

  // التحكم في التمرير والتحميل
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    const loaderTimer = setTimeout(() => setAppLoading(false), 2000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loaderTimer);
    };
  }, []);

  // فلترة المنتجات برمجياً
  const displayProducts = useMemo(() => {
    if (activeTab === 'all') return MASTER_PRODUCT_LIST;
    return MASTER_PRODUCT_LIST.filter(p => p.cat === activeTab);
  }, [activeTab]);

  if (!isMounted) return null;

  // شاشة التحميل الفاخرة
  if (appLoading) {
    return (
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-5xl font-extralight tracking-[0.6em] text-[#4a4e69] animate-pulse">ELITE</h1>
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#c5a47e] scale-x-0 animate-expand-line" />
        </div>
        <style jsx>{`
          @keyframes expand-line { 0% { transform: scale-x(0); } 100% { transform: scale-x(1); } }
          .animate-expand-line { animation: expand-line 2s ease-in-out forwards; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d] font-sans selection:bg-[#f3e5e9] overflow-x-hidden">
      
      <DynamicAnnouncementBar />

      {/* --- الملاحة (Navigation System) --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-white/90 backdrop-blur-2xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
          
          {/* اليسار: محول العملات والحقيبة */}
          <div className="flex-1 flex items-center gap-6">
            <div className="relative group">
              <select 
                className="bg-transparent text-[10px] font-bold border-none outline-none cursor-pointer text-[#c5a47e] appearance-none"
                value={currency.code}
                onChange={(e) => setCurrency(CURRENCY_CONFIG.find(c => c.code === e.target.value) || CURRENCY_CONFIG[0])}
              >
                {CURRENCY_CONFIG.map(c => <option key={c.code} value={c.code} className="text-black">{c.code} ({c.label})</option>)}
              </select>
            </div>
            <div className="hidden md:block h-6 w-[1px] bg-neutral-200" />
            <div className="relative cursor-pointer group p-2 hover:bg-[#f3e5e9] rounded-full transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#c5a47e] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
          </div>

          {/* المنتصف: الشعار المركزي */}
          <div className="flex-1 text-center">
            <h1 className={`text-2xl md:text-5xl font-extralight tracking-[0.5em] text-[#2d2d2d] transition-all duration-700 ${isScrolled ? 'scale-90' : 'scale-110'}`}>
              ELITE
            </h1>
          </div>

          {/* اليمين: روابط الأقسام */}
          <div className="flex-1 hidden lg:flex justify-end gap-10">
            {NAV_MENU_ITEMS.map(link => (
              <a key={link.id} href={`#${link.id}`} className="group relative overflow-hidden py-1">
                <span className="block text-[11px] font-bold uppercase tracking-normal transition-transform duration-500 group-hover:-translate-y-full">
                  {link.labelAr}
                </span>
                <span className="absolute top-full left-0 block text-[11px] font-bold uppercase tracking-widest text-[#c5a47e] transition-transform duration-500 group-hover:-translate-y-full">
                  {link.labelEn}
                </span>
              </a>
            ))}
          </div>

          {/* أيقونة الجوال */}
          <div className="lg:hidden p-2 ml-4">
             <div className="w-6 h-[1px] bg-black mb-1.5" />
             <div className="w-4 h-[1px] bg-black" />
          </div>
        </div>
      </nav>

      {/* --- قسم الهيرو (Hero Masterpiece) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-65 scale-100 animate-slow-zoom">
            <source src="https://cdn.pixabay.com/video/2020/05/25/40224-425026601_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl space-y-12">
          <div className="space-y-4">
            <p className="text-white text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold opacity-80 animate-fade-in-down">
              The Pure Essence of Luxury
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

        {/* مؤشر التمرير السلس */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* --- شبكة المنتجات (The Curated Grid) --- */}
      <section id="clothing" className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-28">
            <div className="space-y-6 text-right md:text-left" dir="rtl">
              <h3 className="text-[12px] text-[#c5a47e] font-bold uppercase tracking-[0.4em]">Baghdad's Finest Selection</h3>
              <h4 className="text-5xl md:text-8xl font-serif italic text-[#2d2d2d] leading-tight">قطعٌ تليق <br/> بجمالكِ النادر</h4>
            </div>
            
            <div className="flex gap-10 border-b border-neutral-100 pb-4 overflow-x-auto w-full md:w-auto no-scrollbar">
              {PRODUCT_CATEGORIES.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap ${activeTab === cat.id ? 'text-[#c5a47e] border-b border-[#c5a47e]' : 'text-neutral-400 hover:text-black'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-28">
            {displayProducts.map(product => (
              <div key={product.id} className="group flex flex-col space-y-7">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3.5rem] bg-[#fdfaf6] cursor-pointer">
                  <img 
                    src={`${product.img}?auto=format&fit=crop&q=80&w=1000`} 
                    className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 ease-out" 
                    alt={product.name} 
                  />
                  <div className="absolute top-8 left-8 z-10">
                    <span className="bg-white/95 backdrop-blur-sm text-[#c5a47e] text-[8px] font-black px-5 py-2.5 rounded-full uppercase tracking-widest shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <button className="w-full bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      أضيفي للحقيبة
                    </button>
                  </div>
                </div>
                <div className="text-center space-y-2 px-4">
                  <p className="text-[9px] text-[#b5838d] font-bold uppercase tracking-[0.3em]">{product.cat}</p>
                  <h4 className="text-xl font-light text-[#2d2d2d] tracking-normal leading-tight">{product.name}</h4>
                  <PriceDisplay basePrice={product.basePrice} currentCurrency={currency} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 text-center">
             <button className="group relative px-24 py-7 border border-[#f3e5e9] rounded-full overflow-hidden transition-all duration-700 hover:border-[#c5a47e]">
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500">استكشفي كامل المتجر</span>
                <div className="absolute inset-0 bg-[#c5a47e] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             </button>
          </div>
        </div>
      </section>

      {/* --- قسم قصة العلامة (The Brand Story) --- */}
      <section id="story" className="py-60 bg-[#fdfaf6] relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            
            <div className="space-y-20 text-right order-2 lg:order-1" dir="rtl">
              <div className="space-y-6">
                <span className="text-[#c5a47e] font-bold text-[12px] uppercase tracking-[0.6em]">The Elite Heritage</span>
                <h3 className="text-6xl md:text-8xl font-serif italic text-[#2d2d2d] leading-[1.1]">فخامة <br/> ولدت في بغداد</h3>
              </div>
              
              <div className="space-y-12">
                <p className="text-2xl md:text-4xl font-light text-[#6d6d6d] leading-relaxed font-serif italic">
                  "في دار إيليت، نؤمن أن الجمال لا يحتاج إلى صراخ. بدأت رحلتنا في عام 2026 لننقل الحرفية العراقية إلى العالمية، حيث نمزج بين الحرير الطبيعي والتصاميم التي تحاكي المرأة العصرية الواثقة."
                </p>
                <div className="flex gap-20 justify-end pt-12">
                  <div className="space-y-3">
                    <p className="text-5xl font-serif italic text-[#c5a47e]">150+</p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#2d2d2d]">حرفة يدوية</p>
                  </div>
                  <div className="w-[1px] h-20 bg-[#c5a47e]/30" />
                  <div className="space-y-3">
                    <p className="text-5xl font-serif italic text-[#c5a47e]">2026</p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#2d2d2d]">تاريخنا</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl relative z-20 transform -rotate-2">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891" className="w-full h-full object-cover" alt="Elite Craftsmanship" />
              </div>
              <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#f3e5e9] rounded-full -z-0 blur-[100px] opacity-70" />
              <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-white p-8 rounded-[3rem] shadow-2xl z-30 hidden xl:block animate-float">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b" className="w-full h-full object-cover rounded-[2rem]" alt="Silk Detail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- قسم الدفع والسياسات (The Concierge Section) --- */}
      <section className="py-40 bg-white">
        <div className="max-w-[1500px] mx-auto px-8">
          <SectionHeading sub="Premium Services" title="تجربة تسوق آمنة" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-16 bg-[#fffcf9] rounded-[4rem] border border-[#f3e5e9] space-y-8 group hover:border-[#c5a47e] transition-all duration-700">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">🇮🇶</div>
               <h5 className="text-3xl font-serif italic">داخل العراق</h5>
               <p className="text-[#6d6875] leading-loose text-lg" dir="rtl">
                  نحن نوفر لكِ الخصوصية والراحة التامة. يمكنكِ طلب جميع المنتجات والدفع نقداً عند باب البيت (**الدفع عند الاستلام**). خدمتنا تغطي جميع محافظات العراق من الشمال إلى الجنوب.
               </p>
               <div className="pt-6 flex gap-4 text-[10px] font-black text-[#c5a47e] uppercase tracking-widest">
                  <span>Cash on Delivery</span> • <span>Zain Cash</span> • <span>Cards</span>
               </div>
            </div>
            <div className="p-16 bg-[#fffcf9] rounded-[4rem] border border-[#f3e5e9] space-y-8 group hover:border-[#c5a47e] transition-all duration-700">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">🌍</div>
               <h5 className="text-3xl font-serif italic">خارج العراق</h5>
               <p className="text-[#6d6875] leading-loose text-lg" dir="rtl">
                  لزبائننا حول العالم، نعتمد الدفع الآمن عبر **البطاقات المصرفية الدولية**. الشحن يتم عبر DHL Express لضمان وصول قطعة الفخامة إليكِ في أسرع وقت ممكن وبأمان تام.
               </p>
               <div className="pt-6 flex gap-4 text-[10px] font-black text-[#c5a47e] uppercase tracking-widest">
                  <span>Visa</span> • <span>MasterCard</span> • <span>Apple Pay</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- مراجعات العميلات (Muse Reviews) --- */}
      <section className="py-40 bg-[#fffcf9] overflow-hidden border-y border-[#f3e5e9]">
        <SectionHeading sub="Voices of Our Muses" title="ملهماتنا يتحدثن" />
        <div className="flex gap-12 px-8 animate-infinite-scroll">
          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((rev, idx) => (
            <div key={idx} className="min-w-[350px] md:min-w-[550px] bg-white p-16 rounded-[4rem] shadow-sm border border-[#f3e5e9] hover:shadow-xl transition-all duration-700">
               <div className="flex text-[#c5a47e] gap-2 mb-10 text-xl">
                 {[...Array(rev.stars)].map((_, s) => <span key={s}>★</span>)}
               </div>
               <p className="text-xl md:text-2xl font-light text-[#4a4a4a] leading-relaxed italic mb-12" dir="rtl">"{rev.text}"</p>
               <div className="flex items-center justify-between border-t border-neutral-50 pt-10">
                  <div className="text-right" dir="rtl">
                    <p className="text-[12px] font-bold text-[#2d2d2d] uppercase tracking-widest">{rev.user}</p>
                    <p className="text-[10px] text-[#b5838d] uppercase tracking-widest mt-1">{rev.city}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#fdfaf6] flex items-center justify-center text-[#c5a47e] font-serif text-xl border border-[#f3e5e9]">E</div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- قسم الانضمام (The Elite Circle Form) --- */}
      <section className="py-60 bg-[#1a1a1a] text-white relative">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-20 relative z-10">
          <div className="space-y-8">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.7em] text-[#c5a47e]">Join Our Elite Inner Circle</h4>
            <h3 className="text-5xl md:text-8xl font-serif italic leading-tight">كوني أول <br/> من يعلم</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto pt-10">
            <div className="space-y-4 text-right" dir="rtl">
              <label className="text-[11px] uppercase font-bold text-[#c5a47e] tracking-[0.3em]">الاسم بالكامل</label>
              <input 
                type="text" 
                placeholder="اكتبي اسمكِ الجميل" 
                className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-[#c5a47e] transition-all text-lg placeholder:text-white/20" 
              />
            </div>
            <div className="space-y-4 text-right" dir="rtl">
              <label className="text-[11px] uppercase font-bold text-[#c5a47e] tracking-[0.3em]">رقم الهاتف</label>
              <div className="flex gap-4">
                <input 
                  type="tel" 
                  placeholder="770 000 0000" 
                  className="flex-1 bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-[#c5a47e] transition-all text-lg text-left placeholder:text-white/20" 
                />
                <select 
                  className="bg-transparent border-b border-white/20 py-5 text-[11px] font-bold outline-none cursor-pointer"
                  value={country.code}
                  onChange={(e) => setCountry(COUNTRY_DIAL_CODES.find(c => c.code === e.target.value) || COUNTRY_DIAL_CODES[0])}
                >
                  {COUNTRY_DIAL_CODES.map(c => <option key={c.code} value={c.code} className="text-black">{c.flag} {c.code}</option>)}
                </select>
              </div>
            </div>
            <div className="md:col-span-2 pt-10">
              <button className="bg-white text-black px-24 py-7 text-[11px] font-bold uppercase tracking-[0.5em] rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-700 shadow-2xl">
                تأكيد الانضمام للنخبة
              </button>
            </div>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
            By joining, you agree to receive exclusive invitations and early access news. <br/> Your privacy is our highest priority.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none" />
      </section>

      {/* --- تذييل الصفحة (The Grand Finale) --- */}
      <footer className="pt-48 pb-16 px-8 md:px-16 bg-white border-t border-neutral-100">
        <div className="max-w-[1700px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            
            <div className="space-y-12">
              <h5 className="text-4xl font-extralight tracking-[0.6em] text-[#2d2d2d]">ELITE</h5>
              <p className="text-[11px] text-neutral-500 leading-[2.8] uppercase tracking-[0.2em]" dir="rtl">
                نحن لا نبيع الملابس، نحن نصنع ذكريات تدوم. دار إيليت هي الحلم العراقي الذي أصبح واقعاً يلبس الحرير والجمال.
              </p>
              <div className="flex gap-10">
                {['INSTAGRAM', 'TIKTOK', 'PINTEREST'].map(s => (
                  <a key={s} href="#" className="text-[10px] font-black border-b border-black/10 pb-1 hover:border-[#c5a47e] transition-all tracking-widest">{s}</a>
                ))}
              </div>
            </div>

            <div className="space-y-10 text-right md:text-left">
              <h6 className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#c5a47e]">قوائم النخبة</h6>
              <ul className="space-y-5 text-[11px] font-medium text-neutral-600">
                {['وصلنا حديثاً', 'المجموعات الحصرية', 'حقائب المساء', 'منتجات العناية'].map(item => (
                  <li key={item} className="hover:text-black cursor-pointer transition-colors tracking-normal">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 text-right md:text-left">
              <h6 className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#c5a47e]">الدعم الفني</h6>
              <ul className="space-y-5 text-[11px] font-medium text-neutral-600">
                {['تتبع طلبكِ', 'سياسة التبديل', 'الشحن الدولي', 'الأسئلة المتكررة'].map(item => (
                  <li key={item} className="hover:text-black cursor-pointer transition-colors tracking-normal">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 text-right md:text-left" dir="rtl">
              <h6 className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#c5a47e]">العنوان</h6>
              <div className="space-y-6">
                <p className="text-[11px] text-neutral-500 leading-relaxed uppercase tracking-widest">بغداد، حي المنصور <br/> شارع الأميرات، مجمع النخبة</p>
                <div className="h-[1px] w-12 bg-[#c5a47e]/40" />
                <p className="text-[11px] text-neutral-500 font-bold tracking-widest">concierge@eliteboutique.com</p>
                <p className="text-[11px] text-neutral-500 tracking-widest">+964 770 000 0000</p>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-300">© 2026 ELITE HOUSE OF LUXURY. ALL RIGHTS RESERVED. DESIGNED IN BAGHDAD.</p>
            <div className="flex gap-12 text-[10px] uppercase tracking-widest text-neutral-400">
               <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- أنظمة الحركة العالمية (Global CSS Animations) --- */}
      <style jsx global>{`
        @keyframes scroll-indicator { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-scroll-indicator { animation: scroll-indicator 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 50s linear infinite; }

        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 35s ease-in-out infinite alternate; }

        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1.8s ease-out forwards; }

        @keyframes reveal-text { 0% { opacity: 0; transform: scale(0.95) translateY(40px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-reveal-text { animation: reveal-text 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes float { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-20px) rotate(1deg); } }
        .animate-float { animation: float 8s ease-in-out infinite; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
}
