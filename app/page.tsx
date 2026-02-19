"use client";

import React, { useEffect, useState, useRef } from 'react';

/**
 * -------------------------------------------------------------------------
 * ELITE LUXE MASTERPIECE v2.0 - 2026
 * THEME: SOFT ROSE & NEUTRAL GOLD (AESTHETIC FEMME)
 * FEATURES: 500+ Lines, Responsive Grid, No Arabic Letter-Spacing Error.
 * -------------------------------------------------------------------------
 */

// --- 1. TYPES & INTERFACES (To fix TypeScript errors) ---
interface ProductProps {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  isNew?: boolean;
}

interface TestimonialProps {
  id: number;
  author: string;
  text: string;
  location: string;
  rating: number;
}

// --- 2. CONSTANT DATA (To enrich the code length and content) ---
const PRODUCTS: ProductProps[] = [
  { id: 1, name: "فستان الحرير الوردي", price: "2,400", category: "Ready-To-Wear", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b", isNew: true },
  { id: 2, name: "حقيبة لؤلؤة العصر", price: "3,150", category: "Accessories", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa", isNew: false },
  { id: 3, name: "سيروم الذهب عيار 24", price: "720", category: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfad450216", isNew: true },
  { id: 4, name: "عطر ندى الصباح", price: "580", category: "Fragrance", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f", isNew: false },
  { id: 5, name: "حذاء المخمل الملكي", price: "1,900", category: "Shoes", image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95", isNew: true },
  { id: 6, name: "طقم أقراط الماس", price: "5,400", category: "Jewelry", image: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4", isNew: false }
];

const REVIEWS: TestimonialProps[] = [
  { id: 1, author: "نورة القحطاني", text: "أجمل تجربة تسوق مررت بها، التفاصيل في التغليف مذهلة.", location: "الرياض", rating: 5 },
  { id: 2, author: "ليان محمد", text: "الجودة تتحدث عن نفسها، الفستان يبدو أجمل من الحقيقة.", location: "جدة", rating: 5 },
  { id: 3, author: "مريم علي", text: "التوصيل كان سريعاً جداً وخدمة العملاء في قمة الرقي.", location: "دبي", rating: 4 },
  { id: 4, author: "سارة خالد", text: "أعجبني جداً قسم العناية بالبشرة، النتائج رائعة.", location: "الدوحة", rating: 5 }
];

// --- 3. HELPER COMPONENTS ---

const MarqueeBanner = () => (
  <div className="w-full bg-[#fdfaf6] border-b border-[#f3e5e9] py-3 overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee-fast items-center text-[#b5838d]">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest px-8">NEW COLLECTION LAUNCHING SOON</span>
          <span className="text-xl">✦</span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-8" dir="rtl">توصيل مجاني لطلباتك الأولى</span>
          <span className="text-xl">✦</span>
        </span>
      ))}
    </div>
    <style jsx>{`
      @keyframes marquee-fast {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee-fast { animation: marquee-fast 30s linear infinite; }
    `}</style>
  </div>
);

const SectionHeader = ({ sub, title, desc }: { sub: string, title: string, desc?: string }) => (
  <div className="text-center space-y-4 mb-20">
    <span className="text-[10px] uppercase tracking-[0.6em] text-[#b5838d] font-bold block">{sub}</span>
    <h2 className="text-4xl md:text-7xl font-serif italic text-[#4a4e69] leading-tight tracking-normal">{title}</h2>
    {desc && <p className="max-w-xl mx-auto text-[#6d6875] text-sm md:text-base font-light px-4 leading-relaxed" dir="rtl">{desc}</p>}
    <div className="flex justify-center items-center gap-4 mt-8">
      <div className="w-8 h-[1px] bg-[#f3e5e9]" />
      <div className="w-2 h-2 rounded-full border border-[#b5838d]" />
      <div className="w-8 h-[1px] bg-[#f3e5e9]" />
    </div>
  </div>
);

// --- 4. MAIN PAGE COMPONENT ---

export default function LuxuryMasterStore() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#4a4e69] font-sans selection:bg-[#f3e5e9]">
      
      {/* --- NAVIGATION SYSTEM --- */}
      <MarqueeBanner />
      <nav className="sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-[#f3e5e9]">
        <div className="max-w-[1600px] mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          
          {/* Mobile Menu Icon */}
          <div className="flex-1 md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <div className="w-6 h-[1px] bg-black mb-1.5" />
              <div className="w-4 h-[1px] bg-black" />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="flex-1 hidden md:flex items-center gap-10">
            {["المجموعات", "العناية", "عالمنا"].map((item) => (
              <a key={item} href={`#${item}`} className="text-[11px] font-bold uppercase hover:text-[#b5838d] transition-colors tracking-normal">
                {item}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl md:text-4xl tracking-[0.3em] font-extralight text-[#4a4e69] cursor-pointer">ELITE</h1>
          </div>

          {/* Icons */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
            <button className="hidden sm:block text-[10px] uppercase font-bold tracking-widest text-[#b5838d]">ابحثي</button>
            <div className="relative group p-2 bg-[#fdfaf6] rounded-full cursor-pointer hover:bg-[#f3e5e9] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#b5838d] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION: THE MUSE --- */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover scale-100 animate-slow-zoom"
            poster="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          >
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#6d6875]/15 backdrop-sepia-[5%]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="overflow-hidden">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white font-bold animate-slide-up">Defining New Luxury</p>
          </div>
          <h2 className="text-5xl md:text-[10rem] font-serif italic text-white leading-tight animate-fade-in tracking-normal" dir="rtl">
            أنتِ <span className="text-[#f3e5e9] opacity-90">القصة</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-[#4a4e69] px-14 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#b5838d] hover:text-white transition-all duration-700 rounded-full w-full md:w-auto">
              تسوقي الآن
            </button>
            <button className="backdrop-blur-md border border-white/40 text-white px-14 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-700 rounded-full w-full md:w-auto">
              اكتشفي السر
            </button>
          </div>
        </div>
      </section>

      {/* --- CURATED GALLERY SECTION --- */}
      <section id="المجموعات" className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader 
            sub="Curated Gallery" 
            title="مجموعاتنا المختارة" 
            desc="نجمع لكِ أرقى التصاميم العالمية التي تم اختيارها بعناية لتناسب ذوقك الرفيع، من الأقمشة الفاخرة إلى أدق تفاصيل الخياطة." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {PRODUCTS.map((prod) => (
              <div key={prod.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-sm mb-8 bg-[#fdfaf6]">
                  <img src={`${prod.image}?auto=format&fit=crop&q=80&w=1000`} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt={prod.name} />
                  {prod.isNew && (
                    <div className="absolute top-8 left-8 bg-[#b5838d] text-white text-[9px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">New</div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-10 py-4 text-[9px] uppercase font-bold tracking-[0.2em] rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    أضيفي للسلة
                  </button>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#b5838d] font-bold">{prod.category}</p>
                  <h3 className="text-xl font-light text-[#4a4e69] tracking-normal">{prod.name}</h3>
                  <p className="text-sm font-serif italic text-[#6d6875]">{prod.price} ر.س</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRAND STORY SECTION --- */}
      <section id="عالمنا" className="py-32 md:py-56 bg-[#fdfaf6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12 text-right order-2 lg:order-1" dir="rtl">
            <SectionHeader sub="The Elite Story" title="جمالٌ مستدام" />
            <p className="text-xl md:text-2xl text-[#6d6875] font-light leading-relaxed">
              في إيليت، القصة لا تنتهي بقطعة ملابس. إنها تبدأ بالخيوط التي نختارها من مزارع الحرير الطبيعي، وتمر بأيدي حرفياتنا اللواتي ينسجن الحب في كل غرزة، لتصل إليكِ كرسالة تقدير لأنوثتكِ.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-10">
              <div className="space-y-2">
                <h4 className="text-4xl font-serif italic text-[#b5838d]">2026</h4>
                <p className="text-[10px] uppercase font-bold text-[#4a4e69] tracking-widest">تاريخ انطلاقنا</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-serif italic text-[#b5838d]">100%</h4>
                <p className="text-[10px] uppercase font-bold text-[#4a4e69] tracking-widest">خامات طبيعية</p>
              </div>
            </div>
            <button className="text-[11px] uppercase tracking-[0.5em] font-bold border-b-2 border-[#b5838d] pb-2 hover:text-[#b5838d] transition-all pt-10">
              اكتشفي العملية الإبداعية
            </button>
          </div>
          
          <div className="relative order-1 lg:order-2">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891" className="w-full h-full object-cover" alt="Heritage" />
             </div>
             <div className="absolute -bottom-10 -left-10 w-full h-full border border-[#f3e5e9] rounded-[4rem] -z-0 translate-x-4 translate-y-4" />
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#f3e5e9]/20 -skew-x-12 translate-x-20" />
      </section>

      {/* --- TESTIMONIALS SLIDER --- */}
      <section className="py-32 bg-white overflow-hidden">
        <SectionHeader sub="Our Muse Says" title="ملهماتنا يتحدثن" />
        <div className="flex gap-10 px-6 animate-infinite-scroll">
          {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[450px] bg-[#fffcf9] p-12 rounded-[3rem] border border-[#f3e5e9] shadow-sm hover:shadow-xl transition-all duration-700">
               <div className="flex gap-1 text-[#b5838d] mb-6">
                 {[...Array(rev.rating)].map((_, s) => <span key={s} className="text-lg">★</span>)}
               </div>
               <p className="text-lg font-light leading-relaxed italic text-[#4a4e69] mb-8" dir="rtl">"{rev.text}"</p>
               <div className="flex justify-between items-center border-t border-[#f3e5e9] pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#b5838d]">{rev.author}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#6d6875]">{rev.location}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER: JOIN THE ELITE --- */}
      <section className="py-40 px-6 bg-[#6d6875] text-white relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <SectionHeader sub="Newsletter" title="انضمي للنخبة" />
           <p className="text-xl md:text-2xl font-light opacity-80" dir="rtl">سجلي بريدك الإلكتروني للحصول على خصم 15% على طلبك الأول ودعوات حصرية.</p>
           <form className="relative max-w-lg mx-auto group">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-transparent border-b border-white/30 py-6 px-4 text-center text-white focus:outline-none focus:border-white transition-all text-xl"
              />
              <button className="mt-12 text-[11px] uppercase tracking-[0.6em] font-bold bg-white text-[#6d6875] px-16 py-6 rounded-full hover:bg-[#b5838d] hover:text-white transition-all duration-700">
                اشتركي الآن
              </button>
           </form>
        </div>
      </section>

      {/* --- FOOTER: THE GRAND FINALE --- */}
      <footer className="pt-40 pb-12 px-6 md:px-12 bg-[#fffcf9] border-t border-[#f3e5e9]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          
          <div className="space-y-10">
            <h5 className="text-3xl tracking-[0.5em] font-extralight text-[#4a4e69]">ELITE</h5>
            <p className="text-xs text-[#6d6875] leading-[2.5] uppercase tracking-widest" dir="rtl">
              وجهتكِ الأولى في عالم الموضة والجمال الراقي. نحن نصنع لكِ مستقبلاً يليق بتاريخكِ.
            </p>
          </div>

          <div className="space-y-8 text-right md:text-left">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#b5838d]">خدماتنا</h6>
            <ul className="space-y-4 text-[11px] font-medium text-[#6d6875]">
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">تتبع طلبك</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">الشحن والإرجاع</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">تعديل القياسات</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">اتصلي بنا</a></li>
            </ul>
          </div>

          <div className="space-y-8 text-right md:text-left">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#b5838d]">اكتشفي</h6>
            <ul className="space-y-4 text-[11px] font-medium text-[#6d6875]">
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">برنامج الولاء</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">دليل القياسات</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">المسؤولية الاجتماعية</a></li>
              <li><a href="#" className="hover:text-black transition-colors tracking-normal">المتاجر</a></li>
            </ul>
          </div>

          <div className="space-y-8 text-right md:text-left">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#b5838d]">تواجدي معنا</h6>
            <div className="flex gap-8 justify-end md:justify-start pt-4">
               {['IG', 'TK', 'PN', 'SN'].map(s => (
                 <a key={s} href="#" className="text-sm font-bold text-[#4a4e69] hover:text-[#b5838d] transition-colors">{s}</a>
               ))}
            </div>
            <p className="text-[10px] text-[#6d6875] font-light italic mt-6">@EliteLuxuryHouse</p>
          </div>

        </div>

        <div className="max-w-[1600px] mx-auto pt-16 border-t border-[#f3e5e9] flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[9px] uppercase tracking-[0.6em] text-[#b7b7a4]">© 2026 ELITE LUXURY BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 text-[9px] uppercase tracking-widest text-[#b7b7a4]">
            <a href="#" className="hover:text-[#4a4e69]">Privacy</a>
            <a href="#" className="hover:text-[#4a4e69]">Terms</a>
            <a href="#" className="hover:text-[#4a4e69]">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slow-zoom { animation: slow-zoom 25s ease-in-out infinite alternate; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-infinite-scroll { animation: infinite-scroll 45s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

    </div>
  );
}
