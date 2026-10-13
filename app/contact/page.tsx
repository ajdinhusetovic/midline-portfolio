import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Request a website quote",
  "Tell Midline Code about your small-business website. Business websites start at $999 USD; final pricing depends on your scope.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <p className="eyebrow">Let’s talk about your business</p>
          <h1 className="page-title">Request a quote.</h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Business websites start at{" "}
            <strong className="text-slate-900">$999 USD</strong>. Tell us what
            you need, and we will confirm the scope and price before work
            begins.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            <Link
              href="/services"
              className="text-blue-700 underline underline-offset-4"
            >
              See the package, timeline, and scope details
            </Link>
            .
          </p>
          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Prefer email?</h2>
            <a
              href="mailto:contact@midlinecode.com"
              className="mt-3 inline-flex text-blue-700 underline underline-offset-4 break-all"
            >
              contact@midlinecode.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
