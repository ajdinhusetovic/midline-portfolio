import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-meta">
        <p className="eyebrow">Independent studio. Connected thinking.</p>
        <span className="status">
          Based in North Carolina. Working across the USA.
        </span>
      </div>
      <div className="hero-layout">
        <div>
          <h1 className="display">
            Good business.
            <br />
            Great <span className="serif accent">presence.</span>
          </h1>
          <p className="lead">
            Websites, design, and social media that make your business feel like
            your business. All brought together by one creative marketing
            studio.
          </p>
          <div className="actions">
            <Link href="/contact" className="primary-link">
              Let’s build your presence <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/our-work" className="secondary-link">
              Explore our work
            </Link>
          </div>
          <p className="hero-note">
            Built for small businesses with something good to share.
          </p>
        </div>
        <div
          className="hero-art"
          aria-label="A selection of our website work, social media results, and an illustrative design study"
        >
          <div className="art-topline">
            <span>A LITTLE OF WHAT WE DO</span>
            <span>WEB / DESIGN / SOCIAL</span>
          </div>
          <div className="hero-browser">
            <Image
              src="/ks-website.webp"
              alt="K&S Designs & Builds website project"
              width={1440}
              height={683}
              priority
              sizes="(max-width:767px) 85vw, 450px"
            />
          </div>
          <div className="design-specimen">
            <small>THE EVERYDAY / DESIGN STUDY</small>
            <strong>
              Make
              <br />a little
              <br />
              <i>noise.</i>
            </strong>
            <small>GOOD THINGS DESERVE TO BE SEEN.</small>
          </div>
          <div className="art-result">
            <strong>+39.85% ↗</strong>
            <span>
              Savory Southern audience growth
              <br />
              650 → 909 followers · 4 months
            </span>
          </div>
          <span className="art-bottom">
            Design study shown for illustration.
          </span>
        </div>
      </div>
    </section>
  );
}
