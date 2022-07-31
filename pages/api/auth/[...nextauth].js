// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// pages/api/[...nextauth].js
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "lib/prisma";

// Instantiate Prisma Client
// pages/api/auth/[...nextauth].js
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
