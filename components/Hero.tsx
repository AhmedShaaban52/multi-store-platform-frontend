'use client';
import { useState } from 'react';

const categories = [
    'All Products',
    'Ceramics',
    'Lighting',
    'Linens',
    'Decor',
];

export default function Hero() {
    const [activeCategory, setActiveCategory] = useState('All Products');

    return (
        <section className="w-full bg-slate-50 py-12 px-4 flex flex-col items-center justify-center text-center">

            {/* شارة الموقع والمدينة */}
            <div className="inline-flex items-center rounded-full bg-slate-200/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-4">
                Artisan Merchant <span className="mx-1.5">•</span> Cairo
            </div>

            {/* عنوان المتجر الرئيسي */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
                Lumina Living
            </h1>

            {/* الوصف التعريفي */}
            <p className="text-sm md:text-base text-slate-500 max-w-lg mb-8 font-normal">
                Thoughtfully crafted ceramics, homeware & essentials for calm spaces.
            </p>

            {/* أزرار الفئات (Category Tabs) */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
                {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${isActive
                                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

        </section>
    );
}