"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from "next-sanity"; // مكتبة الربط مع لوحة التحكم

/**
 * ---------------------------------------------------------------------------------------
 * ELITE LUXURY BOUTIQUE - THE LIVE CONNECTED VERSION (SANITY.IO READY)
 * ---------------------------------------------------------------------------------------
 * [IMPORTANT]: 
 * 1. استبدلي 'YOUR_PROJECT_ID' بالرقم الذي سيعطيكِ إياه موقع Sanity.
 * 2. الكود سيجلب المنتجات التي ترفعينها أنتِ يدوياً من الموبايل.
 * ---------------------------------------------------------------------------------------
 */

// إعدادات الربط مع لوحة التحكم (Sanity)
const client = createClient({
  projectId: "YOUR_PROJECT_ID", // ← ضعي معرف مشروعك هنا
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const WHATSAPP_NUMBER = "9647700000000"; // رقمك لاستلام الطلبات

const CURRENCY_CONFIG = [
  { code: 'IQD', label: 'د.ع', rate: 1 },
  { code: 'USD', label: '$', rate: 0.00076 },
];

const PHONE_KEYS = [
  { code: '+964', country: 'العراق', flag: '🇮🇶' },
  { code: '+966', country: 'السعودية', flag: '🇸🇦' },
];

export default function EliteLiveStore() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [products, setProducts] = useState<any[]>([]); // المنتجات التي ستأتي من لوحة التحكم
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('join');
  const [currency, setCurrency] = useState(CURRENCY_CONFIG[0]);
  
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedKey, setSelectedKey] = useState(PHONE_KEYS[0]);

  // وظيفة جلب المنتجات الحقيقية من لوحة التحكم
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
        console.error("خطأ في جلب المنتجات: تأكدي من Project ID", error);
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

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.basePrice, 0), [cart]);

  const checkoutViaWhatsApp = () => {
    if (!fullName || !phoneNumber || cart.length === 0) {
      alert("جميلتي، يرجى ملء البيانات وإضافة قطع للسلة.");
      return;
    }
    const orderList = cart.map(p => `- ${p.name} (${(p.basePrice * currency.rate).toLocaleString()} ${currency.label})`).join('%0A');
    const msg = `*طلب جديد - دار إيليت*%0A%0A*الاسم:* ${fullName}%0A*الهاتف:* ${selectedKey.code}${phoneNumber}%0A%0A*الطلبات:*%0A${orderList}%0A%0A*المجموع:* ${(cartTotal * currency.rate).toLocaleString()} ${currency.label}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  if (loading) return (
    <div className="h-screen w-full bg-white flex items-center justify-center font-serif tracking-[1em] text-neutral-400 animate-pulse">ELITE</div>
  );

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d] selection:bg-[#f3e5e9]">
      
      {/* سلة التسوق (Drawer) */}
      <div className={`fixed inset-y-0 right-0 z-[600] w-full md:w-[500px] bg-white shadow-2xl transition-transform duration-[1s] cubic-bezier(0.16, 1, 0.3, 1) ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-12">
          <div className="flex justify-between items-center mb-16">
            <button onClick={() => setIsCartOpen(false)} className="text-[10px] font-black uppercase tracking-widest">إغلاق ×</button>
            <h2 className="text-3xl font-serif italic text-right">حقيبة التسوق</h2>
          </div>
          <div className="flex-1 overflow-y-auto space-y-10 no-scrollbar">
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-8 items-center border-b border-neutral-50 pb-8">
                <img src={item.img} className="w-24 h-32 object-cover rounded-3xl" alt="" />
                <div className="flex-1 text-right" dir="rtl">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-xs text-[#c5a47e] mt-2 italic">{(item.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                </div>
                <button onClick={() => removeFromCart(idx)} className="text-red-200 hover:text-red-500">×</button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="pt-10 border-t border-neutral-100 space-y-6">
              <div className="flex justify-between items-center font-bold">
                <span className="text-2xl font-serif">{(cartTotal * currency.rate).toLocaleString()} {currency.label}</span>
                <span className="text-[10px] uppercase tracking-widest">المجموع الكلي</span>
              </div>
              <button onClick={() => { setIsCartOpen(false); window.location.hash = "#order"; }} className="w-full bg-[#111] text-white py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">إتمام الطلب الملكي</button>
            </div>
          )}
        </div>
      </div>

      {/* الملاحة (Navigation) */}
      <nav className={`fixed w-full z-[500] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-3xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1700px] mx-auto px-10 flex justify-between items-center">
          <div className="flex-1 flex gap-8 items-center">
            <select className="bg-transparent text-[10px] font-black outline-none" onChange={(e) => setCurrency(CURRENCY_CONFIG.find(c => c.code === e.target.value) || CURRENCY_CONFIG[0])}>
              {CURRENCY_CONFIG.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
            </select>
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" /></svg>
              <span className="absolute -top-1 -right-1 bg-[#c5a47e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cart.length}</span>
            </div>
          </div>
          <div className="flex-1 text-center font-extralight tracking-[0.6em] text-3xl md:text-5xl">ELITE</div>
          <div className="flex-1 hidden lg:flex justify-end gap-10 text-[10px] font-black uppercase tracking-widest">
            <a href="#shop">المتجر</a>
            <a href="#order">الطلب</a>
          </div>
        </div>
      </nav>

      {/* الهيرو (Hero) */}
      <header className="h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <video autoPlay loop muted className="w-full h-full object-cover animate-slow-zoom">
             <source src="https://cdn.pixabay.com/video/2021/04/12/70876-537447781_large.mp4" type="video/mp4" />
           </video>
        </div>
        <div className="relative z-10 text-center space-y-10 px-6">
          <p className="text-white text-[11px] uppercase tracking-[1em] font-black opacity-60">Baghdad House of Luxury</p>
          <h2 className="text-7xl md:text-[12rem] font-serif italic text-white leading-none" dir="rtl">تألقي <br/> <span className="text-[#f3e5e9]">بالنخبة</span></h2>
          <button onClick={() => window.scrollTo(0, window.innerHeight)} className="bg-white text-black px-16 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#c5a47e] hover:text-white transition-all duration-1000">استكشفي المجموعة</button>
        </div>
      </header>

      {/* عرض المنتجات الحقيقية (The Live Grid) */}
      <section id="shop" className="py-60 px-10 md:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-40">
            {products.length === 0 ? (
              <p className="col-span-full text-center text-neutral-300 italic">بانتظار رفع أول منتج من لوحة التحكم..</p>
            ) : (
              products.map(prod => (
                <div key={prod._id} className="group space-y-10">
                  <div className="relative aspect-[3.5/5] overflow-hidden rounded-[4rem] bg-[#fdfaf6] cursor-pointer">
                    <img src={prod.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="" />
                    <div className="absolute top-10 right-10 underline text-[10px] font-bold text-white bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">{prod.tag}</div>
                    <button onClick={() => addToCart(prod)} className="absolute bottom-10 left-10 right-10 bg-white text-black py-6 rounded-full text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">أضيفي للحقيبة +</button>
                  </div>
                  <div className="text-center space-y-3">
                    <h4 className="text-2xl font-light tracking-tight">{prod.name}</h4>
                    <p className="text-[#c5a47e] font-serif italic text-lg font-bold">{(prod.basePrice * currency.rate).toLocaleString()} {currency.label}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* قسم إتمام الطلب (Original Tabbed Sidebar) */}
      <section id="order" className="py-60 bg-[#0f0f0f] text-white">
        <div className="max-w-5xl mx-auto px-10">
          <div className="bg-white/[0.02] backdrop-blur-3xl rounded-[5rem] border border-white/10 flex flex-col md:flex-row min-h-[700px] overflow-hidden">
            {/* الشريط الجانبي الأصلي */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-l border-white/10 p-16 flex md:flex-col justify-around md:justify-start gap-16">
              {[
                { id: 'join', label: '01. معلوماتكِ' },
                { id: 'cart', label: '02. السلة' },
                { id: 'info', label: '03. التوصيل' }
              ].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-[11px] font-black uppercase tracking-[0.5em] text-right flex items-center justify-end gap-6 ${activeTab === tab.id ? 'text-[#c5a47e]' : 'text-white/20'}`}>
                  {tab.label}
                  <div className={`w-2 h-2 rounded-full border border-[#c5a47e] ${activeTab === tab.id ? 'bg-[#c5a47e]' : ''}`} />
                </button>
              ))}
            </div>

            <div className="flex-1 p-20 flex flex-col justify-center text-right" dir="rtl">
              {activeTab === 'join' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.4em]">الاسم</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="اسمكِ الكريم" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] text-2xl" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#c5a47e] tracking-[0.4em]">رقم الهاتف</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="0770 000 0000" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#c5a47e] text-2xl text-left" />
                  </div>
                  <button onClick={() => setActiveTab('cart')} className="w-full bg-white text-black py-7 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">التالي</button>
                </div>
              )}
              {activeTab === 'cart' && (
                <div className="space-y-10 animate-fade-in">
                  <div className="max-h-60 overflow-y-auto space-y-6 no-scrollbar">
                    {cart.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                        <span className="text-[#c5a47e]">{item.basePrice.toLocaleString()} د.ع</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 flex justify-between items-center text-2xl font-serif text-[#c5a47e]">
                    <span>{cartTotal.toLocaleString()} د.ع</span>
                    <span className="text-[10px] text-white">المجموع</span>
                  </div>
                  <button onClick={checkoutViaWhatsApp} className="w-full bg-[#25D366] text-white py-7 rounded-full text-[10px] font-black uppercase tracking-[0.5em]">تأكيد الطلب واتساب</button>
                </div>
              )}
              {activeTab === 'info' && (
                <div className="space-y-10 animate-fade-in text-white/50 leading-loose">
                   <p>• التوصيل داخل بغداد خلال 24 ساعة.</p>
                   <p>• المحافظات من 2-4 أيام عمل.</p>
                   <p>• الدفع نقداً عند استلام القطعة الملكية.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-neutral-50">
        <h5 className="text-3xl font-extralight tracking-[0.8em] mb-8">ELITE</h5>
        <p className="text-[9px] text-neutral-300 uppercase tracking-[0.5em]">© 2026 Elite House of Baghdad</p>
      </footer>

      <style jsx global>{`
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(15px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
