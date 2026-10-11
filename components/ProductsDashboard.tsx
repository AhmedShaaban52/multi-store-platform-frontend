import Image from 'next/image';
import {
    Search, ExternalLink, User, Download, Filter, Plus,
    RotateCw, Edit, Trash2, MoreHorizontal, ChevronLeft, ChevronRight
} from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Handmade Ceramic Pour-Over',
        sku: 'LL-CER-01 • Ceramics',
        price: '480 EGP',
        inventory: '32 in stock',
        inStock: true,
        active: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfYz-6Ns5qmjw50JmUkpOcUOsJ82CgA2Nw6f0Y_oXNBEnr2n43TdInTgDu5d18_u35fUSjYxUzqrWaMxVEGg39sJws4s_Tk8dZ9r56AO2vUTc6HZcMRUOQAZ_PXmzzSmpGb8HSedUwy8itDXZGBwuSxLz5GDMm3deWKkURu0TneCP5cu5_FCgAYOtBis0JIjFQaJBnr4oHMtXVHKOfec_eyw-TwUOiNaw-_tis4wSdQs7VZTv_0-bEtg'
    },
    {
        id: 2,
        name: 'Organic Linen Cushion Cover',
        sku: 'LL-TXT-02 • Textiles & Decor',
        price: '320 EGP',
        inventory: '18 in stock',
        inStock: true,
        active: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG3O4TrjqXsLmxrTMok8-jnZzvjBOhGWnd11Bo_gaQulaWqtPb5ts_vndYM3ikMZKEMSbQAG0k3Bibea9lNu7DWEDMFrreKvQrH84TMxDPjDt96v8d1VjslXpsUTbalwK3pFBqizHQ6P7CXKp7RRaUDS4vRINWA5mK3Cke1OgvpiguT-vfoyuv-76h4GUdxsDd9ZbQ292JCvq-dh4WWSkRrQDEyX1u797LhIGYAGXNWbOCWXn0zO-ADw'
    },
    {
        id: 3,
        name: 'Minimalist Brass Desk Lamp',
        sku: 'LL-LGT-03 • Lighting',
        price: '1,250 EGP',
        inventory: '5 in stock',
        inStock: true,
        active: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1tL0RS9FhUoF19C3rWUDJ69CQUIh67tes4PiFtDj7_rsa6YB39_r6Lz5Qwkil1pGYzpWGfgCVEeoV8NOQsH8D5fCdFNs0598Qf8IC53pZpyOgFaEOGud25cv0l336E3Ogo32Bl0NbkGqvuQ7GEp18tVxdHIHes2xKFQVSNInMgzyEwk3HuVzysFCjIEGOQLZEdHqGMNBSAEi_07wv3M_D2Yb0Opdniy4zuf81hNFA_D8hFxeloe39Ew'
    },
    {
        id: 4,
        name: 'Terra Cotta Plant Pot Set',
        sku: 'LL-PLT-04 • Planters',
        price: '390 EGP',
        inventory: 'Out of stock',
        inStock: false,
        active: false,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjhyJGKm2f6nYUYH-JzzHhEWUnsQr_rrhCXJ30zAKZ_GI1561lPZNzqleaDSg3CBdNzvSK95wPgvIDqSBAo-372dlMf_clkyLtMQe4q6MpKZxnxx-ul8i5skHtPGIqR2wUjN102io3lWponpBoqdVvgmjJZac1ridrtqgru7vig6XbZCzpX5kdl1lEzgUfjhkRA8lRC-tT0VHNTKM1_5h3KCU1s5RGfJRcoRpg7JQ7mOW4lZjgAfgI_w'
    },
    {
        id: 5,
        name: 'Stoneware Dinner Plate (Set of 2)',
        sku: 'LL-CER-05 • Ceramics',
        price: '640 EGP',
        inventory: '14 in stock',
        inStock: true,
        active: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPl2CI4Uvn9JQxDNKo7vbNRQv310EiBXeyATFxUCa_YIVnYOER1tsvi0DDeyphj8IQ1KHrEjpdq61m4FoVRltt4V7EOKAwOblLOPang0HOK-1TOTK0O4CY4t9Ygf9Qas_QOOxaHkFkLmly-ibvqVPx0Qhv7PPIvGlEs0oXLtxkoN4-S4msS357PLBQGJWezABlZqabHZtVBVLnP2UsLXsceF4SbiVE2tkQHBY_6n9YYBTkeD_Zid9G6Q'
    },
    {
        id: 6,
        name: 'Woven Cotton Throw Blanket',
        sku: 'LL-TXT-06 • Textiles & Decor',
        price: '850 EGP',
        inventory: '9 in stock',
        inStock: true,
        active: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8xyKmoS0gsTUhzEc51VoR_23bMYMz4t_4AZ5pH_sfrq1B82_Ozmf0QBDt9tVKirFoK652FZCfSxupxTPVhowv4yyOe5uUeOGyKQSnemBgMlSp_H-Rtok53QxfBkOVtuxm8HX5LmuFfb50gm4gxA-zSyB-8pXKVG9t6qWaE3vXpv3AfF6FGrGYtfoDTfPOcTaYf3n5RiNHi22WwZPHowb8JHNJ7_M0gypZUzi2mIwdBEJjbM3dmpqJww'
    }
];

export default function ProductsDashboard() {
    return (
        <div className="flex-1 bg-slate-50 min-h-screen p-6">

            {/* شريط البحث العلوي العام */}
            <header className="flex items-center justify-between pb-6 border-b border-slate-200/60 mb-6">
                <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2 w-96 shadow-2xs">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search orders, products, data...."
                        className="w-full text-xs text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                        View online store <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        <User className="w-4 h-4" />
                    </div>
                </div>
            </header>

            {/* بانر الخطة المجانية وحد الاستخدام */}
            <div className="bg-white border border-indigo-100 rounded-2xl p-4 shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">You are using 14 of 20 products</span>
                        <span className="bg-indigo-50 text-indigo-600 font-semibold text-[10px] px-2 py-0.5 rounded-md border border-indigo-100">
                            FREE PLAN
                        </span>
                    </div>
                    <p className="text-xs text-slate-500">
                        Store limit will pause checkout for unlisted variants once capacity is exceeded.
                    </p>
                    {/* شريط التقدم */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden max-w-xl">
                        <div className="bg-indigo-600 h-full rounded-full w-[70%]"></div>
                    </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs font-semibold text-slate-600">70% capacity reached</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl shadow-sm transition-colors flex items-center gap-2">
                        Upgrade to Pro
                    </button>
                </div>
            </div>

            {/* العنوان الرئيسي لصفحة المنتجات */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Products</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Manage your catalog, stock availability, and merchant listings.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Download className="w-3.5 h-3.5 text-slate-500" /> Export
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Filter className="w-3.5 h-3.5 text-slate-500" /> Filter
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-medium shadow-sm transition-colors">
                        <Plus className="w-4 h-4" /> Add product
                    </button>
                </div>
            </div>

            {/* شريط الفلاتر الفرعي داخل جدول المنتجات */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 max-w-md bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                        <Search className="w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by product name, SKU, or tag..."
                            className="w-full text-xs bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600">
                            <span className="text-slate-400">Status:</span>
                            <span className="font-semibold text-slate-900">All</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600">
                            <span className="text-slate-400">Category:</span>
                            <span className="font-semibold text-slate-900">All</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600">
                            <span className="text-slate-400">Stock status</span>
                        </div>
                        <button className="p-2 border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors">
                            <RotateCw className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* جدول المنتجات */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                                <th className="py-3 px-4 w-10">
                                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-0" />
                                </th>
                                <th className="py-3 px-4">Item</th>
                                <th className="py-3 px-4">Product Name & SKU</th>
                                <th className="py-3 px-4">Price</th>
                                <th className="py-3 px-4">Inventory</th>
                                <th className="py-3 px-4">Visibility</th>
                                <th className="py-3 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors group">
                                    <td className="py-3.5 px-4">
                                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-0" />
                                    </td>
                                    <td className="py-3.5 px-4 w-14">
                                        <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="40px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <div className="font-semibold text-slate-900 mb-0.5">{product.name}</div>
                                        <div className="text-[11px] text-slate-400 font-mono">{product.sku}</div>
                                    </td>
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                                        {product.price}
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${product.inStock
                                                ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                                : 'bg-rose-50 text-rose-600 border border-rose-100'
                                            }`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${product.inStock ? 'bg-indigo-600' : 'bg-rose-600'}`}></span>
                                            {product.inventory}
                                        </span>
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-8 h-4 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${product.active ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                                <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${product.active ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                            </div>
                                            <span className="text-slate-600 font-medium text-xs">
                                                {product.active ? 'Active' : 'Draft'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-4 text-right">
                                        <div className="flex items-center justify-end gap-1 text-slate-400">
                                            <button className="p-1.5 hover:bg-slate-200/60 rounded-lg hover:text-slate-700 transition-colors">
                                                <Edit className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-rose-50 rounded-lg hover:text-rose-600 transition-colors">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-slate-200/60 rounded-lg hover:text-slate-700 transition-colors">
                                                <MoreHorizontal className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* تذييل الجدول والتنقل بين الصفحات */}
                <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                        Showing <span className="font-semibold text-slate-900">1-6</span> of <span className="font-semibold text-slate-900">14</span> products
                    </div>

                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-slate-400 bg-slate-50 cursor-not-allowed flex items-center gap-1">
                            <ChevronLeft className="w-3.5 h-3.5" /> Previous
                        </button>
                        <button className="px-3 py-1.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-2xs">1</button>
                        <button className="px-3 py-1.5 hover:bg-slate-100 rounded-lg text-slate-700 font-medium">2</button>
                        <button className="px-3 py-1.5 hover:bg-slate-100 rounded-lg text-slate-700 font-medium">3</button>
                        <button className="px-3 py-1.5 border border-slate-200 hover:bg-slate-100 rounded-lg text-slate-700 font-medium flex items-center gap-1">
                            Next <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}