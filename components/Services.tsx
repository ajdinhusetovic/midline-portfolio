import Link from "next/link";
import { services } from "@/lib/services";
export default function Services() {
  return (
    <section className="section wrap" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What we bring to the table</p>
          <h2 className="section-title">
            One studio.
            <br />
            <span className="serif">A more connected brand.</span>
          </h2>
        </div>
        <p>
          Start with what you need now. Build on it as you grow. We connect the
          dots between your website, your visuals, and your voice.
        </p>
      </div>
      <div className="service-list">
        {services.map((s) => (
          <Link className="service-row" href={`/services#${s.id}`} key={s.id}>
            <span className="service-number">{s.number} /</span>
            <h3>{s.title}</h3>
            <div>
              <p>{s.short}</p>
              <p className="tags">{s.tags}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
