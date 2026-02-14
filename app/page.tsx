export default function LuxuryStore() {
  return (
    <main className="min-h-screen bg-[#FCFAf8] text-[#1a1a1a] font-sans">
      {/* Header / Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="text-xs tracking-[0.3em] font-bold">ELITE WOMEN</div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest">
          <a href="#clothing">الملابس</a>
          <a href="#accessories">الإكسسوارات</a>
          <a href="#skincare">العناية بالبشرة</a>
        </div>
        <div className="text-[10px] tracking-widest cursor-pointer">السلة (0)</div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center bg-[#f3efeb] overflow-hidden">
        <div className="text-center z-10 px-4">
          <h2 className="text-[10px] uppercase tracking-[0.6em] mb-4 text-gray-500">مجموعة ربيع 2026</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">جمالكِ يبدأ من هنا</h1>
          <button className="border border-black px-12 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500">تسوقي الآن</button>
        </div>
      </header>

      {/* Categories Sections */}
      <section className="max-w-7xl mx-auto py-20 px-4 space-y-32">
        
        {/* Section: Clothing */}
        <div id="clothing" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] bg-gray-200 relative group overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">Clothing Image</div>
          </div>
          <div className="text-right space-y-6" dir="rtl">
            <h3 className="text-3xl font-serif italic">الأزياء الراقية</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">تصاميم تجمع بين الراحة والأناقة لتناسب يومكِ المزدحم برقيّ.</p>
            <button className="text-[10px] border-b border-black pb-1 tracking-widest uppercase hover:text-gray-400 transition-colors">استعراض المجموعة</button>
          </div>
        </div>

        {/* Section: Accessories */}
        <div id="accessories" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-serif italic">الإكسسوارات</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">لمسات نهائية تضفي سحراً خاصاً على مظهركِ، من المجوهرات إلى الحقائب.</p>
            <button className="text-[10px] border-b border-black pb-1 tracking-widest uppercase hover:text-gray-400">تسوقي الإكسسوارات</button>
          </div>
          <div className="aspect-[3/4] bg-[#e9e9e9] order-1 md:order-2 flex items-center justify-center text-gray-400 italic">Accessories Image</div>
        </div>

        {/* Section: Skincare */}
        <div id="skincare" className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-serif italic">العناية بالبشرة</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase">السر في النضارة الطبيعية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 italic">Serum</div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 italic">Cream</div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 italic">Oils</div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 text-center space-y-4 bg-white">
        <p className="text-[10px] tracking-[0.5em] text-gray-400">© 2026 ELITE WOMEN STORE</p>
      </footer>
    </main>
  );
}
