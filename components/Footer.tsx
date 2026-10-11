import { Truck, ShieldCheck, CreditCard } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: <Truck className="w-6 h-6 text-indigo-600" />,
        title: 'Fast Delivery Across Egypt',
        description: 'Cairo & Giza in 24-48 hours. Reliable nationwide courier coverage.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
        title: 'Authentic Artisan Goods',
        description: 'Small-batch creations made with responsibly sourced, durable materials.',
    },
    {
        icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
        title: 'Card & Cash on Delivery',
        description: 'Pay safely online via Meeza/Visa or with cash when your package arrives.',
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-slate-50 pt-12 pb-8 border-t border-slate-100">
            <div className="w-full px-4 sm:px-6 lg:px-8">

                {/* قسم المميزات الثلاثة (Features Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* قسم حقوق الملكية (Copyright & Powered by) */}
                <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500 gap-1">
                    <span>© 2025 Lumina Goods</span>
                    <span className="hidden sm:inline mx-1.5">•</span>
                    <span>
                        Powered by{' '}
                        <Link
                            href="#"
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Mahall
                        </Link>
                    </span>
                </div>

            </div>
        </footer>
    );
}