'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { clearUserToken, getUserToken } from '@/lib/auth';

type MyStore = { id: number; name: string; slug: string; plan: string; role: string };

export default function StoresPage() {
    const router = useRouter();
    const [stores, setStores] = useState<MyStore[] | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = getUserToken();
        if (!token) {
            router.replace('/login');
            return;
        }
        api<MyStore[]>('/stores/mine', { token })
            .then(setStores)
            .catch((err) => {
                if (err?.status === 401) {
                    clearUserToken();
                    router.replace('/login');
                } else {
                    setError(err.message);
                }
            });
    }, [router]);

    function logout() {
        clearUserToken();
        router.push('/login');
    }

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <header className="border-b border-slate-200">
                <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
                    <span className="text-xl font-bold text-indigo-600">Mahall</span>
                    <button
                        onClick={logout}
                        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                        Log out
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-3xl px-4 py-10">
                <h1 className="text-2xl font-semibold text-slate-900">Your stores</h1>
                <p className="mt-1 text-sm text-slate-600">Choose a store to manage.</p>

                <div className="mt-8">
                    {error && (
                        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                    )}

                    {!stores && !error && <p className="text-sm text-slate-600">Loading...</p>}

                    {stores?.length === 0 && (
                        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
                            <p className="font-medium text-slate-900">No stores yet</p>
                            <p className="mt-1 text-sm text-slate-600">
                                You don&apos;t have any stores yet.
                            </p>
                        </div>
                    )}

                    <ul className="space-y-3">
                        {stores?.map((s) => (
                            <li
                                key={s.id}
                                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-300"
                            >
                                <div>
                                    <p className="font-semibold text-slate-900">{s.name}</p>
                                    <p className="text-sm text-slate-600">{s.slug}</p>
                                </div>
                                <div className="flex gap-2 text-xs font-medium">
                                    <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-indigo-800">
                                        {s.plan}
                                    </span>
                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
                                        {s.role}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}