import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata, siteUrl } from "@/lib/metadata";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  ...pageMetadata(
    "North Carolina Web Design for Small Businesses",
    "Web design and development for small businesses in North Carolina, including Fayetteville and Charlotte. Professional business websites starting at $999 USD.",
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: "North Carolina Web Design for Small Businesses | Midline Code",
    template: "%s | Midline Code",
  },
  icons: { icon: "/2.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
