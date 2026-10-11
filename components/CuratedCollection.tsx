import Image from 'next/image';
import { SlidersHorizontal, ShoppingCart } from 'lucide-react';

const products = [
    {
        id: 1,
        title: 'Handmade Ceramic Pour-Over',
        subtitle: 'Glazed stoneware dripper',
        category: 'Ceramics',
        price: 'EGP 480',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCfYz-6Ns5qmjw50JmUkpOcUOsJ82CgA2Nw6f0Y_oXNBEnr2n43TdInTgDu5d18_u35fUSjYxUzqrWaMxVEGg39sJws4s_Tk8dZ9r56AO2vUTc6HZcMRUOQAZ_PXmzzSmpGb8HSedUwy8itDXZGBwuSxLz5GDMm3deWKkURu0TneCP5cu5_FCgAYOtBis0JIjFQaJBnr4oHMtXVHKOfec_eyw-TwUOiNaw-_tis4wSdQs7VZTv_0-bEtg',
        alt: 'Artisanal off-white handmade ceramic pour-over dripper resting on clean neutral linen',
    },
    {
        id: 2,
        title: 'Organic Linen Cushion Cover',
        subtitle: 'Pre-washed 100% natural flax',
        category: 'Linens',
        price: 'EGP 320',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAG3O4TrjqXsLmxrTMok8-jnZzvjBOhGWnd11Bo_gaQulaWqtPb5ts_vndYM3ikMZKEMSbQAG0k3Bibea9lNu7DWEDMFrreKvQrH84TMxDPjDt96v8d1VjslXpsUTbalwK3pFBqizHQ6P7CXKp7RRaUDS4vRINWA5mK3Cke1OgvpiguT-vfoyuv-76h4GUdxsDd9ZbQ292JCvq-dh4WWSkRrQDEyX1u797LhIGYAGXNWbOCWXn0zO-ADw',
        alt: 'Washed oat-beige organic linen cushion cover placed gently on light wood bench',
    },
    {
        id: 3,
        title: 'Minimalist Brass Desk Lamp',
        subtitle: 'Warm dimmable LED fixture',
        category: 'Lighting',
        price: 'EGP 1,250',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD1tL0RS9FhUoF19C3rWUDJ69CQUIh67tes4PiFtDj7_rsa6YB39_r6Lz5Qwkil1pGYzpWGfgCVEeoV8NOQsH8D5fCdFNs0598Qf8IC53pZpyOgFaEOGud25cv0l336E3Ogo32Bl0NbkGqvuQ7GEp18tVxdHIHes2xKFQVSNInMgzyEwk3HuVzysFCjIEGOQLZEdHqGMNBSAEi_07wv3M_D2Yb0Opdniy4zuf81hNFA_D8hFxeloe39Ew',
        alt: 'Brushed minimalist brass desk lamp with delicate thin stem on pure white desktop',
    },
    {
        id: 4,
        title: 'Terra Cotta Plant Pot Set',
        subtitle: 'Set of 2 unglazed earthen pots',
        category: 'Decor',
        price: 'EGP 390',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAjhyJGKm2f6nYUYH-JzzHhEWUnsQr_rrhCXJ30zAKZ_GI1561lPZNzqleaDSg3CBdNzvSK95wPgvIDqSBAo-372dlMf_clkyLtMQe4q6MpKZxnxx-ul8i5skHtPGIqR2wUjN102io3lWponpBoqdVvgmjJZac1ridrtqgru7vig6XbZCzpX5kdl1lEzgUfjhkRA8lRC-tT0VHNTKM1_5h3KCU1s5RGfJRcoRpg7JQ7mOW4lZjgAfgI_w',
        alt: 'Pair of warm rustic terra cotta plant pots with subtle matte drainage saucers',
    },
    {
        id: 5,
        title: 'Stoneware Dinner Plate (Set of 2)',
        subtitle: 'Speckled stoneware clay body',
        category: 'Ceramics',
        price: 'EGP 640',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCPl2CI4Uvn9JQxDNKo7vbNRQv310EiBXeyATFxUCa_YIVnYOER1tsvi0DDeyphj8IQ1KHrEjpdq61m4FoVRltt4V7EOKAwOblLOPang0HOK-1TOTK0O4CY4t9Ygf9Qas_QOOxaHkFkLmly-ibvqVPx0Qhv7PPIvGlEs0oXLtxkoN4-S4msS357PLBQGJWezABlZqabHZtVBVLnP2UsLXsceF4SbiVE2tkQHBY_6n9YYBTkeD_Zid9G6Q',
        alt: 'Two hand-thrown matte speckled stoneware dinner plates stacked neatly',
    },
    {
        id: 6,
        title: 'Woven Cotton Throw Blanket',
        subtitle: '100% Egyptian long-staple cotton',
        category: 'Linens',
        price: 'EGP 850',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD8xyKmoS0gsTUhzEc51VoR_23bMYMz4t_4AZ5pH_sfrq1B82_Ozmf0QBDt9tVKirFoK652FZCfSxupxTPVhowv4yyOe5uUeOGyKQSnemBgMlSp_H-Rtok53QxfBkOVtuxm8HX5LmuFfb50gm4gxA-zSyB-8pXKVG9t6qWaE3vXpv3AfF6FGrGYtfoDTfPOcTaYf3n5RiNHi22WwZPHowb8JHNJ7_M0gypZUzi2mIwdBEJjbM3dmpqJww',
        alt: 'Textured heavy woven Egyptian cotton throw blanket with fringe detail',
    },
    {
        id: 7,
        title: 'Matte Black Scented Candle',
        subtitle: 'Cedarwood & wild fig soy wax',
        category: 'Decor',
        price: 'EGP 260',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAM3FNJ1Odtq_iTvTj4qR95-uYOdP4aFlGpdJ6ovCyU-YDWUID_PL912QciZEefGMMgyx9lUgoQSiss0onThhhHYRLmjOT4JU0dmko1sHGoYS_XgZfvle4bJDXrAyjW1QOGFG60GwkEJ53HicLyrj0kTvmYumCSD_RDTg7d1AWEdN59LnNnlyw0LUYRJzCXo3K8ROzzUPkuDGSVXsIwOE4bgvZ1W3R6PqDq9gCuMRUvlbnlurm9Iqy7mg',
        alt: 'Sophisticated matte black ceramic scented candle vessel with wood lid',
    },
    {
        id: 8,
        title: 'Arch Glass Carafe & Tumbler',
        subtitle: 'Borosilicate bedside set',
        category: 'Ceramics',
        price: 'EGP 510',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBKU6LoWE-228ScBXYNRfxSAckg6TYcpyaxxmpbYwgTDHpzxXY4CtndG6pk3gq3vqQeSkt_oM_pzcARXonG-m-La0nKzXiMNlCk-aU3oEyPmXgRyHmrfnKDbUHmkxaaVw1dJlPILCxWEXyLnvwyskizSZGir-a7mo74lBhdVGF4dPVHms7bIaYOtzYXjEGxQ-UdI5OVfs-AiNtXHk3dD7kUn7CuPLlCkhdw7q4AKB1q3dp_JR7-TyZQZA',
        alt: 'Hand-blown clear arch glass water carafe with nested tumbler cup',
    },
];

export default function CuratedCollection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline gap-2">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Curated Collection
                    </h2>
                    <span className="text-sm text-slate-500 font-normal">
                        ({products.length} items)
                    </span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                    <span>Egyptian Pound (EGP)</span>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="group flex flex-col bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-200"
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3">
                            <Image
                                src={product.image}
                                alt={product.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2.5 left-2.5 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-slate-800 backdrop-blur-md shadow-xs z-10">
                                {product.category}
                            </span>
                        </div>

                        {/* Content Details */}
                        <div className="flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 mb-0.5 group-hover:text-indigo-600 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-xs text-slate-500 mb-3">
                                    {product.subtitle}
                                </p>
                            </div>

                            {/* Price and Action Button */}
                            <div className="pt-2 flex items-center justify-between border-t border-slate-50">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                                        Price
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">
                                        {product.price}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Add to cart"
                                    className="h-9 px-3.5 rounded-xl bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white transition-all duration-200 flex items-center gap-1.5 text-xs font-medium active:scale-95 cursor-pointer"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}