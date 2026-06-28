"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { logout } from "@/actions/logout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Calendar,
  BookOpen,
  FileText,
  Bell,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    href: "/admin/students",
    icon: Users,
  },
  {
    name: "Attendance",
    href: "/admin/attendance",
    icon: ClipboardCheck,
  },
  {
    name: "Timetable",
    href: "/admin/timetable",
    icon: Calendar,
  },
  {
    name: "Assignments",
    href: "/admin/assignments",
    icon: BookOpen,
  },
  {
    name: "Notes",
    href: "/admin/notes",
    icon: FileText,
  },
  {
    name: "Notices",
    href: "/admin/notices",
    icon: Bell,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-[#15365D] px-4 py-4 text-white lg:hidden">
        <h1 className="text-2xl font-bold">
          SMART ERP
        </h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <aside className="h-full w-72 bg-gradient-to-b from-[#15365D] via-[#204C7D] to-[#35639B] text-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                SMART ERP
              </h1>

              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
  key={item.name}
  href={item.href}
  className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300 ${
    pathname === item.href
      ? "bg-white text-[#15365D] shadow-xl"
      : "text-white/90 hover:bg-white/10 hover:translate-x-1"
  }`}
>
  {pathname === item.href && (
    <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#35639B]" />
  )}

  <div
    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
      pathname === item.href
        ? "bg-[#35639B] text-white"
        : "bg-white/10 group-hover:bg-white/20"
    }`}
  >
    <Icon size={20} />
  </div>

  <span className="font-medium">
    {item.name}
  </span>
</Link>
                );
              })}
            </div>
            <div className="mt-8 border-t border-white/20 pt-4">
              <button
                onClick={() =>
                  signOut({
                    redirectTo: "/login",
                  })
                }
                className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 transition hover:bg-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 min-h-screen flex-col bg-gradient-to-b from-[#15365D] via-[#204C7D] to-[#35639B] text-white shadow-2xl">
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              🎓
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                SMART ERP
              </h1>

              <p className="text-sm text-white/70">
                Campus Management
              </p>
            </div>

          </div>
        </div>

        <nav className="flex-1 px-4 ">
        <div className="space-y-2 pt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">

          <p className="mb-4 text-center text-sm text-white/70">
            Admin Panel
          </p>

          <button
            onClick={() =>
              signOut({
                redirectTo: "/login",
              })
            }
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </aside>
    </>
  );
}