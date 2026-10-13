import Link from "next/link";
import BusinessOffer from "@/components/BusinessOffer";
import StructuredData from "@/components/StructuredData";
import { websiteServiceSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Small Business Web Design in North Carolina",
  "Small-business web design for Fayetteville, Charlotte, and North Carolina. Websites from $999 USD with responsive pages, a contact form, and launch assistance.",
  "/services",
);
export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">Web design & development</p>
          <h1 className="page-title">
            Small-business web design.
            <br />
            <span className="text-blue-700">
              Built for North Carolina & US businesses.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600">
            For small and service-based businesses in North Carolina and across
            the US, including Fayetteville and Charlotte. Present your services,
            answer customer questions, and make contacting you straightforward.
          </p>
        </div>
        <BusinessOffer />
        <StructuredData data={websiteServiceSchema} />
        <section
          id="ongoing-support"
          className="scroll-mt-28 mt-10 rounded-[2rem] bg-slate-900 p-6 md:p-12 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Support after launch
          </h2>
          <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
            If you need ongoing hosting, maintenance, backups, or small content
            updates, we can discuss a separate monthly arrangement.
            Availability, coverage, and fees are confirmed in your quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-blue-300 font-bold underline underline-offset-4"
          >
            Ask about ongoing support →
          </Link>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Small-business website questions
          </h2>
          <div className="mt-6 space-y-6 text-slate-600">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                How much does a small-business website cost?
              </h3>
              <p>
                Our Business Website package starts at $999 USD for up to five
                pages. Final pricing depends on the agreed scope. Additional
                pages, custom functionality, copywriting, and third-party
                services may cost extra.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                Do you serve Fayetteville and Charlotte businesses?
              </h3>
              <p>
                Yes. We provide web design and development for small businesses
                in Fayetteville, Charlotte, and across North Carolina, as well
                as other US businesses. North Carolina is our base for local
                communication and coordination. Any in-person needs are agreed
                upon for your project.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                How long does a business website take?
              </h3>
              <p>
                Approximately 7–10 business days after receiving all required
                client content for the starter scope. We confirm timing before
                work begins; additional features and delayed content can change
                the schedule.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                What content do you need?
              </h3>
              <p>
                Your service descriptions, business details, logo if available,
                and approved photos. Copywriting is outside the starter scope
                unless included in your quote.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                What does basic technical SEO include?
              </h3>
              <p>
                Page titles and descriptions, semantic structure, and sitemap
                and robots configuration. Search rankings and business results
                are not guaranteed.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                What if I need more?
              </h3>
              <p>
                Additional pages and custom functionality are quoted separately.
                We confirm what is included before starting.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="primary-link">
              Request a quote
            </Link>
            <Link href="/our-work" className="secondary-link">
              View our work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
