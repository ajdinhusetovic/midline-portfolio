import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lato,
  Work_Sans,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Midline Code",
  description: "Web Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/2.svg" />
      <body
        className={`${montserrat.className} antialiased h-full w-full bg-cover bg-center overflow-x-hidden`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // still good, but tweak position
          backgroundPosition: "right center", // ensure the main part of image stays visible
          backgroundAttachment: "scroll",
        }}
      >
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
