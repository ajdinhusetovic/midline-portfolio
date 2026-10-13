import Image from "next/image";
import Link from "next/link";
export default function AboutUs() {
  return (
    <section id="about-us" className="scroll-mt-28 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
        <div className="rounded-[2rem] bg-slate-50 p-5 border border-slate-200">
          <Image
            src="/map-team.svg"
            alt="Illustration of a small team working together"
            width={800}
            height={522}
            className="w-full h-auto"
          />
        </div>
        <div>
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">
            Meet the developer behind Midline Code.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Working together.
            <br />
            <span className="text-blue-700">Serving your business.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Ajdin Husetovic handles design implementation, development,
              responsive behavior, and launch for Midline Code websites.
            </p>
            <p>
              Mile Cristo is based in North Carolina and supports client
              communication, project coordination, and local networking. We
              work directly with you to define the scope,
              review the design, and get your website ready to launch.
            </p>
          </div>
          <Link
            href="/about-us"
            className="mt-7 inline-flex font-bold text-blue-700 py-3 underline underline-offset-4"
          >
            Meet Ajdin & Mile →
          </Link>
        </div>
      </div>
    </section>
  );
}
