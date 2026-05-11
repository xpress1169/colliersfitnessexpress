import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colliers Fitness Express LLC | Premium Personal Training & Gym",
  description: "Modern gym and fitness company specializing in personal training, HIIT, and recovery. Transform your body with Colliers Fitness.",
  openGraph: {
    title: "Colliers Fitness Express LLC",
    description: "Premium fitness training and recovery programs.",
    type: "website",
    siteName: "Colliers Fitness Express LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
