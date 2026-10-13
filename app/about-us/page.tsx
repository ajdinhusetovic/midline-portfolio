import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About our web-development team",
  "Meet Midline Code: a small web-development team serving North Carolina and US businesses, with North Carolina as our base for local communication.",
  "/about-us",
);
export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Small team. Direct communication.</p>
          <h1 className="page-title">
            A small team.
            <br />
            <span className="text-blue-700">
              A shared focus on your business.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Midline Code is a small web-development team serving small and
            service-based businesses in North Carolina and across the US.
          </p>
        </div>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Websites built around your services
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We focus on responsive pages, clear service information, and
              straightforward ways for customers to contact your business. Your
              website is shaped around the services you offer and the customers
              you want to reach.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-6 md:p-10 text-white">
            <h2 className="text-2xl font-bold">
              Coordination in North Carolina
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              North Carolina is our base for local communication, networking,
              and coordination. Any in-person needs are discussed and agreed
              upon for your project.
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
