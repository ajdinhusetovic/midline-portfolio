import Link from "next/link";
const areas = [
  {
    name: "Fayetteville",
    description:
      "A clear online home for your local service business: explain what you do, show your work, and help customers request a quote.",
  },
  {
    name: "Charlotte",
    description:
      "Professional web design for small businesses that need responsive pages, clear service information, and an easy contact process.",
  },
  {
    name: "North Carolina & the US",
    description:
      "We also work with businesses in Raleigh and across North Carolina, with remote project communication available nationwide.",
  },
];
export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="scroll-mt-28 py-16 md:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-9">
          <p className="eyebrow">North Carolina & nationwide</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Looking for a web developer in Fayetteville or Charlotte?
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Midline Code provides web design and development for small and
            service-based businesses throughout North Carolina. From contractors
            and home-service businesses to restaurants and independent
            professionals, we focus on clear services, credible presentation,
            and simple ways to get in touch.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((area) => (
            <div
              key={area.name}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{area.name}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="secondary-link">
            Explore the $999 website package
          </Link>
          <Link href="/contact" className="primary-link">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
