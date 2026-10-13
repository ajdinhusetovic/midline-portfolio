import Link from "next/link";
const steps = [
  {
    title: "Agree on the scope",
    text: "We discuss your business, pages, and features, then confirm the quote and what is included.",
  },
  {
    title: "Gather content & design",
    text: "You provide the required text, photos, and business details. We shape the layout around your services.",
  },
  {
    title: "Build & review",
    text: "We develop the responsive website and work through two revision rounds within the agreed scope.",
  },
  {
    title: "Check & launch",
    text: "We check the main pages and contact form, help with the domain and deployment, and discuss any ongoing support you need.",
  },
];
export default function OurProcess() {
  return (
    <section id="our-process" className="scroll-mt-28 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-blue-700 text-sm uppercase tracking-widest font-bold mb-4">
            Our process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Simple steps. Clear expectations.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Approximately 7–10 business days after receiving all required client
            content. We confirm timing for your scope before starting.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-100"
            >
              <span
                aria-hidden="true"
                className="text-blue-700 text-3xl font-bold"
              >
                0{index + 1}
              </span>
              <h3 className="mt-4 mb-3 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center rounded-[2rem] bg-slate-900 p-6 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready for a website that fits your business?
          </h3>
          <p className="mt-4 text-slate-300">
            Tell us what you need. We will confirm the scope and price.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-blue-700 hover:bg-blue-800 px-8 py-3 font-bold"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
