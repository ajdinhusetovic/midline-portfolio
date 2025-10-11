export default function Footer() {
  return (
    <footer className="text-gray-400 py-10 px-6 bg-white/5 backdrop-blur-sm mb-5 mt-20 max-w-5xl mx-auto rounded-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">MidlineCode</h2>
          <p className="text-gray-500">
            Building fast, modern websites that make businesses stand out.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:contact@midlinecode.com"
              className="hover:text-white transition"
            >
              contact@midlinecode.com
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:+17325341704" className="hover:text-white transition">
              +17325341704
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MidlineCode. All rights reserved.
      </div>
    </footer>
  );
}
