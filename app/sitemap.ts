import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/services",
    "/our-work",
    "/about-us",
    "/why-us",
    "/contact",
    "/privacy",
  ].map((path) => ({ url: `${siteUrl}${path === "/" ? "" : path}` }));
}
