export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] text-[#1A1A1A] flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-6">
        <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400">Elite 2026</h2>
        <h1 className="text-6xl md:text-8xl font-serif italic py-4">الأناقة في التفاصيل</h1>
        <p className="text-lg font-light text-gray-500 max-w-md mx-auto">
          تجربة تسوق فريدة تجمع بين الفخامة والراحة. قريباً.
        </p>
        <div className="pt-8">
          <button className="border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-700 uppercase text-xs tracking-widest">
            استكشف المجموعة
          </button>
        </div>
      </div>
    </main>
  );
}
