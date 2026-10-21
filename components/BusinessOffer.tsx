import Link from "next/link";
export default function BusinessOffer() {
  return (
    <aside id="business-website" className="offer">
      <p className="eyebrow">A clear starting point</p>
      <h3>Business Website</h3>
      <p className="price">From $999 USD</p>
      <p>
        Up to five pages, responsive design, a contact or quote form, basic
        technical SEO, analytics setup, domain and deployment assistance, and
        two revision rounds.
      </p>
      <p>
        Approximately 7–10 business days after all required content is received.
        50% deposit to begin; 50% before launch.
      </p>
      <p>
        Final pricing depends on scope. Additional pages, copywriting, custom
        functionality, third-party services, and ongoing support are quoted
        separately.
      </p>
      <Link href="/contact" className="text-link">
        Talk about your website ↗
      </Link>
    </aside>
  );
}
