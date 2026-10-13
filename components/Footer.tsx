import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-2xl font-bold text-white mb-4">Midline Code</p>
            <p className="leading-relaxed max-w-sm">
              A small team building websites for North Carolina and US small
              businesses.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-white font-bold mb-4">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about-us" },
                { label: "Services", href: "/services" },
                { label: "Process", href: "/#our-process" },
                { label: "Our work", href: "/our-work" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-white font-bold mb-4">Contact</p>
            <a
              href="mailto:contact@midlinecode.com"
              className="break-all hover:text-blue-300"
            >
              contact@midlinecode.com
            </a>
            <br />
            <a
              href="tel:+17325341704"
              className="inline-flex mt-3 hover:text-blue-300"
            >
              +1 (732) 534-1704
            </a>
            <br />
            <Link
              href="/contact"
              className="mt-5 inline-flex border border-slate-500 px-5 py-3 rounded-xl hover:border-blue-300"
            >
              Request a quote
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Midline Code. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
