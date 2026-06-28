import {
  Users,
  ClipboardCheck,
  BookOpen,
  Bell,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Overview of Smart Campus ERP
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Students"
          value={245}
          icon={Users}
          color="bg-blue-500"
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon={ClipboardCheck}
          color="bg-green-500"
        />

        <StatCard
          title="Assignments"
          value={18}
          icon={BookOpen}
          color="bg-orange-500"
        />

        <StatCard
          title="Notices"
          value={6}
          icon={Bell}
          color="bg-purple-500"
        />
      </div>

      {/* Main Section */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* Student Performance */}
        <div className="xl:col-span-2 rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">
              Student Performance
            </h2>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Semester 6
            </span>
          </div>

          {[
            {
              subject: "Computer Networks",
              value: 85,
              color: "bg-blue-500",
              icon: "💻",
            },
            {
              subject: "DBMS",
              value: 70,
              color: "bg-green-500",
              icon: "🗄️",
            },
            {
              subject: "Operating System",
              value: 90,
              color: "bg-purple-500",
              icon: "⚙️",
            },
          ].map((item) => (
            <div key={item.subject} className="mb-8">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>

                  <span className="font-semibold text-slate-700">
                    {item.subject}
                  </span>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">
                  {item.value}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>

            </div>
          ))}

        </div>

        {/* Schedule */}
        <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">

          <h2 className="mb-8 text-2xl font-bold text-slate-800">
            Today's Schedule
          </h2>

          {[
            {
              time: "09:00 AM",
              title: "DBMS Lecture",
              room: "Room 302",
              icon: "📘",
            },
            {
              time: "11:00 AM",
              title: "AI Lab",
              room: "Lab 5",
              icon: "🧪",
            },
            {
              time: "02:00 PM",
              title: "Faculty Meeting",
              room: "Conference Hall",
              icon: "👨‍🏫",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="mb-4 rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    {item.time}
                  </p>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.room}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}