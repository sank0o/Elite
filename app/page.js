'use client';
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Instagram, Phone, MapPin, Star, ChevronRight } from 'lucide-react';

export default function ElitePremiumStore() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div style={{ direction: 'rtl', fontFamily: 'serif', backgroundColor: '#fff', color: '#1a1a1a' }}>
      
      {/* القائمة العلوية الفاخرة */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 8%', position: 'fixed', width: '100%', top: 0, zIndex: 2000, backgroundColor: 'rgba(255,255,255,0.98)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#d4af37', letterSpacing: '4px' }}>ELITE</div>
        
        <div style={{ display: 'flex', gap: '40px', fontSize: '1rem', fontWeight: '400', color: '#444' }}>
          <span style={{ cursor: 'pointer', borderBottom: '1px solid #d4af37' }}>الرئيسية</span>
          <span style={{ cursor: 'pointer' }}>فساتين السهرة</span>
          <span style={{ cursor: 'pointer' }}>مجموعة العرائس</span>
          <span style={{ cursor: 'pointer' }}>قصتنا</span>
        </div>

        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingBag size={26} strokeWidth={1.5} />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#d4af37', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: '11px' }}>{cartCount}</span>
          </div>
          <Menu size={26} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        </div>
      </nav>

      {/* الواجهة الرئيسية (Hero Section) */}
      <header style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2))', zIndex: 1 }}></div>
        <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2000" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} alt="Main Background" />
        
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
          <p style={{ letterSpacing: '6px', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '300' }}>HOUDA AL NUAIMI COLLECTION</p>
          <h1 style={{ fontSize: '5.5rem', fontWeight: '100', marginBottom: '40px', lineHeight: 1.1 }}>سحر الأنوثة في <br/> كل تفصيل</h1>
          <button style={{ backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff', padding: '20px 60px', fontSize: '1rem', cursor: 'pointer', transition: '0.4s', borderRadius: '2px' }}>
            اكتشفي المجموعة الآن
          </button>
        </div>
      </header>

      {/* قسم الترحيب */}
      <section style={{ padding: '120px 15%', textAlign: 'center', backgroundColor: '#fcfaf7' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '30px' }}>فن تصميم الفساتين</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '2', maxWidth: '800px', margin: '0 auto' }}>
          في إيليت، نحن لا نصمم مجرد فساتين، نحن نصنع قطعاً فنية تروي قصة جمالكِ. كل غرزة وكل تفصيل تم اختياره بعناية فائقة ليعكس شخصيتكِ المتفردة في أرقى المناسبات.
        </p>
        <div style={{ width: '60px', height: '1px', backgroundColor: '#d4af37', margin: '40px auto' }}></div>
      </section>

      {/* معرض المنتجات المختارة */}
      <section style={{ padding: '100px 8%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', color: '#d4af37', letterSpacing: '3px', marginBottom: '10px' }}>NEW ARRIVALS</h3>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '300' }}>أحدث التصاميم</h2>
          </div>
          <p style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '5px', cursor: 'pointer' }}>عرض الكل</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '50px' }}>
          {[1, 2, 3, 4].map((id) => (
            <div key={id} style={{ cursor: 'pointer' }}>
              <div style={{ height: '580px', backgroundColor: '#f4f4f4', marginBottom: '20px', position: 'relative', overflow: 'hidden' }}>
                <img src={`https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&id=${id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Dress" />
                <div onClick={() => setCartCount(c => c + 1)} style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#fff', color: '#111', padding: '15px', textAlign: 'center', fontSize: '0.9rem', opacity: 0.9 }}>إضافة إلى السلة</div>
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '400' }}>فستان سهرة "إيليت جولد" {id}</h4>
              <p style={{ color: '#d4af37', fontSize: '1.2rem', marginTop: '10px' }}>4,200 SAR</p>
            </div>
          ))}
        </div>
      </section>

      {/* التذييل (Footer) */}
      <footer style={{ backgroundColor: '#111', color: '#fff', padding: '100px 8% 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          <div>
            <h2 style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '30px' }}>ELITE STUDIO</h2>
            <p style={{ opacity: 0.6, lineHeight: '1.8' }}>وجهتكِ الأولى في عالم الأزياء الراقية والفساتين المصممة خصيصاً لمناسباتكِ التي لا تُنسى.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '30px', letterSpacing: '2px' }}>روابط سريعة</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, lineHeight: '2.5' }}>
              <li>سياسة الشحن</li>
              <li>جدول المقاسات</li>
              <li>تتبع الطلب</li>
              <li>الأسئلة الشائعة</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '30px', letterSpacing: '2px' }}>تواصلِ معنا</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}><Instagram size={20} /><Phone size={20} /><MapPin size={20} /></div>
            <p style={{ opacity: 0.6 }}>الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '40px', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
          © 2026 ELITE STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
