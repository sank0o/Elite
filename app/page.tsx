export default function EliteWomenStore() {
  return (
    <main className="min-h-screen bg-[#FCFAf8] text-[#1a1a1a] font-sans">
      {/* شريط التنقل العلوي */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="text-sm tracking-[0.4em] font-bold">ELITE WOMEN</div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
          <a href="#clothing" className="hover:text-gray-400 transition-colors">الملابس</a>
          <a href="#accessories" className="hover:text-gray-400 transition-colors">الإكسسوارات</a>
          <a href="#skincare" className="hover:text-gray-400 transition-colors">العناية بالبشرة</a>
        </div>
        <div className="text-[11px] tracking-widest cursor-pointer border border-black px-4 py-1 hover:bg-black hover:text-white transition-all">السلة (0)</div>
      </nav>

      {/* القسم الرئيسي - فيديو بدلاً من الصورة */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* هذا هو الجزء الخاص بالفيديو */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-white-outfit-34483-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* طبقة تظليل خفيفة لتوضيح النص */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="text-center z-10 px-4">
          <h2 className="text-[10px] uppercase tracking-[0.6em] mb-4 text-white drop-shadow-md">مجموعة ربيع وصيف 2026</h2>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 text-white drop-shadow-lg">جمالكِ يبدأ من هنا</h1>
          <button className="bg-white text-black px-14 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 border border-white">تسوقي الآن</button>
        </div>
      </header>

      {/* باقي الأقسام (ملابس، إكسسوارات، سكين كير) تبقى كما هي بتصميمها الفخم */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-36">
        {/* قسم الملابس */}
        <div id="clothing" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] relative group overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Clothing" />
          </div>
          <div className="text-right space-y-6" dir="rtl">
            <h3 className="text-[12px] text-gray-400 tracking-[0.3em] uppercase">التصاميم الراقية</h3>
            <h4 className="text-4xl md:text-5xl font-serif italic">أزياء النخبة</h4>
            <p className="text-gray-500 font-light leading-relaxed text-lg">كل قطعة مختارة بعناية لتناسب ذوقك الرفيع.</p>
            <button className="text-[11px] border-b-2 border-black pb-2 tracking-[0.2em] uppercase transition-all">استعراض المجموعة</button>
          </div>
        </div>

        {/* قسم السكين كير */}
        <div id="skincare" className="text-center space-y-16">
          <h3 className="text-5xl font-serif italic">العناية بالبشرة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600" className="aspect-square object-cover shadow-md" alt="Skin1" />
            <img src="https://images.unsplash.com/photo-1594125350485-c0dd3cd39522?auto=format&fit=crop&q=80&w=600" className="aspect-square object-cover shadow-md" alt="Skin2" />
            <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600" className="aspect-square object-cover shadow-md" alt="Skin3" />
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-gray-100 text-center bg-white">
        <div className="text-xs tracking-[0.5em] font-bold">ELITE WOMEN</div>
        <p className="text-[10px] tracking-[0.4em] text-gray-400 mt-4 uppercase">© 2026 جميع الحقوق محفوظة لمتجر إيليت</p>
      </footer>
    </main>
  );
}
