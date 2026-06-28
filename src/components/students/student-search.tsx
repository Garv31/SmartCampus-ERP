"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function StudentSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/admin/students?${params.toString()}`);
  }

  return (
    <input
      type="text"
      placeholder="Search by name, email or roll number..."
      defaultValue={searchParams.get("search") ?? ""}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full rounded-2xl border bg-white p-4 shadow outline-none"
    />
  );
}