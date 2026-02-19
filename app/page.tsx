"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE SUPREME VERSION (FULLY FUNCTIONAL)
 * ---------------------------------------------------------------------------------------
 * [STRICT DIRECTIVE]: 
 * - KEEP ORIGINAL UI STRUCTURE (TABBED SIDEBAR IN JOIN SECTION).
 * - INTEGRATE REAL CART SYSTEM.
 * - INTEGRATE WHATSAPP CHECKOUT.
 * - KEEP IQD CURRENCY & ALL DESIGN ELEMENTS.
 * ---------------------------------------------------------------------------------------
 */

// --- 1. البيانات (Master Data) ---

const WHATSAPP_NUMBER = "9647738185679"; // رقمك هنا

const CURRENCY_CONFIG = [
  { code: 'IQD', label: 'د.ع', rate: 1, name: 'دينار عراقي' },
  { code: 'USD', label: '$', rate: 0.00076, name: 'دولار أمريكي' },
];

const MASTER_PRODUCTS = [
  { id: 1, name: "فستان السهرة الحريري", basePrice: 425000, cat: "dresses", tag: "حصري", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b" },
  { id: 2, name: "حقيبة الكرواسون الجلدية", basePrice: 285000, cat: "bags", tag: "الأكثر مبيعاً", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa" },
  { id: 3, name: "سيروم الذهب الملكي", basePrice: 89000, cat: "skincare", tag: "جديد", img: "https://images.unsplash.com/photo-1596462502278-27bfad450216" },
  { id: 4, name: "عطر الياسمين والمسك", basePrice: 125000, cat: "skincare", tag: "إصدار محدود", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 5, name: "حذاء الكريستال الشفاف", basePrice: 145000, cat: "shoes", tag: "نخبة", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95" },
  { id: 6, name: "عقد اللؤلؤ الطبيعي", basePrice: 590000, cat: "jewelry", tag: "حصري", img: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4" },
  { id: 7, name: "جاكيت الصوف الإيطالي", basePrice: 310000, cat: "dresses", tag: "شتاء 2026", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543" },
  { id: 8, name: "نظارات شمسية كلاسيك", basePrice: 115000, cat: "accessories", tag: "أساسي", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { id: 9, name: "حقيبة المساء المخملية", basePrice: 210000, cat: "bags", tag: "سهرة", img: "https://images.unsplash.com/photo-1566150905458-1bf1fd113f0d" },
];

// --- 2. المكونات المساعدة ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#1a1a1a] text-[#f4f1ea] py-2.5 overflow-hidden border-b border-white/5 z-[200] relative">
    <div className="flex whitespace-nowrap animate-marquee items-center justify-around">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-10 px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">الدفع عند الاستلام متاح داخل العراق</span>
          <span className="text-[#c5a47e] text-lg">✦</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]" dir="rtl">شحن ملكي لجميع المحافظات</span>
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

// --- 3. المكون الرئيسي ---

export default function EliteSupremeFinal() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [currency, setCurrency] = useState(CURRENCY_CONFIG[0]);
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('join');
  
  // بيانات الزبونة
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setLoading(false), 2000);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // منطق السلة
  const addToCart = (product: any) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.basePrice, 0), [cart]);

  // إرسال الطلب (WhatsApp Logic)
  const handleFinalOrder = () => {
    if (!customerName || !customerPhone || cart.length === 0) {
      alert("جميلتي، يرجى التأكد من ملء بياناتكِ وإضافة قطع للسلة أولاً.");
      return;
    }

    const orderList = cart.map(p => `- ${p.name} (${p.basePrice.toLocaleString()} د.ع)`).join('%0A');
    const msg = `*طلب جديد - دار إيليت*%0A%0A` +
                `*الاسم:* ${customerName}%0A` +
                `*الهاتف:* ${customerPhone}%0A%0A` +
                `*الطلبات:*%0A${orderList}%0A%0A` +
                `*المجموع:* ${cartTotal.toLocaleString()} دينار عراقي%0A%0A` +
                `يرجى التواصل معي لتأكيد التوصيل.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extralight tracking-[0.5em] text-[#4a4e69] animate-pulse">ELITE</h1>
        <div className="mt-8 w-24 h-[1px] bg-[#c5a47e]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d] font-sans selection:bg-[#f3e5e9]">
      <AnnouncementBar />

      {/* سلة التسوق الجانبية */}
      <div className={`fixed inset-y-0 right-0 z-[500] w-full md:w-[480px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-1000 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-12">
          <div className="flex justify-between items-center mb-16">
            <button onClick={() => setIsCartOpen(false)} className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#c5a47e] transition-colors">إغلاق ×</button>
            <h2 className="text-3xl font-serif italic text-right">حقيبتكِ المختارة</h2>
          </div>
          <div className="flex-1 overflow-y-auto space-y-10 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center opacity-30 italic">
                <p>الحقيبة فارغة حالياً..</p>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex gap-8 items-center border-b border-neutral-50 pb-8 group">
                  <div className="w-24 h-32 rounded-2xl overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 text-right" dir="rtl">
                    <h4 className="text-sm font-bold tracking-normal">{item.name}</h4>
                    <p className="text-xs text-[#c5a47e] mt-2 font-serif">{(item.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                    <button onClick={() => removeFromCart(idx)} className="mt-4 text-[9px] uppercase tracking-widest text-red-300 hover:text-red-600 transition-colors">إزالة القطعة</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="pt-10 border-t border-neutral-100 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-serif italic">{(cartTotal * currency.rate).toLocaleString()} {currency.label}</span>
                <span className="text-[10px] font-black uppercase tracking-widest">المجموع الكلي</span>
              </div>
              <button onClick={() => { setIsCartOpen(false); window.location.hash = "#order"; }} className="w-full bg-[#1a1a1a] text-white py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#c5a47e] transition-all">إتمام الطلب</button>
            </div>
          )}
        </div>
      </div>

      {/* الملاحة (Navigation) */}
      <nav className={`fixed w-full z-[400] transition-all duration-1000 ${scrolled ? 'bg-white/90 backdrop-blur-2xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1700px] mx-auto px-10 md:px-20 flex justify-between items-center">
          <div className="flex-1 flex items-center gap-8">
            <select className="bg-transparent text-[10px] font-black outline-none cursor-pointer" onChange={(e) => setCurrency(CURRENCY_CONFIG.find(c => c.code === e.target.value) || CURRENCY_CONFIG[0])}>
              {CURRENCY_CONFIG.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
            </select>
            <div className="relative group cursor-pointer p-2" onClick={() => setIsCartOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#c5a47e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cart.length}</span>
            </div>
          </div>
          <div className="flex-1 text-center font-extralight tracking-[0.7em] text-3xl md:text-5xl">ELITE</div>
          <div className="flex-1 hidden lg:flex justify-end gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <a href="#new" className="hover:text-[#c5a47e] transition-colors">وصلنا حديثاً</a>
            <a href="#order" className="hover:text-[#c5a47e] transition-colors">الطلب</a>
            <a href="#story" className="hover:text-[#c5a47e] transition-colors">قصتنا</a>
          </div>
        </div>
      </nav>

      {/* قسم الهيرو (Hero) */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom">
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 text-center px-6 max-w-6xl space-y-12">
          <p className="text-white text-[10px] uppercase tracking-[1em] font-black opacity-70">Luxury House of Baghdad</p>
          <h2 className="text-7xl md:text-[12rem] font-serif italic text-white leading-[0.9] tracking-normal" dir="rtl">تألقي <br/> <span className="text-[#f3e5e9]">بروح النخبة</span></h2>
          <div className="pt-10">
            <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-white text-black px-20 py-7 text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-700 shadow-2xl">استكشفي المجموعة</button>
          </div>
        </div>
      </header>

      {/* شبكة المنتجات (The Grid) */}
      <section id="new" className="py-60 px-10 md:px-20 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-40 space-y-6">
            <span className="text-[#c5a47e] font-black text-[12px] uppercase tracking-[0.6em]">Curated Pieces</span>
            <h3 className="text-6xl md:text-8xl font-serif italic text-neutral-800">مختاراتنا لكِ</h3>
            <div className="w-20 h-[1px] bg-[#f3e5e9] mx-auto mt-10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-40">
            {MASTER_PRODUCTS.map(product => (
              <div key={product.id} className="group flex flex-col space-y-10">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[4rem] bg-[#fdfaf6] cursor-pointer">
                  <img src={product.img} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt="" />
                  <div className="absolute top-10 left-10">
                    <span className="bg-white/95 text-[#c5a47e] text-[9px] font-black px-6 py-3 rounded-full uppercase tracking-widest shadow-sm">{product.tag}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-1000" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-white text-black py-6 text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 shadow-2xl"
                    >
                      أضيفي للحقيبة +
                    </button>
                  </div>
                </div>
                <div className="text-center space-y-3 px-6">
                  <h4 className="text-2xl font-light tracking-tight">{product.name}</h4>
                  <p className="text-[#c5a47e] font-serif italic text-lg font-bold">{(product.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الطلب (The RESTORED Tabbed Sidebar Interface) */}
      <section id="order" className="py-60 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-10">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-[12px] font-black uppercase tracking-[0.8em] text-[#c5a47e]">The Royal Concierge</h4>
            <h3 className="text-6xl md:text-8xl font-serif italic leading-none">إتمام الطلب الملكي</h3>
          </div>

          {/* واجهة الشريط الجانبي المستعادة كلياً */}
          <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[5rem] border border-white/10 flex flex-col md:flex-row min-h-[650px] overflow-hidden shadow-2xl">
            
            {/* الشريط الجانبي (The Tabs) */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-l border-white/10 p-12 flex md:flex-col justify-around md:justify-start gap-16 relative">
              <button 
                onClick={() => setActiveTab('join')}
                className={`text-[11px] font-black uppercase tracking-[0.5em] transition-all text-right group flex items-center justify-end gap-4 ${activeTab === 'join' ? 'text-[#c5a47e]' : 'text-white/20 hover:text-white/50'}`}
              >
                01. معلومات التواصل
                <div className={`w-2 h-2 rounded-full border border-[#c5a47e] ${activeTab === 'join' ? 'bg-[#c5a47e]' : 'transparent'}`} />
              </button>
              <button 
                onClick={() => setActiveTab('cart')}
                className={`text-[11px] font-black uppercase tracking-[0.5em] transition-all text-right group flex items-center justify-end gap-4 ${activeTab === 'cart' ? 'text-[#c5a47e]' : 'text-white/20 hover:text-white/50'}`}
              >
                02. مراجعة السلة ({cart.length})
                <div className={`w-2 h-2 rounded-full border border-[#c5a47e] ${activeTab === 'cart' ? 'bg-[#c5a47e]' : 'transparent'}`} />
              </button>
              <button 
                onClick={() => setActiveTab('policy')}
                className={`text-[11px] font-black uppercase tracking-[0.5em] transition-all text-right group flex items-center justify-end gap-4 ${activeTab === 'policy' ? 'text-[#c5a47e]' : 'text-white/20 hover:text-white/50'}`}
              >
                03. سياسة التوصيل
                <div className={`w-2 h-2 rounded-full border border-[#c5a47e] ${activeTab === 'policy' ? 'bg-[#c5a47e]' : 'transparent'}`} />
              </button>
            </div>

            {/* محتوى الحقول (Form Content) */}
            <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
              {activeTab === 'join' && (
                <div className="space-y-12 animate-fade-in text-right" dir="rtl">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.3em]">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="جميلتي، ما هو اسمكِ؟" 
                      className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] transition-all text-xl font-light placeholder:text-white/5" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.3em]">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="0770 000 0000" 
                      className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] transition-all text-xl font-light text-left placeholder:text-white/5" 
                    />
                  </div>
                  <div className="pt-10">
                    <button onClick={() => setActiveTab('cart')} className="w-full bg-white text-black py-7 rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#c5a47e] hover:text-white transition-all duration-700">المرحلة التالية</button>
                  </div>
                </div>
              )}

              {activeTab === 'cart' && (
                <div className="space-y-10 animate-fade-in text-right" dir="rtl">
                  <div className="max-h-60 overflow-y-auto space-y-6 no-scrollbar">
                    {cart.length === 0 ? (
                      <p className="italic text-white/20 py-10">يرجى إضافة قطع للسلة أولاً..</p>
                    ) : (
                      cart.map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                          <span className="text-[#c5a47e]">{item.basePrice.toLocaleString()} د.ع</span>
                          <span className="font-light">{item.name}</span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="pt-8 flex justify-between items-center border-t border-white/10">
                    <span className="text-3xl font-serif italic text-[#c5a47e]">{cartTotal.toLocaleString()} د.ع</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">المجموع الكلي</span>
                  </div>
                  <button 
                    onClick={handleFinalOrder}
                    className="w-full bg-[#25D366] text-white py-7 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-[0_20px_40px_rgba(37,211,102,0.2)]"
                  >
                    تأكيد الطلب عبر واتساب
                  </button>
                </div>
              )}

              {activeTab === 'policy' && (
                <div className="space-y-8 animate-fade-in text-right text-sm text-white/50 leading-loose" dir="rtl">
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a47e]" />
                      <p>التوصيل متاح لكافة محافظات العراق (2-4 أيام).</p>
                   </div>
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a47e]" />
                      <p>الدفع عند الاستلام هو الخيار الأساسي والآمن.</p>
                   </div>
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a47e]" />
                      <p>يمكنكِ فحص القطعة عند وصول المندوب.</p>
                   </div>
                   <p className="pt-10 italic text-xs uppercase tracking-widest">In Luxury, We Trust.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* تذييل الصفحة (Footer) */}
      <footer className="py-20 bg-white border-t border-neutral-50 text-center">
        <h5 className="text-3xl font-extralight tracking-[0.8em] mb-10">ELITE</h5>
        <div className="flex justify-center gap-10 mb-10 text-[10px] font-black uppercase tracking-widest text-neutral-400">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
        </div>
        <p className="text-[9px] text-neutral-300 uppercase tracking-[0.5em]">© 2026 Elite House of Baghdad. All Rights Reserved.</p>
      </footer>

      <style jsx global>{`
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(15px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite alternate; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        body { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
