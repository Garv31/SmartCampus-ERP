import StudentSidebar from "@/components/student/sidebar";
import StudentNavbar from "@/components/student/navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e9edf5]">
      <div className="flex">

        <StudentSidebar />

        <div className="flex-1 overflow-x-hidden">

          <div className="hidden lg:block">
            <StudentNavbar />
          </div>

          <main className="pt-20 p-4 md:p-6 lg:pt-6">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
}