import Sidebar from '@/components/Sidebar';
import ProductsDashboard from '@/components/ProductsDashboard';

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />
            <ProductsDashboard />
        </div>
    );
}