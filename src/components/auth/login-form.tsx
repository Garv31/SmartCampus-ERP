"use client";

import { login } from "@/actions/login";
import { useState } from "react";

export function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    const formData = new FormData(e.currentTarget);

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          name="email"
          type="email"
          required
          placeholder="admin@smartcampus.com"
          className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">
          Password
        </label>

        <input
          name="password"
          type="password"
          required
          placeholder="admin123"
          className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="h-12 w-full rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}