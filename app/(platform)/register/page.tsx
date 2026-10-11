'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api } from '@/lib/api';
import { setUserToken } from '@/lib/auth';
import { AuthCard, buttonClass, inputClass } from '@/components/auth-card';

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [key]: e.target.value });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const { accessToken } = await api<{ accessToken: string }>('/auth/register', {
                method: 'POST',
                body: form,
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
        <AuthCard title="Create your account" subtitle="Start selling online in minutes">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">First name</label>
                        <input required value={form.firstName} onChange={set('firstName')} className={inputClass} />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Last name</label>
                        <input required value={form.lastName} onChange={set('lastName')} className={inputClass} />
                    </div>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" required value={form.email} onChange={set('email')} className={inputClass} />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                    <input
                        type="password"
                        required
                        minLength={8}
                        maxLength={72}
                        value={form.password}
                        onChange={set('password')}
                        className={inputClass}
                    />
                    <p className="mt-1 text-xs text-slate-400">At least 8 characters</p>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={loading} className={buttonClass}>
                    {loading ? 'Creating account...' : 'Create account'}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-indigo-600 hover:underline">
                    Log in
                </Link>
            </p>
        </AuthCard>
    );
}