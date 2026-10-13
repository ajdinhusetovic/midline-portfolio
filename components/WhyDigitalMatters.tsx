import Link from "next/link";
import { FiTrendingUp, FiShield, FiZap, FiTarget } from "react-icons/fi";
const benefits = [
  {
    icon: FiZap,
    title: "Easy to use",
    description:
      "Responsive layouts and optimized assets help visitors explore your services on phones and computers.",
  },
  {
    icon: FiTarget,
    title: "Clear next steps",
    description:
      "Visible contact details and quote forms give interested visitors a straightforward way to reach you.",
  },
  {
    icon: FiShield,
    title: "A professional presence",
    description:
      "Consistent design and clear service information help customers understand who you are and what you do.",
  },
  {
    icon: FiTrendingUp,
    title: "Search-ready foundations",
    description:
      "Basic technical SEO includes descriptive metadata, semantic pages, and crawlable site structure.",
  },
];
export default function WhyDigitalMatters() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-blue-300 uppercase tracking-widest text-sm font-bold mb-4">
            Practical benefits
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Make a good first impression.
            <br />
            <span className="text-blue-300">Make contacting you simple.</span>
          </h2>
          <p className="mt-6 text-slate-300 text-lg">
            Your website should explain your services, answer common questions,
            and help customers take the next step.
          </p>
          <Link
            href="/why-us"
            className="mt-7 inline-flex py-3 font-bold text-blue-300 underline underline-offset-4"
          >
            Why work with Midline Code →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10"
            >
              <Icon
                aria-hidden="true"
                className="text-blue-300 text-3xl mb-4"
              />
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
