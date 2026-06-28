"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          redirectTo: "/login",
        })
      }
      className="w-full rounded-lg px-3 py-2 text-left text-red-600 hover:bg-red-50"
    >
      🚪 Logout
    </button>
  );
}