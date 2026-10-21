import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import CaseStudy from "./CaseStudy";
export default function FeaturedWork({ full = false }: { full?: boolean }) {
  return (
    <section className={full ? "" : "section work-section"} id="work">
      <div className="wrap">
        {!full && (
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work & a little proof</p>
              <h2 className="section-title">
                Different businesses.
                <br />
                <span className="serif">Distinct possibilities.</span>
              </h2>
            </div>
            <Link className="text-link" href="/our-work">
              See our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
        <div className="work-grid">
          {projects.map((p, i) => (
            <article className="work-card" key={p.title}>
              <div
                className="work-image"
                style={i === 1 ? { background: "#e3cfb8" } : undefined}
              >
                <Image
                  src={p.image}
                  alt={`${p.title} website preview`}
                  width={1440}
                  height={850}
                  sizes="(max-width:767px) 90vw, 550px"
                />
              </div>
              <div className="work-info">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.category}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.linkLabel}: ${p.title} (opens in new tab)`}
                >
                  ↗
                </a>
              </div>
              <p className="work-description">{p.description}</p>
            </article>
          ))}
        </div>
        <CaseStudy full={full} />
      </div>
    </section>
  );
}
