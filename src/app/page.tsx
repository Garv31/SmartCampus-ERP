import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Users,
  ClipboardCheck,
  Calendar,
  BookOpen,
  Bell,
  Sparkles,
} from "lucide-react";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    if ((session.user as any).role === "ADMIN") {
      redirect("/admin/dashboard");
    }

    redirect("/student/dashboard");
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#1D3E66] via-[#244E7C] to-[#3B82F6]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[180px]" />

  <div className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[200px]" />

  <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[180px]" />

</div>
      {/* ================= HERO ================= */}

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white">

              <Sparkles size={16} />

              Modern Campus Management Platform

            </div>

            <h1 className="text-6xl font-extrabold leading-tight text-white">

Smart

<span className="block text-white">

  Campus ERP

</span>

</h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">

              Manage students, attendance, assignments,
              notes, notices and timetables from one
              secure and modern platform built for
              educational institutions.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/login"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#15365D] to-[#35639B] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Launch ERP

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#features"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                View Features
              </a>

            </div>

            <div className="mt-14 flex flex-wrap gap-5">

              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">

                <p className="text-3xl font-bold text-[#15365D]">

                  500+

                </p>

                <p className="text-slate-500">

                  Students

                </p>

              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">

                <p className="text-3xl font-bold text-green-600">

                  98%

                </p>

                <p className="text-slate-500">

                  Attendance

                </p>

              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">

                <p className="text-3xl font-bold text-orange-500">

                  120+

                </p>

                <p className="text-slate-500">

                  Assignments

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

{/* Glow */}
<div className="absolute -z-10 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-[130px]" />

{/* Browser */}
<div className="w-full max-w-[620px] overflow-hidden rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

  {/* Browser Top */}
  <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-6 py-4">

    <div className="flex gap-2">
      <div className="h-3 w-3 rounded-full bg-red-400" />
      <div className="h-3 w-3 rounded-full bg-yellow-400" />
      <div className="h-3 w-3 rounded-full bg-green-400" />
    </div>

    <div className="rounded-full bg-white/15 px-8 py-2 text-sm text-white">
      smart-campus-erp.vercel.app
    </div>

    <div className="w-6" />

  </div>

  {/* Dashboard */}
  <div className="bg-white p-6">

    <div className="mb-6 flex items-center justify-between">

      <div>
        <h3 className="text-2xl font-bold text-slate-800">
          Welcome back 👋
        </h3>

        <p className="text-slate-500">
          Smart Campus Dashboard
        </p>
      </div>

      <div className="h-12 w-12 rounded-full bg-blue-600" />

    </div>

    {/* Cards */}

    <div className="grid grid-cols-3 gap-4">

      <div className="rounded-2xl bg-blue-50 p-4">
        <p className="text-sm text-slate-500">Students</p>
        <h2 className="mt-2 text-3xl font-bold text-blue-600">
          500+
        </h2>
      </div>

      <div className="rounded-2xl bg-green-50 p-4">
        <p className="text-sm text-slate-500">Attendance</p>
        <h2 className="mt-2 text-3xl font-bold text-green-600">
          98%
        </h2>
      </div>

      <div className="rounded-2xl bg-orange-50 p-4">
        <p className="text-sm text-slate-500">Assignments</p>
        <h2 className="mt-2 text-3xl font-bold text-orange-500">
          120+
        </h2>
      </div>

    </div>

    {/* Chart */}

    <div className="mt-8 rounded-2xl bg-slate-50 p-5">

      <div className="mb-4 flex justify-between">
        <span className="font-semibold text-slate-700">
          Attendance Overview
        </span>

        <span className="text-sm text-slate-500">
          This Week
        </span>
      </div>

      <div className="flex h-40 items-end gap-3">

        <div className="h-16 w-full rounded-t-xl bg-blue-300" />
        <div className="h-24 w-full rounded-t-xl bg-blue-400" />
        <div className="h-20 w-full rounded-t-xl bg-blue-500" />
        <div className="h-32 w-full rounded-t-xl bg-blue-600" />
        <div className="h-28 w-full rounded-t-xl bg-blue-500" />
        <div className="h-36 w-full rounded-t-xl bg-blue-700" />
        <div className="h-32 w-full rounded-t-xl bg-blue-600" />

      </div>

    </div>

  </div>

</div>

{/* Floating Cards */}

<div className="absolute -left-8 top-28 rounded-2xl bg-white p-5 shadow-2xl">
  <p className="text-3xl font-bold text-blue-600">
    500+
  </p>
  <p className="text-slate-500">
    Students
  </p>
</div>

<div className="absolute -right-8 top-60 rounded-2xl bg-white p-5 shadow-2xl">
  <p className="text-3xl font-bold text-green-600">
    98%
  </p>
  <p className="text-slate-500">
    Attendance
  </p>
</div>

<div className="absolute bottom-8 left-24 rounded-2xl bg-white p-5 shadow-2xl">
  <p className="text-3xl font-bold text-orange-500">
    120+
  </p>
  <p className="text-slate-500">
    Assignments
  </p>
</div>

</div>
            

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section id="features" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#15365D]">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            A complete campus management solution designed for
            students, teachers and administrators.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              icon: Users,
              title: "Student Management",
              desc: "Manage student information, enrollment and profiles.",
              color: "bg-blue-100 text-blue-600",
            },
            {
              icon: ClipboardCheck,
              title: "Attendance",
              desc: "Track attendance with a simple and modern interface.",
              color: "bg-green-100 text-green-600",
            },
            {
              icon: Calendar,
              title: "Timetable",
              desc: "Organize classes with a dynamic timetable.",
              color: "bg-purple-100 text-purple-600",
            },
            {
              icon: BookOpen,
              title: "Assignments",
              desc: "Create, manage and submit assignments online.",
              color: "bg-orange-100 text-orange-600",
            },
            {
              icon: Bell,
              title: "Campus Notices",
              desc: "Publish announcements instantly to students.",
              color: "bg-red-100 text-red-600",
            },
            {
              icon: GraduationCap,
              title: "Analytics Dashboard",
              desc: "Gain insights with beautiful dashboards and reports.",
              color: "bg-cyan-100 text-cyan-600",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
            >
<div
  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
>
  <feature.icon className="h-8 w-8" />
</div>

<h3 className="text-2xl font-bold text-slate-800">
  {feature.title}
</h3>

<p className="mt-4 text-slate-600">
  {feature.desc}
</p>
            </div>
          ))}

        </div>

      </section>
            {/* ================= CTA ================= */}
{/* ================= CTA ================= */}

<section className="bg-gradient-to-r from-[#214A78] via-[#2C5F97] to-[#3B82F6] py-24">

  <div className="mx-auto flex max-w-7xl justify-center px-6">

    <div className="w-full max-w-6xl rounded-[42px] bg-gradient-to-r from-[#183A63] via-[#2A5B8F] to-[#3B82F6] px-14 py-20 shadow-2xl">

      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            🚀 Ready to Start?
          </span>

          <h2 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            Transform Your
            <br />
            Campus Today
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-blue-100">
            Join the next generation of campus management with one unified
            platform for students, teachers and administrators.
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-center lg:items-end">

          <Link
            href="/login"
            className="rounded-3xl bg-white px-12 py-6 text-2xl font-bold text-[#15365D] transition hover:scale-105 hover:shadow-2xl"
          >
            Launch ERP →
          </Link>

          <p className="mt-6 text-xl text-blue-100">
            Secure Login • Responsive • Fast
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ================= FOOTER ================= */}

<footer className="bg-white py-12">
  <div className="mx-auto max-w-7xl px-6">

    <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-200 pt-10 md:flex-row">

      <div>
        <h3 className="text-3xl font-bold text-[#15365D]">
          Smart Campus ERP
        </h3>

        <p className="mt-2 text-slate-500">
          Modern Campus Management Platform
        </p>
      </div>

      <div className="flex gap-8 text-slate-600">
        <Link href="#features" className="hover:text-blue-600">
          Features
        </Link>

        <Link href="/login" className="hover:text-blue-600">
          Login
        </Link>
      </div>

    </div>

    <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
      © 2026 Smart Campus ERP. All rights reserved.
    </div>

  </div>
</footer>

    </main>
  );
}

        
