import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Let’s talk about your project",
  "Tell us about your website, graphic design, marketing, or social media needs. Midline Code works with businesses across the USA.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h1 className="page-title">
            What’s your
            <br />
            <span className="serif accent">next chapter?</span>
          </h1>
          <p className="lead">
            A new website? A more consistent brand? Social media that finally
            has a plan? Tell us where you are and what you have in mind.
          </p>
          <p className="muted leading-8 mt-6">
            We’ll review your ideas, talk through the right services, and
            confirm the scope and pricing before work begins.
          </p>
          <div className="mt-10 pt-7 border-t border-[#ddded3]">
            <p className="eyebrow">Prefer email?</p>
            <a
              href="mailto:contact@midlinecode.com"
              className="text-link break-all"
            >
              contact@midlinecode.com ↗
            </a>
            <p className="muted text-xs mt-7 leading-6">
              Based in North Carolina. Working across the USA.
              <br />
              Business websites from $999 USD.
              <br />
              Design, marketing, and social media are quoted to scope.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
