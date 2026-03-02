<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elite Store | متجر النخبة</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { font-family: 'Cairo', sans-serif; background-color: #ffffff; overflow-x: hidden; }
        .glass-nav { background: rgba(255, 255, 255, 0.85); backdrop-filter: saturate(180%) blur(20px); }
        .hero-gradient { background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%); }
        .product-image { transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .product-card:hover .product-image { transform: scale(1.05); }
        .modal-bg { background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(12px); }
        .selected-btn { background: black !important; color: white !important; }
        .selected-ring { outline: 2px solid black; outline-offset: 3px; }
        input, textarea { border: 1px solid #eee; padding: 12px; border-radius: 15px; outline: none; width: 100%; }
        input:focus { border-color: #000; }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const App = () => {
            const [view, setView] = useState('shop');
            const [cart, setCart] = useState([]);
            const [user, setUser] = useState(null); 
            const [isNavScrolled, setIsNavScrolled] = useState(false);
            const [showLoginModal, setShowLoginModal] = useState(false);
            const [loginType, setLoginType] = useState('customer');
            const [showAddModal, setShowAddModal] = useState(false);
            const [selectedProduct, setSelectedProduct] = useState(null);
            const [tempOptions, setTempOptions] = useState({ size: '', color: '' });

            // المنتجات الافتراضية
            const [products, setProducts] = useState([
                { 
                    id: 1, name: 'ساعة أوتوماتيك سوداء', price: '1200', category: 'ساعات', 
                    img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
                    desc: 'ساعة فاخرة مقاومة للماء مع سوار جلدي طبيعي.',
                    sizes: ['40mm', '44mm'],
                    colors: ['#000000', '#4A4A4A']
                }
            ]);

            useEffect(() => {
                const handleScroll = () => setIsNavScrolled(window.scrollY > 50);
                window.addEventListener('scroll', handleScroll);
                if (window.lucide) lucide.createIcons();
                return () => window.removeEventListener('scroll', handleScroll);
            }, [view, showLoginModal, user, products, selectedProduct, showAddModal]);

            // تسجيل الدخول
            const handleLogin = (e) => {
                e.preventDefault();
                const id = e.target.id.value;
                const pass = e.target.pw.value;
                if (loginType === 'admin') {
                    if (id === 'admin' && pass === 'admin123') { setUser('admin'); setShowLoginModal(false); }
                    else alert('خطأ في بيانات المسؤول');
                } else {
                    if (id.includes('@') && pass.length > 5) { setUser('customer'); setShowLoginModal(false); }
                    else alert('يرجى إدخال إيميل وباسورد صحيح');
                }
            };

            // إضافة منتج جديد - تم الإصلاح هنا لضمان قراءة الروابط بشكل صحيح
            const submitNewProduct = (e) => {
                e.preventDefault();
                const form = e.target;
                
                // جلب القيم مباشرة لضمان عدم ضياع رابط الصورة
                const p_name = form.p_name.value;
                const p_price = form.p_price.value;
                const p_img = form.p_img.value;
                const p_desc = form.p_desc.value;
                const p_sizes = form.p_sizes.value;
                const p_colors = form.p_colors.value;

                const newProduct = {
                    id: Date.now(),
                    name: p_name,
                    price: p_price,
                    img: p_img, // الرابط هنا سيتم تمريره فوراً
                    category: 'نخبة',
                    desc: p_desc,
                    sizes: p_sizes.split(',').map(s => s.trim()),
                    colors: p_colors.split(',').map(c => c.trim())
                };

                // تحديث مصفوفة المنتجات
                setProducts(prevProducts => [newProduct, ...prevProducts]);
                setShowAddModal(false);
                alert('تمت إضافة المنتج بنجاح!');
            };

            const addToCart = () => {
                if (!tempOptions.size || !tempOptions.color) return alert('اختر المقاس واللون');
                setCart([...cart, { ...selectedProduct, chosenSize: tempOptions.size, chosenColor: tempOptions.color, cartId: Date.now() }]);
                setSelectedProduct(null);
                setTempOptions({ size: '', color: '' });
            };

            return (
                <div className="relative text-black">
                    {/* Navigation */}
                    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${isNavScrolled || view !== 'shop' ? 'glass-nav py-3 shadow-sm text-black' : 'bg-transparent text-white'}`}>
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <h1 className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setView('shop')}>ELITE.</h1>
                            <div className="flex items-center gap-6">
                                {user ? (
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold bg-black text-white px-3 py-1 rounded-full uppercase">{user === 'admin' ? 'Admin' : 'Client'}</span>
                                        <button onClick={() => setUser(null)} className="text-xs opacity-50 underline font-bold">خروج</button>
                                    </div>
                                ) : (
                                    <button onClick={() => setShowLoginModal(true)} className="text-sm font-bold">دخول</button>
                                )}
                                <div className="relative cursor-pointer" onClick={() => setView('checkout')}>
                                    <i data-lucide="shopping-bag" className="w-6 h-6"></i>
                                    {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{cart.length}</span>}
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Modal: إضافة منتج */}
                    {showAddModal && (
                        <div className="fixed inset-0 z-[200] modal-bg flex items-center justify-center p-4">
                            <div className="bg-white p-8 rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
                                <h2 className="text-2xl font-black mb-6">إضافة قطعة جديدة للمتجر</h2>
                                <form onSubmit={submitNewProduct} className="space-y-4">
                                    <input name="p_name" placeholder="اسم المنتج" required />
                                    <input name="p_price" type="number" placeholder="السعر (ر.س)" required />
                                    <input name="p_img" placeholder="رابط الصورة المباشر (URL)" required />
                                    <textarea name="p_desc" placeholder="وصف المنتج بالتفصيل" rows="3" required></textarea>
                                    <input name="p_sizes" placeholder="المقاسات (مثال: S, M, L, XL)" required />
                                    <input name="p_colors" placeholder="أكواد الألوان (مثال: #000, #fff, #ff0000)" required />
                                    
                                    <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-black shadow-lg">نشر المنتج الآن</button>
                                    <button type="button" onClick={() => setShowAddModal(false)} className="w-full text-sm text-gray-400">إلغاء</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Modal: تسجيل الدخول */}
                    {showLoginModal && (
                        <div className="fixed inset-0 z-[100] modal-bg flex items-center justify-center p-4">
                            <div className="bg-white p-8 rounded-[2.5rem] w-full max-w-sm text-center">
                                <div className="flex gap-4 mb-8 border-b pb-2">
                                    <button onClick={() => setLoginType('customer')} className={`flex-1 font-bold ${loginType === 'customer' ? 'text-black border-b-2 border-black' : 'text-gray-300'}`}>عميل</button>
                                    <button onClick={() => setLoginType('admin')} className={`flex-1 font-bold ${loginType === 'admin' ? 'text-black border-b-2 border-black' : 'text-gray-300'}`}>مسؤول</button>
                                </div>
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <input id="id" placeholder={loginType === 'admin' ? "اسم المستخدم" : "البريد الإلكتروني"} required />
                                    <input id="pw" type="password" placeholder="كلمة المرور" required />
                                    <button className="w-full bg-black text-white py-4 rounded-2xl font-black">دخول</button>
                                    <button type="button" onClick={() => setShowLoginModal(false)} className="text-xs text-gray-400 mt-4">إغلاق</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {view === 'shop' && (
                        <div>
                            <div className="relative h-[80vh] bg-black flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600" className="absolute w-full h-full object-cover opacity-60" />
                                <div className="hero-gradient absolute inset-0"></div>
                                <h2 className="relative z-10 text-7xl md:text-9xl font-black italic text-white tracking-tighter">ELITE.</h2>
                            </div>

                            {user === 'admin' && (
                                <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
                                    <button onClick={() => setShowAddModal(true)} className="bg-white text-black px-10 py-5 rounded-3xl font-black shadow-2xl flex items-center gap-3 border hover:scale-105 transition">
                                        <i data-lucide="plus"></i> إضافة منتج جديد للمتجر
                                    </button>
                                </div>
                            )}

                            <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {products.map(p => (
                                    <div key={p.id} className="product-card group cursor-pointer relative" onClick={() => setSelectedProduct(p)}>
                                        {user === 'admin' && (
                                            <button onClick={(e) => {e.stopPropagation(); setProducts(products.filter(x => x.id !== p.id))}} className="absolute top-4 left-4 z-20 bg-white text-red-500 p-3 rounded-full shadow-xl hover:bg-red-500 hover:text-white transition">
                                                <i data-lucide="trash-2" className="w-4 h-4"></i>
                                            </button>
                                        )}
                                        <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-100 mb-6">
                                            <img 
                                                src={p.img} 
                                                className="product-image w-full h-full object-cover" 
                                                onError={(e) => {
                                                    e.target.onerror = null; 
                                                    e.target.src='https://via.placeholder.com/800x1000?text=Image+Error';
                                                }} 
                                            />
                                        </div>
                                        <div className="px-4 flex justify-between items-start font-bold">
                                            <div>
                                                <h4 className="text-xl">{p.name}</h4>
                                                <p className="text-gray-400 text-xs uppercase tracking-widest">{p.category}</p>
                                            </div>
                                            <p className="text-lg text-blue-600">{p.price} ر.س</p>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    )}

                    {selectedProduct && (
                        <div className="fixed inset-0 z-[100] modal-bg flex items-center justify-center p-4">
                            <div className="bg-white w-full max-w-5xl rounded-[3.5rem] overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
                                <button onClick={() => setSelectedProduct(null)} className="absolute top-6 left-6 z-10 bg-white/80 p-2 rounded-full"><i data-lucide="x"></i></button>
                                <div className="md:w-1/2 bg-gray-50 h-64 md:h-auto">
                                    <img src={selectedProduct.img} className="w-full h-full object-cover" />
                                </div>
                                <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto">
                                    <h2 className="text-4xl font-black mb-4">{selectedProduct.name}</h2>
                                    <p className="text-2xl text-blue-600 mb-6">{selectedProduct.price} ر.س</p>
                                    <p className="text-gray-500 mb-10 leading-relaxed">{selectedProduct.desc}</p>
                                    
                                    <div className="space-y-8 mb-10">
                                        <div>
                                            <p className="font-bold text-sm mb-4">المقاسات:</p>
                                            <div className="flex gap-2">
                                                {selectedProduct.sizes.map(s => (
                                                    <button key={s} onClick={() => setTempOptions({...tempOptions, size: s})} className={`px-5 py-2 border rounded-xl font-bold text-xs transition ${tempOptions.size === s ? 'selected-btn' : 'hover:border-black'}`}>{s}</button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm mb-4">الألوان:</p>
                                            <div className="flex gap-4">
                                                {selectedProduct.colors.map(c => (
                                                    <button key={c} onClick={() => setTempOptions({...tempOptions, color: c})} className={`w-8 h-8 rounded-full border border-gray-200 ${tempOptions.color === c ? 'selected-ring' : ''}`} style={{backgroundColor: c}}></button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button onClick={addToCart} className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl shadow-2xl">إضافة للحقيبة</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {view === 'checkout' && (
                        <div className="pt-40 max-w-2xl mx-auto px-6 pb-20 text-center">
                            <h2 className="text-4xl font-black mb-10 tracking-tighter italic">MY CART.</h2>
                            {cart.length === 0 ? <p className="text-gray-400">لا توجد قطع في الحقيبة</p> : (
                                <div className="space-y-4">
                                    {cart.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center bg-gray-50 p-6 rounded-[2.5rem]">
                                            <div className="flex items-center gap-4 text-right">
                                                <img src={item.img} className="w-16 h-16 rounded-2xl object-cover" />
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    <p className="text-[10px] text-gray-400">مقاس: {item.chosenSize} | لون: <span className="inline-block w-2 h-2 rounded-full align-middle" style={{backgroundColor: item.chosenColor}}></span></p>
                                                </div>
                                            </div>
                                            <span className="font-black">{item.price} ر.س</span>
                                        </div>
                                    ))}
                                    <button onClick={() => {alert('شكراً لك، تم تأكيد الطلب'); setCart([])}} className="w-full bg-black text-white py-6 rounded-3xl font-black text-xl mt-10 shadow-2xl">تأكيد الشراء</button>
                                </div>
                            )}
                        </div>
                    )}

                    <footer className="py-20 border-t text-center text-[10px] text-gray-400 uppercase tracking-[0.5em]">
                        Elite Store © 2026 | Pure Minimalist Luxury
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
                    
