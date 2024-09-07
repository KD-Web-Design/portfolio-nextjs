import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { useEffect } from "react";

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
    <html lang="fr">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, " w-full font-sans h-full bg-gradient-to-br from-violet-950 to-fuchsia-950 text-foreground ")}><Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white" />{children}</body>
    </html>
  );
}
