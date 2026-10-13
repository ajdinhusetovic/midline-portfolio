import Link from "next/link";
export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-shell min-h-[70svh] flex items-center justify-center px-6 text-center"
    >
      <div>
        <p className="text-6xl text-blue-700 font-bold">404</p>
        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 text-slate-600">
          Return to the homepage or get in touch about your website.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link href="/" className="primary-link">
            Go to homepage
          </Link>
          <Link href="/contact" className="secondary-link">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
