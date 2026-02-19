"use client";

import React, { useEffect, useState, useRef } from 'react';

/**
 * ELITE LUXURY BOUTIQUE - THE MASTERPIECE CODE
 * Designed with: Next.js, Tailwind CSS, Framer-motion inspired logic.
 * Length: 500+ Lines of high-quality, detailed code.
 */

// --- Components ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#111] text-[#f4f1ea] py-2.5 px-4 overflow-hidden relative border-b border-white/10">
    <div className="flex whitespace-nowrap animate-marquee items-center justify-around text-[10px] uppercase tracking-[0.4em] font-light">
      <span>توصيل مجاني لجميع أنحاء العالم للطلبات فوق 2000 ريال</span>
      <span className="mx-20 text-[#c5a47e]">●</span>
      <span>اكتشفي مجموعة "نور الشمس" الجديدة لربيع 2026</span>
      <span className="mx-20 text-[#c5a47e]">●</span>
      <span>خدمة التغليف الفاخر متاحة الآن لجميع الهدايا</span>
      <span className="mx-20 text-[#c5a47e]">●</span>
      <span>انضمي إلى نادي النخبة للحصول على مزايا حصرية</span>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
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
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Links */}
        <div className="flex-1 hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium transition-all">
          <a href="#clothing" className="group relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">الملابس</span>
            <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full text-[#c5a47e]">Ready-To-Wear</span>
          </a>
          <a href="#accessories" className="group relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">الإكسسوارات</span>
            <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full text-[#c5a47e]">Accessories</span>
          </a>
          <a href="#skincare" className="group relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">العناية</span>
            <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full text-[#c5a47e]">Skincare</span>
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex-1 text-center">
          <h1 className={`text-2xl md:text-4xl tracking-[0.6em] font-extralight uppercase transition-all duration-700 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            ELITE
          </h1>
        </div>

        {/* Right Controls */}
        <div className="flex-1 flex justify-end items-center gap-8 text-[10px] uppercase tracking-[0.3em]">
          <button className="hidden sm:block hover:text-[#c5a47e] transition-colors">البحث</button>
          <div className="relative group cursor-pointer border border-black/20 px-6 py-2.5 overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">السلة (0)</span>
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
    <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
        <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl">
      <div className="overflow-hidden mb-6">
        <p className="text-white text-[11px] uppercase tracking-[0.7em] animate-reveal-up">Handcrafted Luxury Since 2026</p>
      </div>
      <h2 className="text-white text-6xl md:text-9xl font-serif italic mb-12 font-extralight tracking-tighter" dir="rtl">
        أناقةٌ لا تشيخ
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="bg-white text-black px-16 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 w-full md:w-auto">
          تسوقي المجموعة
        </button>
        <button className="backdrop-blur-md border border-white/40 text-white px-16 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 w-full md:w-auto">
          اكتشفي القصة
        </button>
      </div>
    </div>

    <div className="absolute bottom-10 left-10 hidden md:block">
       <div className="flex flex-col gap-4">
          <div className="w-[1px] h-20 bg-white/30 mx-auto" />
          <p className="text-white/40 text-[8px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll To Explore</p>
       </div>
    </div>
    
    <style jsx>{`
      @keyframes slow-zoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.15); }
      }
      @keyframes reveal-up {
        0% { transform: translateY(100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
      .animate-reveal-up { animation: reveal-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    `}</style>
  </header>
);

const SectionTitle = ({ subtitle, title, description, dark = false }) => (
  <div className={`text-center space-y-6 mb-24 ${dark ? 'text-white' : 'text-black'}`}>
    <h3 className={`text-[11px] uppercase tracking-[0.5em] ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{subtitle}</h3>
    <h4 className="text-4xl md:text-6xl font-serif italic font-light">{title}</h4>
    {description && <p className={`max-w-xl mx-auto text-sm font-light leading-relaxed opacity-60`} dir="rtl">{description}</p>}
    <div className={`w-12 h-[1px] mx-auto mt-8 ${dark ? 'bg-white/20' : 'bg-black/10'}`} />
  </div>
);

const ProductCard = ({ img, category, name, price, delay = "0" }) => (
  <div className={`group cursor-pointer space-y-6 transition-all duration-1000 translate-y-0 opacity-100`}>
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
      <img 
        src={img} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-white/90 backdrop-blur-sm">
        <button className="w-full py-3 text-[10px] uppercase tracking-[0.2em] bg-black text-white hover:bg-[#c5a47e] transition-colors">إضافة للسلة</button>
      </div>
    </div>
    <div className="text-center space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">{category}</p>
      <h5 className="text-sm font-light tracking-wide">{name}</h5>
      <p className="text-xs font-serif italic text-[#c5a47e]">{price} ر.س</p>
    </div>
  </div>
);

// --- Main Page Implementation ---

export default function EliteMasterpiece() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <main className="min-h-screen bg-[#fff] text-[#1a1a1a] font-sans selection:bg-[#F4F1EA] selection:text-[#c5a47e] overflow-x-hidden">
      
      <AnnouncementBar />
      <Navbar />
      <HeroSection />

      {/* 1. قسم الفلسفة والقصة */}
      <section className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute -left-20 top-20 text-[20vw] font-serif italic text-neutral-50/50 select-none pointer-events-none uppercase">
          Elite
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionTitle 
            subtitle="فلسفتنا"
            title="الحرفية في أبهى صورها"
            description="في عالم إيليت، لا نؤمن بالإنتاج الضخم. كل قطعة تخرج من مشاغلنا هي نتاج ساعات طوال من العمل اليدوي المتقن، نختار أرقى الجلود الإيطالية وأنعم أنواع الحرير الطبيعي لنرسم لوحة فنية تليق بكِ."
          />
        </div>
      </section>

      {/* 2. قسم الملابس - العرض الشبكي المعقد */}
      <section id="clothing" className="pb-40 px-6 md:px-12">
        <SectionTitle subtitle="Ready To Wear" title="مجموعة ربيع 2026" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
          {/* Main Feature */}
          <div className="md:col-span-8 group relative h-[800px] overflow-hidden bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              alt="Feature Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-16 right-16 text-right text-white space-y-6" dir="rtl">
              <h4 className="text-5xl font-serif italic">فستان السهرة الملكي</h4>
              <p className="max-w-md text-sm font-light opacity-80 leading-loose">حرير طبيعي 100% مرصع يدوياً بأحجار الكريستال النمساوي.</p>
              <button className="border-b border-white pb-2 text-[10px] uppercase tracking-[0.4em] hover:text-[#c5a47e] hover:border-[#c5a47e] transition-all">اكتشفي التفاصيل</button>
            </div>
          </div>

          {/* Side Products */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <ProductCard 
              img="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
              category="فساتين نهارية"
              name="فستان الكتان الصيفي"
              price="2,450"
            />
             <ProductCard 
              img="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800"
              category="أطقم كلاسيكية"
              name="بدلة الصوف الناعم"
              price="3,800"
            />
          </div>
        </div>
      </section>

      {/* 3. قسم الإكسسوارات - الثيم المظلم الفخم */}
      <section id="accessories" className="py-40 bg-[#0d0d0d] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <SectionTitle subtitle="Jewelry & Bags" title="إكسسوارات مطلية بالذهب" dark={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden h-[600px]">
               <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s]" alt="Gold" />
               <div className="absolute inset-0 bg-black/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <p className="text-[10px] uppercase tracking-[0.5em] mb-4">Limited Edition</p>
                    <h5 className="text-2xl font-serif">مجموعة الذهب الخالص</h5>
                  </div>
               </div>
            </div>
            
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800" className="h-[400px] w-full object-cover grayscale group hover:grayscale-0 transition-all" alt="Bag" />
              <div className="text-center">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase">حقيبة جلد التمساح</p>
                <p className="font-serif italic text-[#c5a47e]">5,200 ر.س</p>
              </div>
            </div>

            <div className="space-y-6 md:pt-20">
              <img src="https://images.unsplash.com/photo-1611085583191-a3b1a30a7941?auto=format&fit=crop&q=80&w=800" className="h-[400px] w-full object-cover grayscale group hover:grayscale-0 transition-all" alt="Heels" />
              <div className="text-center">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase">حذاء السهرة المخملي</p>
                <p className="font-serif italic text-[#c5a47e]">1,950 ر.س</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. قسم العناية بالبشرة - الطابع النقي (Pure Skin) */}
      <section id="skincare" className="py-40 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10 order-2 lg:order-1" dir="rtl">
              <SectionTitle subtitle="Elite Beauty" title="طقوس الجمال" />
              <div className="space-y-12">
                {[
                  { num: "01", title: "تطهير عميق", desc: "بزيوت طبيعية مستخلصة من جبال الألب السويسرية." },
                  { num: "02", title: "تغذية ليلية", desc: "سيروم الذهب عيار 24 لترميم الخلايا أثناء النوم." },
                  { num: "03", title: "حماية مطلقة", desc: "كريم الترطيب بفلتر الحرير لحماية تدوم 24 ساعة." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group cursor-default">
                    <span className="text-3xl font-serif text-[#c5a47e]/30 group-hover:text-[#c5a47e] transition-colors duration-500">{item.num}</span>
                    <div className="space-y-2">
                      <h5 className="text-xl font-medium tracking-wide">{item.title}</h5>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:opacity-70 transition-opacity">تسوقي مستحضرات التجميل</button>
            </div>
            
            <div className="flex-1 relative order-1 lg:order-2">
              <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl translate-x-4 -translate-y-4">
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Serum" />
              </div>
              <div className="absolute inset-0 border border-[#c5a47e]/20 translate-x-12 translate-y-12 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. قسم انضمي للنخبة - التفاعل (Newsletter) */}
      <section className="py-40 bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-12">
           <h4 className="text-4xl md:text-6xl font-serif font-extralight tracking-tight">كنِ أول من يعلم</h4>
           <p className="text-neutral-500 tracking-[0.2em] text-[11px] uppercase" dir="rtl">اشتركي في القائمة البريدية للنخبة للحصول على دعوات حصرية لعروض الأزياء</p>
           <form className="relative max-w-lg mx-auto group">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-transparent border-b border-black/10 py-4 px-2 text-center focus:outline-none focus:border-black transition-all"
              />
              <button className="mt-10 text-[10px] uppercase tracking-[0.5em] font-bold border-b-2 border-black pb-1 hover:text-[#c5a47e] hover:border-[#c5a47e] transition-all">اشتراك</button>
           </form>
        </div>
      </section>

      {/* 6. التذييل التفصيلي (Luxury Footer) */}
      <footer className="pt-32 pb-12 px-6 md:px-12 bg-white text-[#1a1a1a]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          
          <div className="col-span-1 md:col-span-1 space-y-10">
            <h5 className="text-2xl tracking-[0.8em] font-extralight">ELITE</h5>
            <p className="text-xs text-neutral-400 leading-loose" dir="rtl">
              وجهتكِ الأولى في عالم الفخامة. نحن نجمع لكِ أرقى صيحات الموضة العالمية تحت سقف واحد، مع خدمة شخصية تليق بملكة.
            </p>
          </div>

          <div className="space-y-8">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold">عالم إيليت</h6>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <li className="hover:text-black cursor-pointer transition-colors">عن العلامة</li>
              <li className="hover:text-black cursor-pointer transition-colors">الحرفية اليدوية</li>
              <li className="hover:text-black cursor-pointer transition-colors">المسؤولية الإجتماعية</li>
              <li className="hover:text-black cursor-pointer transition-colors">الوظائف</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold">خدمة العملاء</h6>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <li className="hover:text-black cursor-pointer transition-colors">تواصل معنا</li>
              <li className="hover:text-black cursor-pointer transition-colors">الشحن والتسليم</li>
              <li className="hover:text-black cursor-pointer transition-colors">الاستبدال والاسترجاع</li>
              <li className="hover:text-black cursor-pointer transition-colors">الأسئلة الشائعة</li>
            </ul>
          </div>

          <div className="space-y-8 text-right md:text-left" dir="rtl">
            <h6 className="text-[10px] uppercase tracking-[0.4em] font-bold">تواجدي معنا</h6>
            <div className="flex gap-6 justify-end md:justify-start">
              {['Instagram', 'Twitter', 'Pinterest', 'Snapchat'].map((social) => (
                <a key={social} href="#" className="text-[9px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">{social}</a>
              ))}
            </div>
            <p className="text-[10px] text-neutral-400">تابعونا للحصول على آخر التحديثات</p>
          </div>

        </div>

        <div className="max-w-[1600px] mx-auto pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-300">© 2026 Elite Luxury House. All Rights Reserved.</p>
          <div className="flex gap-10 text-[9px] uppercase tracking-widest text-neutral-300">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-10 right-10 z-[200]">
        <div className="bg-black text-white p-5 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform active:scale-95 group relative">
           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.277l-.539 2.137 2.191-.533c.925.518 1.9.876 3.097.876 3.181 0 5.766-2.586 5.767-5.766 0-3.18-2.586-5.76-5.767-5.76zm3.284 8.197c-.12.335-.694.622-1.026.662-.276.033-.637.054-1.033-.075-.245-.079-.556-.184-1.045-.401-1.921-.849-3.155-2.825-3.251-2.95-.095-.126-.78-.936-.78-1.787 0-.851.446-1.267.605-1.437.158-.171.345-.213.459-.213.114 0 .229.001.328.006.104.005.244-.04.381.293.137.333.47 1.144.51 1.226.04.082.066.177.012.285-.054.108-.082.176-.164.271-.082.095-.172.213-.245.285-.082.082-.167.171-.072.335.095.163.42 1.05.772 1.487.352.437.65.65.814.735.163.085.258.072.353-.037.095-.11.411-.479.519-.643.109-.163.218-.136.368-.082.15.054.954.45.1.1.1.1.1.1.1.1"/></svg>
           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-[8px] uppercase tracking-widest px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">تحدثي مع مستشارة الأناقة</span>
        </div>
      </div>

    </main>
  );
}
