import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import { AmbientBackground, CursorGlow } from "@/components/ambient";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Crelolabs | Premium Digital Products for Modern Builders",
    template: "%s | Crelolabs"
  },
  description:
    "Crelolabs sells premium digital systems for lifestyle, business, creativity, productivity, automation, travel, finance, and income growth.",
  keywords: ["digital products", "AI workflows", "n8n automations", "creator tools", "travel guides", "finance templates"],
  openGraph: {
    title: "Crelolabs",
    description: "Digital systems designed for ambitious people.",
    type: "website",
    siteName: "Crelolabs"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ToastProvider>
          <AmbientBackground />
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
