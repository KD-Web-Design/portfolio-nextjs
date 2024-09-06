import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "KD Web Design",
  description: "Web developper using React, Typescript and Tailwind.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, "font-sans h-full bg-gradient-to-br from-purple-950 to-fuchsia-950 text-foreground ")}>{children}</body>
    </html>
  );
}
