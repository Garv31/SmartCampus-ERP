"use client";

import { useState } from "react";
import { logout } from "@/actions/logout";
import { Bell } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const name = "Admin";
  const email = "admin@smartcampus.com";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back, {name} 👋
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="relative flex items-center gap-3">
  {/* Notification */}
  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100">
    <Bell size={20} />
  </button>

  {/* Profile */}
  <button
    onClick={() => setOpen(!open)}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#35639B] to-[#4F7DB8] text-lg font-bold text-white shadow-lg transition hover:scale-105"
  >
    {name.charAt(0).toUpperCase()}
  </button>

  {open && (
    <div className="absolute right-0 top-16 w-56 overflow-hidden rounded-2xl border bg-white shadow-xl">
      <div className="border-b px-4 py-3">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-slate-500">{email}</p>
      </div>

      <form action={logout}>
        <button
          type="submit"
          className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50"
        >
          🚪 Logout
        </button>
      </form>
    </div>
  )}
</div>

      </div>
    </header>
  );
}