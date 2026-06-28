import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize() {
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth }: any) {
      return !!auth;
    },

    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }: any) {
      if (session.user) {
        (session.user as any).role = token.role;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;