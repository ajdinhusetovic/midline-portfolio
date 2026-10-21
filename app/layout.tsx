import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata, siteUrl } from "@/lib/metadata";
export const metadata: Metadata = {
  ...pageMetadata(
    "Creative Marketing Studio | Web, Design & Social",
    "An independent creative marketing studio for businesses across the USA. Web design and development, graphic design, online marketing, and social media.",
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: "Creative Marketing Studio | Web, Design & Social | Midline Code",
    template: "%s | Midline Code",
  },
  icons: { icon: "/2.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
