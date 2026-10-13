import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy Policy",
  "How Midline Code handles information submitted through its website contact form.",
  "/privacy",
);
export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="max-w-3xl mx-auto px-6">
        <p className="eyebrow">Your contact information</p>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="mt-6 text-slate-600 leading-relaxed">
          This page explains how the Midline Code website handles inquiries
          submitted through its contact form.
        </p>
        <div className="mt-8 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Information you provide
            </h2>
            <p>
              The form asks for your name, email address, and project message.
              Please do not include passwords, payment details, or other
              sensitive information. A hidden field helps filter automated spam
              submissions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              How the form uses it
            </h2>
            <p>
              Your inquiry is sent to our business email address through Resend,
              our email-delivery provider. We use the information to respond,
              discuss your project, and prepare a quote. The website does not
              create a separate database of contact submissions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Providers and team access
            </h2>
            <p>
              Resend and our email provider process the message to deliver and
              store it. Our website hosting provider may process technical
              request information such as IP addresses and server logs. The team
              members handling your inquiry access it to respond to your
              request. Provider processing and storage locations may vary, and
              retention is governed by their services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Cookies and analytics
            </h2>
            <p>
              This version of the website does not include advertising trackers
              or an analytics integration. If we add analytics that changes how
              visitor information is handled, we will update this page.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Questions and requests
            </h2>
            <p>
              To ask about your inquiry information, request a correction, or
              request deletion, email{" "}
              <a
                href="mailto:contact@midlinecode.com"
                className="text-blue-700 underline underline-offset-4 break-all"
              >
                contact@midlinecode.com
              </a>
              . Messages are handled through our email systems, including any
              provider retention or backups.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
