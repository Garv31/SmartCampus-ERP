import {
    GraduationCap,
    ShieldCheck,
    BookOpen,
    Calendar,
  } from "lucide-react";
  
  import { LoginForm } from "@/components/auth/login-form";
export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#1D3E66] via-[#244E7C] to-[#3B82F6] flex items-center justify-center p-4">
            <div className="w-full max-w-7xl overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="grid lg:grid-cols-2">

                    {/* Left Section */}
                    <div className="hidden lg:flex flex-col justify-center p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="rounded-2xl bg-white/20 p-3">
                                <GraduationCap className="h-8 w-8" />
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold">
                                    Smart Campus ERP
                                </h1>
                                <p className="text-blue-100">
                                    Student & Teacher Portal
                                </p>
                            </div>
                        </div>

                        <h2 className="text-5xl font-bold leading-tight">
                            Manage Campus Life
                            <br />
                            Smarter
                        </h2>

                        <p className="mt-6 text-lg text-blue-100">
                            Attendance, assignments, timetable, notes and notices
                            all in one modern ERP platform.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-white/10 p-4">
                                <Calendar className="mb-2 h-6 w-6" />
                                Timetable Management
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4">
                                <BookOpen className="mb-2 h-6 w-6" />
                                Notes & Assignments
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4">
                                <ShieldCheck className="mb-2 h-6 w-6" />
                                Attendance Tracking
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4">
                                Dashboard Analytics
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center justify-center p-6 lg:p-12">
                        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-slate-800">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-slate-500">
                                    Login to continue
                                </p>
                            </div>

                            <LoginForm />

                            <p className="mt-6 text-center text-sm text-slate-500">
                                Smart Campus ERP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}