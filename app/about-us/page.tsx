import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Midline Code",
  "Meet Ajdin Husetovic, the developer behind Midline Code websites for small businesses in North Carolina and across the US.",
  "/about-us",
);
export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Meet your developer.</p>
          <h1 className="page-title">
            A personal approach.
            <br />
            <span className="text-blue-700">
              A shared focus on your business.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Midline Code builds websites for small and service-based businesses
            in North Carolina and across the US. Meet the person responsible
            for bringing your website to life.
          </p>
        </div>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Ajdin Husetovic
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-blue-700">
              Developer
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Ajdin handles design implementation, development, responsive
              behavior, and launch. He turns your service information and
              project goals into a website that works across devices and makes
              it easy for customers to contact your business.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-6 md:p-10 text-white">
            <h2 className="text-2xl font-bold">
              Mile Cristo
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-blue-200">
              Client Coordination
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Based in North Carolina, Mile supports client communication,
              project coordination, and local networking. Any in-person needs
              are discussed and agreed upon for your project.
            </p>
          </div>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">
            What working with us looks like
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We agree on the pages, features, price, and content requirements
            before work begins. You review the website during development, with
            two revision rounds included in the Business Website package.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Payment is split into a 50% deposit to begin and 50% before launch.
            Our initial focus is professional small-business websites starting
            at $999 USD. Extra functionality and support are discussed
            separately.
          </p>
          <Link href="/contact" className="primary-link mt-7">
            Request a quote
          </Link>
        </section>
      </div>
    </main>
  );
}
