import type { Metadata } from "next";

export const siteUrl = "https://www.midlinecode.com";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Midline Code`,
      description,
      url: path,
      siteName: "Midline Code",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Midline Code — Web, design & social. A creative marketing studio.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Midline Code`,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
