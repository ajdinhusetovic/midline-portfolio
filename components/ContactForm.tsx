"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  contactLimits,
  validateContact,
  type ContactErrors,
} from "@/lib/contact-validation";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const busyRef = useRef(false);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setErrors((current) => ({ ...current, [event.target.name]: undefined }));
  };
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current) return;
    const result = validateContact(values);
    setErrors(result.errors);
    setFeedback("");
    setSuccess(false);
    const firstError = Object.keys(result.errors)[0];
    if (firstError) {
      const field = formRef.current?.querySelector<HTMLElement>(
        `[name="${firstError}"]`,
      );
      field?.focus({ preventScroll: true });
      field?.scrollIntoView({ block: "center", behavior: "instant" });
      return;
    }
    busyRef.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Unable to send");
      setSuccess(true);
      setFeedback(
        "Thanks — your inquiry has been sent. We will review your project details and reply by email.",
      );
      setValues({ name: "", email: "", message: "", website: "" });
    } catch {
      setFeedback(
        "We couldn’t send your inquiry. Please try again, or email contact@midlinecode.com directly. Your details are still in the form.",
      );
    } finally {
      busyRef.current = false;
      setSending(false);
      requestAnimationFrame(() => {
        statusRef.current?.focus({ preventScroll: true });
        statusRef.current?.scrollIntoView({ block: "center", behavior: "instant" });
      });
    }
  }
  const fieldClass =
    "w-full bg-white border border-slate-300 p-3 rounded-xl text-slate-900 focus:border-blue-700";
  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      aria-busy={sending}
      className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-10 space-y-6"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-slate-900 font-bold mb-2"
        >
          Name <span className="font-normal text-sm">(required)</span>
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          maxLength={contactLimits.name}
          value={values.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-slate-900 font-bold mb-2"
        >
          Email <span className="font-normal text-sm">(required)</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={contactLimits.email}
          value={values.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-slate-900 font-bold mb-2"
        >
          What does your business need?{" "}
          <span className="font-normal text-sm">(required)</span>
        </label>
        <p id="message-hint" className="mb-3 text-sm text-slate-600">
          Tell us about your business, the pages you need, and your preferred
          timing. Up to 5,000 characters. Please don’t include sensitive
          information.
        </p>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          maxLength={contactLimits.message}
          value={values.message}
          onChange={onChange}
          aria-invalid={!!errors.message}
          aria-describedby={`message-hint${errors.message ? " message-error" : ""}`}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>
      <div aria-hidden="true" className="honeypot">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          value={values.website}
          onChange={onChange}
        />
      </div>
      <p className="text-sm text-slate-600">
        We use these details to respond to your inquiry. Read our{" "}
        <Link
          href="/privacy"
          className="text-blue-700 underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-xl bg-slate-900 text-white px-7 py-4 font-bold hover:bg-blue-700 disabled:opacity-70 disabled:cursor-wait"
      >
        {sending ? "Sending your inquiry…" : "Request a quote"}
      </button>
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={
          feedback
            ? `rounded-xl p-4 text-sm leading-relaxed ${success ? "bg-green-50 text-green-900 border border-green-200" : "bg-red-50 text-red-900 border border-red-200"}`
            : "sr-only"
        }
      >
        {feedback}
      </div>
    </form>
  );
}
