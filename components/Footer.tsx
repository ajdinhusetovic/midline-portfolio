import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="wordmark">
              <Image
                src="/logo-light.svg"
                alt="Midline Code"
                width={170}
                height={76}
                className="studio-logo footer-logo"
              />
            </Link>
            <p>
              An independent creative marketing studio bringing websites,
              design, and social media together.
            </p>
            <p>
              Based in North Carolina.
              <br />
              Collaborating with businesses across the USA.
            </p>
          </div>
          <div>
            <p className="eyebrow">Take a look around</p>
            <Link href="/services">Our services</Link>
            <Link href="/our-work">Selected work</Link>
            <Link href="/about-us">The studio</Link>
            <Link href="/why-us">Our approach</Link>
          </div>
          <div>
            <p className="eyebrow">Let’s make something good</p>
            <a href="mailto:contact@midlinecode.com">contact@midlinecode.com</a>
            <a href="tel:+17325341704">+1 (732) 534-1704</a>
            <Link href="/contact">Start a conversation ↗</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Midline Code. All rights reserved.
          </span>
          <span>Web / Design / Social</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
