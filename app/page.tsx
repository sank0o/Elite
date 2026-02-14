export default function LuxuryStore() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 border-b border-gray-100">
        <div className="text-2xl tracking-[0.2em] font-bold">L'ÉLÉGANCE</div>
        <div className="flex gap-4 text-xs uppercase tracking-widest">
          <span>العربية</span> | <span>السلة (0)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#F4F1EE] text-center px-4">
        <div>
          <h2 className="text-sm uppercase tracking-[0.5em] mb-4 text-gray-500">مجموعة الكتان 2026</h2>
          <h1 className="text-5xl md:text-7xl mb-8 font-serif italic text-gray-800">الأناقة في التفاصيل</h1>
          <button className="border border-black px-10 py-3 hover:bg-black hover:text-white transition-all duration-700 uppercase text-xs tracking-[0.2em]">
            تسوق التشكيلة
          </button>
        </div>
      </section>

      {/* Featured Product Preview */}
      <section className="p-12 md:p-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] bg-gray-200 rounded-sm"></div>
          <div className="space-y-6 text-right" dir="rtl">
            <h3 className="text-3xl font-light">القميص الكتان العصري</h3>
            <p className="text-gray-500 font-light">تصميم إيطالي، كتان طبيعي 100%.</p>
            <p className="text-xl">189 ر.س</p>
            <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest">إضافة إلى السلة</button>
          </div>
        </div>
      </section>
    </main>
  );
}
