"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  FileText,
  Bell,
  Calendar,
  ClipboardCheck,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Assignments",
    href: "/student/assignments",
    icon: BookOpen,
  },
  {
    name: "Notes",
    href: "/student/notes",
    icon: FileText,
  },
  {
    name: "Notices",
    href: "/student/notices",
    icon: Bell,
  },
  {
    name: "Timetable",
    href: "/student/timetable",
    icon: Calendar,
  },
  {
    name: "Attendance",
    href: "/student/attendance",
    icon: ClipboardCheck,
  },
  {
    name: "Profile",
    href: "/student/profile",
    icon: User,
  },
];

export default function StudentSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-[#15365D] px-4 py-4 text-white lg:hidden">
        <h1 className="text-2xl font-bold">SMART ERP</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <aside className="h-full w-72 bg-gradient-to-b from-[#15365D] to-[#2D5E96] p-6 text-white">

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
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20"
                  >
                    <Icon size={18} />
                    {item.name}
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
                className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 hover:bg-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden min-h-screen w-72 flex-col bg-gradient-to-b from-[#15365D] to-[#2D5E96] text-white lg:flex">

        <div className="p-6">
          <h1 className="text-3xl font-bold">
            SMART ERP
          </h1>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">
          <button
            onClick={() =>
              signOut({
                redirectTo: "/login",
              })
            }
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 hover:bg-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </aside>
    </>
  );
}