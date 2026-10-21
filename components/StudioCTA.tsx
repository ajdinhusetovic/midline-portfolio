import Link from "next/link";
export default function StudioCTA() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 className="section-title">
            Let’s make your business
            <br />
            <span className="serif">harder to scroll past.</span>
          </h2>
        </div>
        <Link href="/contact" className="primary-link">
          Tell us what you’re thinking <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
