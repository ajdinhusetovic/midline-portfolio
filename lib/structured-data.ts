import { siteUrl } from "./metadata";
const serviceAreas = [{ "@type": "Country", name: "United States" }];
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Midline Code",
      url: siteUrl,
      logo: `${siteUrl}/1.svg`,
      email: "contact@midlinecode.com",
      description:
        "An independent creative marketing studio providing web design and development, graphic design, online marketing, and social media services for businesses across the USA.",
      areaServed: serviceAreas,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Midline Code",
      url: siteUrl,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
export const websiteServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/services#business-website`,
  name: "Business Website",
  serviceType: "Small-business web design and development",
  url: `${siteUrl}/services`,
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: serviceAreas,
  description:
    "Up to five pages, responsive design, a contact or quote form, basic technical SEO, analytics setup, domain and deployment assistance, and two revision rounds. Final pricing depends on scope.",
  offers: {
    "@type": "Offer",
    name: "Business Website — starting at $999 USD",
    url: `${siteUrl}/services#business-website`,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 999,
      priceCurrency: "USD",
    },
  },
};
