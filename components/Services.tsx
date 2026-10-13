import BusinessOffer from "./BusinessOffer";
import Link from "next/link";
export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-3">
            Built for your business
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            A clear offer. A website that fits.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            For service businesses that need a professional home online, clear
            information, and a straightforward way for customers to request a
            quote.
          </p>
        </div>
        <BusinessOffer />
        <Link
          href="/services"
          className="mt-6 inline-flex py-3 text-blue-700 font-bold underline underline-offset-4"
        >
          See package details →
        </Link>
      </div>
    </section>
  );
}
