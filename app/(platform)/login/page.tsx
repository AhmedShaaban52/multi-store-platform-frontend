'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api } from '@/lib/api';
import { setUserToken } from '@/lib/auth';
import { AuthCard, buttonClass, inputClass } from '@/components/auth-card';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const { accessToken } = await api<{ accessToken: string }>('/auth/login', {
                method: 'POST',
                body: { email, password },
            });
            setUserToken(accessToken);
            router.push('/stores');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthCard title="Welcome back" subtitle="Log in to manage your store">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClass}
                    />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={loading} className={buttonClass}>
                    {loading ? 'Logging in...' : 'Log in'}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-500">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="font-medium text-indigo-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </AuthCard>
    );
}