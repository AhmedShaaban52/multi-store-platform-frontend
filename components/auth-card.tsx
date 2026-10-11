export const inputClass =
    'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100';

export const buttonClass =
    'w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50';

export function AuthCard({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-4">
            <div className="w-full max-w-sm">
                <div className="mb-8 text-center">
                    <p className="text-2xl font-semibold text-indigo-600">Mahall</p>
                    <h1 className="mt-6 text-xl font-semibold text-slate-900">{title}</h1>
                    <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
                </div>
                {children}
            </div>
        </main>
    );
}