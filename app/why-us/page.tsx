import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Why work with us",
  "Clear scope, direct communication, responsive design, and practical website deliverables for small businesses.",
  "/why-us",
);
const reasons = [
  [
    "Clear scope and pricing",
    "Business websites start at $999 USD. Your quote defines the pages, features, revisions, and any additional costs.",
  ],
  [
    "Direct communication",
    "Work directly with a small web-development team, with North Carolina as our base for local communication and project coordination.",
  ],
  [
    "Designed around your customers",
    "We organize your services, business details, and contact options so visitors can understand your business and take the next step.",
  ],
  [
    "Practical technical foundations",
    "Responsive design, basic technical SEO, analytics setup, and deployment assistance are included in the starter package.",
  ],
];
export default function WhyUsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">Why Midline Code</p>
          <h1 className="page-title">
            A website built around
            <br />
            <span className="text-blue-700">what your business needs.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            A professional presence online, a defined scope, and a small team
            you can speak with directly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map(([title, text]) => (
            <section
              key={title}
              className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6 md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="primary-link">
            Request a quote
          </Link>
          <Link href="/our-work" className="secondary-link">
            View our work
          </Link>
        </div>
      </div>
    </main>
  );
}
