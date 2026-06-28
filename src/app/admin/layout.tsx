import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e9edf5]">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 overflow-x-hidden">
        <div className="hidden lg:block">
  <Navbar />
</div>

<main className="pt-20 p-4 md:p-6 lg:pt-6">
  {children}
</main>
        </div>
      </div>
    </div>
  );
}