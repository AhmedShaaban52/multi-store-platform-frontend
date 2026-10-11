import Link from 'next/link';
import { ShoppingBag, Package, Users, UsersRound, Settings } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between p-4 min-h-screen">
            <div>
                {/* شعار المتجر والحالة */}
                <div className="flex items-center justify-between mb-8 px-2">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                            L
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-white leading-tight">Lumina Goods</h1>
                        </div>
                    </div>
                    <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                        FREE
                    </span>
                </div>

                {/* روابط التنقل */}
                <nav className="space-y-1">
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-white transition-colors"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                    >
                        <Package className="w-4 h-4" />
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-white transition-colors"
                    >
                        <Users className="w-4 h-4" />
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-white transition-colors"
                    >
                        <UsersRound className="w-4 h-4" />
                        Team
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-white transition-colors"
                    >
                        <Settings className="w-4 h-4" />
                        Settings
                    </Link>
                </nav>
            </div>

            {/* مؤشر حالة المتجر في الأسفل */}
            <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-3 mt-auto">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Status
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-white">
                    <span>Online Store Active</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
                </div>
            </div>
        </aside>
    );
}