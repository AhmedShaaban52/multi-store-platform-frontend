import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white p-2">
      <div className="mx-auto flex items-center justify-between rounded-xl bg-white px-6 py-3 shadow-sm">
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs">
              M
            </div>
            <span className="font-bold text-slate-800 text-sm">Mahall</span>
          </div>

          <span className="text-xl font-semibold text-slate-900 tracking-tight">
            Lumina Goods
          </span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, collections, brands..."
              className="w-full rounded-lg bg-slate-100/80 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Catalog
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Collections
            </Link>
          </nav>

          <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              <User className="h-5 w-5" />
            </button>

            <button className="relative text-slate-600 hover:text-slate-900 transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}