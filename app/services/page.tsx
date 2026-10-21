import Link from "next/link";
import { services } from "@/lib/services";
import BusinessOffer from "@/components/BusinessOffer";
import StudioCTA from "@/components/StudioCTA";
import StructuredData from "@/components/StructuredData";
import { websiteServiceSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Web, design & social media services",
  "Web design and development, graphic design, online marketing, and social media management for businesses across the USA.",
  "/services",
);
const faqs = [
  [
    "Can we start with just one service?",
    "Absolutely. Start with a website, a specific design project, or social media support. We can plan connected services as your needs develop.",
  ],
  [
    "How are marketing and social media services priced?",
    "These are quoted around your channels, content volume, deliverables, and management needs. Any paid advertising budget, printing costs, and third-party fees are identified separately in the quote.",
  ],
  [
    "What files and usage rights will I receive?",
    "We confirm digital and print deliverables, file formats, and usage rights in your project agreement. Any third-party fonts, stock assets, or licensing requirements are identified before delivery.",
  ],
  [
    "How does social account management work?",
    "We agree on platforms, posting frequency, approval checkpoints, and reporting. If you need story or private-message responses, we also define coverage times, response guidelines, and which inquiries come back to your team.",
  ],
  [
    "Do you work with businesses outside North Carolina?",
    "Yes. We work with businesses throughout the USA. North Carolina is our base for coordination, with remote project communication available nationwide.",
  ],
  [
    "What happens after my website launches?",
    "We can discuss a separate arrangement for hosting, maintenance, backups, and content updates. Coverage and fees are confirmed before ongoing support begins.",
  ],
];
export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="page-shell wrap">
        <header className="page-intro">
          <p className="eyebrow">Our services</p>
          <h1 className="page-title">
            A stronger presence.
            <br />
            <span className="serif accent">From every angle.</span>
          </h1>
          <p className="lead">
            Bring your website, your brand, and your social channels into the
            same conversation. We help you choose the work that fits your
            business and turn it into a clear plan.
          </p>
          <div className="actions">
            {services.map((s) => (
              <Link className="secondary-link" key={s.id} href={`#${s.id}`}>
                {s.number} /{" "}
                {s.id === "web"
                  ? "Websites"
                  : s.id === "design"
                    ? "Graphic design"
                    : "Social & marketing"}{" "}
                ↓
              </Link>
            ))}
          </div>
        </header>
        {services.map((s) => (
          <section className="detail-section" id={s.id} key={s.id}>
            <div>
              <p className="eyebrow">{s.number} / What we do</p>
              <h2>{s.title}</h2>
              <Link className="text-link" href="/contact">
                Let’s talk about your project ↗
              </Link>
            </div>
            <div>
              <p>{s.intro}</p>
              <ul className="deliverables">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {s.id === "web" ? (
                <BusinessOffer />
              ) : s.id === "design" ? (
                <p>
                  Digital and print deliverables, formats, and usage rights are
                  agreed in your quote. Printing and production can be scoped
                  separately.
                </p>
              ) : (
                <p>
                  Content production, account management, and paid advertising
                  can be scoped separately or together. Ad spend is separate
                  from management fees; channels, response coverage, and
                  approvals are agreed before starting.
                </p>
              )}
            </div>
          </section>
        ))}
        <StructuredData data={websiteServiceSchema} />
        <section className="section faq">
          <p className="eyebrow">A few useful answers</p>
          <h2 className="section-title mb-8">
            Before we <span className="serif">get started.</span>
          </h2>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
      </div>
      <StudioCTA />
    </main>
  );
}
