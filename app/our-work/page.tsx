import Link from "next/link";
import FeaturedWork from "@/components/FeaturedWork";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our work",
  "Explore two website projects: K&S Designs & Builds and The Chicken Brand restaurant concept.",
  "/our-work",
);
export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="eyebrow">Selected website projects</p>
        <h1 className="page-title">
          Our work.
          <br />
          <span className="text-blue-700">
            Different businesses. Distinct designs.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Explore two completed website projects, from a construction and
          remodeling website to a restaurant concept with a bold visual style.
        </p>
      </div>
      <FeaturedWork full />
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="rounded-[2rem] bg-slate-900 text-white p-6 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            Let’s talk about your website.
          </h2>
          <p className="mt-4 text-slate-300">
            Business websites start at $999 USD. We confirm the price for your
            scope.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-blue-700 hover:bg-blue-800 px-8 py-3 font-bold"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </main>
  );
}
