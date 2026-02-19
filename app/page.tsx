"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
// استيراد أداة الربط مع لوحة التحكم (Sanity)
import { createClient } from "next-sanity";

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE SUPREME IMPERIAL LIVE VERSION (FINAL RECLAMATION)
 * ---------------------------------------------------------------------------------------
 * هذا الكود يجمع بين:
 * 1. التصميم الإمبراطوري الطويل جداً (بكل الحركات والتفاصيل).
 * 2. الربط المباشر مع لوحة تحكم Sanity لإضافة المنتجات من الموبايل.
 * 3. نظام السلة المتطور وإتمام الطلب عبر واتساب.
 * ---------------------------------------------------------------------------------------
 */

// --- 1. إعدادات الاتصال (Config) ---

const client = createClient({
  projectId: "xtficjyf", // ← ضعي هنا معرف مشروعك من Sanity لتظهر صوركِ
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const WHATSAPP_NUMBER = "9647738185679"; // رقمكِ لاستلام الطلبات

const CURRENCY_DATABASE = [
  { code: 'IQD', label: 'د.ع', rate: 1, name: 'دينار عراقي' },
  { code: 'USD', label: '$', rate: 0.00076, name: 'دولار أمريكي' },
];

const PHONE_KEYS = [
  { code: '+964', country: 'العراق', flag: '🇮🇶' },
  { code: '+966', country: 'السعودية', flag: '🇸🇦' },
];

// --- 2. المكونات الجمالية (UI Components) ---

const AnnouncementBar = () => (
  <div className="w-full bg-[#111] text-[#f4f1ea] py-3 overflow-hidden border-b border-white/5 relative z-[300]">
    <div className="flex whitespace-nowrap animate-marquee items-center">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-12 px-10">
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">الدفع عند الاستلام داخل العراق</span>
          <span className="text-[#c5a47e] text-xl">✦</span>
          <span className="text-[9px] font-black uppercase tracking-[0.4em]" dir="rtl">شحن دولي فاخر لجميع الوجهات</span>
          <span className="text-[#c5a47e] text-xl">✦</span>
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-marquee { animation: marquee 40s linear infinite; }
    `}</style>
  </div>
);

// --- 3. المكون الرئيسي (Main Store) ---

export default function EliteSupremeLiveStore() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [products, setProducts] = useState<any[]>([]); // المنتجات من لوحة التحكم
  const [currency, setCurrency] = useState(CURRENCY_DATABASE[0]);
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('join');
  
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedKey, setSelectedKey] = useState(PHONE_KEYS[0]);

  // جلب البيانات من Sanity عند فتح الموقع
  useEffect(() => {
    const fetchLiveProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]{
          _id,
          name,
          basePrice,
          "img": image.asset->url,
          tag,
          category
        }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching from Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveProducts();
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: any) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const totalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.basePrice, 0), [cart]);

  const checkoutViaWhatsApp = () => {
    if (!fullName || !phoneNumber || cart.length === 0) {
      alert("يرجى ملء البيانات وإضافة منتجات للسلة.");
      return;
    }
    const cartDetails = cart.map(item => `- ${item.name} (${(item.basePrice * currency.rate).toLocaleString()} ${currency.label})`).join('%0A');
    const finalMessage = `*طلب جديد - دار إيليت*%0A%0A*الاسم:* ${fullName}%0A*الهاتف:* ${selectedKey.code} ${phoneNumber}%0A%0A*القطع:*%0A${cartDetails}%0A%0A*المجموع:* ${(totalPrice * currency.rate).toLocaleString()} ${currency.label}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`, '_blank');
  };

  if (loading) return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extralight tracking-[0.6em] text-[#2d2d2d] animate-pulse uppercase">Elite</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d] font-sans selection:bg-[#f3e5e9] overflow-x-hidden">
      <AnnouncementBar />

      {/* حقيبة التسوق الجانبية */}
      <div className={`fixed inset-y-0 right-0 z-[600] w-full md:w-[550px] bg-white shadow-2xl transition-transform duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-12 md:p-20">
          <div className="flex justify-between items-center mb-20">
            <button onClick={() => setIsCartOpen(false)} className="text-[10px] font-black uppercase tracking-widest hover:text-[#c5a47e]">إغلاق ×</button>
            <h2 className="text-4xl font-serif italic text-right">الحقيبة الفاخرة</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-12 no-scrollbar">
            {products.length === 0 && <p className="text-center opacity-20">بانتظار منتجاتكِ الحقيقية من Sanity...</p>}
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start border-b border-neutral-50 pb-10" dir="rtl">
                <img src={item.img} className="w-28 h-36 bg-neutral-100 rounded-[2rem] object-cover" alt="" />
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-sm text-[#c5a47e] mt-2 font-serif">{(item.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                  <button onClick={() => removeFromCart(idx)} className="mt-6 text-[8px] font-black uppercase tracking-widest text-red-300">إزالة ×</button>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="pt-12 border-t border-neutral-100 space-y-10">
              <div className="flex justify-between items-end">
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-neutral-400 mb-2">المجموع التقديري</p>
                  <p className="text-4xl font-serif italic">{(totalPrice * currency.rate).toLocaleString()} {currency.label}</p>
                </div>
              </div>
              <button onClick={() => { setIsCartOpen(false); window.location.hash = "#imperial-order"; }} className="w-full bg-[#111] text-white py-7 rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#c5a47e] transition-all">إتمام عملية الشراء</button>
            </div>
          )}
        </div>
      </div>

      {/* الملاحة الإمبراطورية */}
      <nav className={`fixed w-full z-[500] transition-all duration-[1s] ${scrolled ? 'bg-white/90 backdrop-blur-3xl py-4 shadow-sm' : 'bg-transparent py-12'}`}>
        <div className="max-w-[1800px] mx-auto px-10 md:px-20 flex justify-between items-center">
          <div className="flex-1 flex items-center gap-10">
            <select className="bg-transparent text-[10px] font-black border-none outline-none text-[#c5a47e]" onChange={(e) => setCurrency(CURRENCY_DATABASE.find(c => c.code === e.target.value) || CURRENCY_DATABASE[0])}>
              {CURRENCY_DATABASE.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
            </select>
            <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" /></svg>
              {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-[#c5a47e] text-white text-[8px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{cart.length}</span>}
            </div>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.6em] cursor-pointer" onClick={() => window.scrollTo(0,0)}>ELITE</h1>
          </div>

          <div className="flex-1 hidden lg:flex justify-end gap-14 items-center">
             {['المجموعات', 'المجلة', 'المتجر'].map(link => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#c5a47e] transition-all">{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* الهيرو (Hero) */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom">
            <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 text-center px-6 max-w-7xl space-y-12">
          <p className="text-white text-[11px] uppercase tracking-[1.2em] font-black opacity-80 animate-slide-up">Maison De Luxe Baghdad</p>
          <h2 className="text-7xl md:text-[13rem] font-serif italic text-white leading-none tracking-tight animate-fade-in" dir="rtl">
            جوهر <br/> <span className="text-[#f3e5e9] drop-shadow-2xl">الأناقة</span>
          </h2>
          <div className="pt-16 flex justify-center items-center">
            <button onClick={() => document.getElementById('collection')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-black px-20 py-7 text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-[#c5a47e] hover:text-white transition-all duration-1000 shadow-2xl">تسوقي الآن</button>
          </div>
        </div>
      </header>

      {/* شبكة المنتجات (Live Grid) */}
      <section id="collection" className="py-60 px-10 md:px-24 bg-white relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-10">
            <div className="space-y-6 text-right md:text-left">
              <h3 className="text-[12px] text-[#c5a47e] font-black uppercase tracking-[0.5em]">Selected Masterpieces</h3>
              <h4 className="text-6xl md:text-8xl font-serif italic text-[#1a1a1a]">أحدث التصاميم</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-40">
            {products.map(prod => (
              <div key={prod._id} className="group flex flex-col space-y-10 relative">
                <div className="relative aspect-[3.5/5] overflow-hidden rounded-[4rem] bg-[#f9f9f9] cursor-pointer shadow-sm">
                  <img src={prod.img} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt={prod.name} />
                  <div className="absolute top-10 right-10 underline text-[10px] font-bold text-white bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">{prod.tag}</div>
                  <div className="absolute bottom-12 left-10 right-10">
                    <button onClick={() => addToCart(prod)} className="w-full bg-white text-black py-6 text-[10px] font-black uppercase tracking-[0.4em] rounded-full translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl">إضافة للحقيبة +</button>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-light tracking-tight text-[#1a1a1a]">{prod.name}</h4>
                  <p className="text-xl font-serif italic text-[#c5a47e] font-bold">{(prod.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الطلب (The RESTORED Original Tabbed Sidebar Interface) */}
      <section id="imperial-order" className="py-60 bg-[#0f0f0f] text-white relative">
        <div className="max-w-6xl mx-auto px-10 relative z-10">
          <div className="text-center space-y-8 mb-32">
            <h4 className="text-[12px] font-black uppercase tracking-[0.8em] text-[#c5a47e]">The Royal Concierge Service</h4>
            <h3 className="text-6xl md:text-9xl font-serif italic leading-none">تأكيد الطلب</h3>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-3xl rounded-[5rem] border border-white/10 flex flex-col md:flex-row min-h-[750px] overflow-hidden">
            {/* الشريط الجانبي (Tabs) */}
            <div className="w-full md:w-[320px] border-b md:border-b-0 md:border-l border-white/10 p-16 flex md:flex-col justify-around md:justify-start gap-16">
              {[
                { id: 'join', label: '01. بيانات التواصل' },
                { id: 'review', label: '02. مراجعة الطلبات' },
                { id: 'info', label: '03. دليل التوصيل' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[11px] font-black uppercase tracking-[0.5em] text-right flex items-center justify-end gap-6 transition-all duration-500 ${activeTab === tab.id ? 'text-[#c5a47e]' : 'text-white/20'}`}
                >
                  <span className="hidden md:inline">{tab.label}</span>
                  <div className={`w-2.5 h-2.5 rounded-full border border-[#c5a47e] ${activeTab === tab.id ? 'bg-[#c5a47e] scale-125' : ''}`} />
                </button>
              ))}
            </div>

            {/* محتوى التبويبات */}
            <div className="flex-1 p-16 md:p-24 flex flex-col justify-center text-right" dir="rtl">
              {activeTab === 'join' && (
                <div className="space-y-16 animate-fade-in">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.4em]">الاسم الكامل</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="اسمكِ الكريم" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] text-2xl" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.4em]">رقم الهاتف</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="0770 000 0000" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] text-2xl text-left" />
                  </div>
                  <button onClick={() => setActiveTab('review')} className="w-full bg-white text-black py-8 rounded-full text-[11px] font-black uppercase tracking-widest">المرحلة التالية</button>
                </div>
              )}
              
              {activeTab === 'review' && (
                <div className="space-y-10 animate-fade-in">
                  <div className="max-h-60 overflow-y-auto space-y-6 no-scrollbar border-r border-white/5 pr-4">
                    {cart.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xl font-light">
                        <span className="text-[#c5a47e]">{(item.basePrice * currency.rate).toLocaleString()} {currency.label}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-10 flex justify-between items-center text-4xl font-serif text-[#c5a47e]">
                    <span>{(totalPrice * currency.rate).toLocaleString()} {currency.label}</span>
                    <span className="text-[11px] text-white uppercase tracking-widest">المجموع الكلي</span>
                  </div>
                  <button onClick={checkoutViaWhatsApp} className="w-full bg-[#25D366] text-white py-8 rounded-full text-[11px] font-black uppercase tracking-widest">تأكيد وحجز عبر واتساب</button>
                </div>
              )}

              {activeTab === 'info' && (
                <div className="space-y-8 animate-fade-in text-white/50 leading-loose">
                  <p>✦ التوصيل داخل بغداد خلال 24 ساعة.</p>
                  <p>✦ المحافظات العراقية خلال 2-4 أيام عمل.</p>
                  <p>✦ الشحن الدولي متاح عبر DHL Express.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-neutral-50 opacity-20 text-[10px] font-black uppercase tracking-[0.8em]">
        © 2026 ELITE HOUSE. CREATED FOR ROYALTY.
      </footer>

      <style jsx global>{`
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 40s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
