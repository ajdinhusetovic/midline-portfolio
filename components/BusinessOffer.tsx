import Link from "next/link";

const inclusions = [
  "Up to five pages",
  "Responsive design",
  "Contact or quote form",
  "Basic technical SEO",
  "Analytics setup",
  "Domain and deployment assistance",
  "Two revision rounds",
];
export default function BusinessOffer() {
  return (
    <div
      id="business-website"
      className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-12"
    >
      <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-3">
        A clear starting point
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Business Website
      </h2>
      <p className="mt-3 text-2xl font-bold text-blue-700">
        Starting at $999 USD
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-slate-700">
        {inclusions.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-blue-700">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-semibold text-slate-900">
        Approximately 7–10 business days after receiving all required client
        content.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Payment is split into a 50% deposit to begin and 50% before launch.
        Final pricing depends on scope. Third-party services, additional pages,
        custom functionality, copywriting, and work outside the agreed scope may
        cost extra. We confirm the scope and quote before work begins.
      </p>
      <Link
        href="/contact"
        className="mt-7 inline-flex justify-center rounded-xl bg-slate-900 px-7 py-3 font-bold text-white hover:bg-blue-700"
      >
        Request a quote
      </Link>
    </div>
  );
}
