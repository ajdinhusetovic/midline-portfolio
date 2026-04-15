import React from "react";
import { FiAward, FiGlobe, FiZap, FiMapPin, FiMail } from "react-icons/fi";

export const metadata = {
  title: "About MidlineCode | Expert Web Developer in North Carolina",
  description:
    "MidlineCode is a premier digital agency specializing in custom Next.js development and graphic design. Based in North Carolina, we serve Fayetteville, Raleigh, and clients nationwide with high-performance alternatives to WordPress.",
  keywords: [
    "Web Developer North Carolina",
    "Web Design Fayetteville NC",
    "Next.js Developer USA",
    "Custom Website Agency",
    "MidlineCode",
  ],
};

const AboutPage = () => {
  return (
    <main className="pt-32 pb-24 bg-white mt-22">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Optimized for "Web Developer North Carolina" */}
        <div className="max-w-4xl mb-24">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            Premier Digital Agency
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
            Web Development <br />
            <span className="text-blue-400">Redefined.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
            MidlineCode is a leading{" "}
            <span className="font-bold text-slate-900">
              web developer in North Carolina
            </span>
            , offering high-performance, custom-coded solutions for businesses
            in
            <span className="font-bold text-slate-900">
              {" "}
              Fayetteville
            </span>, <span className="font-bold text-slate-900">Raleigh</span>,
            and across the{" "}
            <span className="font-bold text-slate-900">United States</span>.
          </p>
        </div>

        {/* The Performance Gap (The "Anti-WordPress" Section) */}
        <section className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-white mb-32 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-blue-400">
                Beyond the Template.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Most{" "}
                <span className="font-bold text-white text-opacity-90">
                  web design agencies in North Carolina
                </span>{" "}
                rely on legacy platforms like WordPress. While these are common,
                they are often bloated and slow.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                At MidlineCode, we specialize in{" "}
                <span className="font-bold text-white text-opacity-90">
                  Next.js development
                </span>
                . We build clean, secure, and lightning-fast engines that
                outrank competitors and provide a superior user experience that
                templates simply cannot match.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-400/50 hover:bg-white/10 transition-all group cursor-default">
                <FiZap className="text-blue-400 mb-4 text-3xl group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2 text-white text-lg">
                  SEO Engineering
                </h4>
                <p className="text-sm text-slate-500">
                  Built for 2026 Core Web Vitals to ensure you rank on the first
                  page.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-400/50 hover:bg-white/10 transition-all group cursor-default">
                <FiMapPin className="text-blue-400 mb-4 text-3xl group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2 text-white text-lg">
                  Local & Global
                </h4>
                <p className="text-sm text-slate-500">
                  The top choice for{" "}
                  <span className="font-bold text-slate-300">
                    Web Design in Fayetteville
                  </span>{" "}
                  with a global reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Area Section - HUGE for SEO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
              Serving the Carolina Tech Landscape.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Our mission is to empower businesses with elite technical
                infrastructure. While our core operations are focused on{" "}
                <span className="font-bold text-slate-900">
                  North Carolina web development
                </span>
                , our stack is designed to scale internationally.
              </p>
              <p>
                From{" "}
                <span className="font-bold text-slate-900">
                  Fayetteville construction firms
                </span>{" "}
                to{" "}
                <span className="font-bold text-slate-900">
                  Raleigh tech startups
                </span>
                , we provide the same level of artisan-quality code and high-end
                graphic design that allows our clients to compete on a global
                stage.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 flex flex-col justify-center hover:bg-white hover:border-blue-200 transition-all group">
            <FiGlobe className="text-5xl text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
            <h4 className="text-2xl font-bold text-slate-900 mb-2">
              USA & Beyond
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are currently expanding our reach, providing custom web apps
              and branding services to clients across the USA and Europe.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-slate-100 pt-24 text-center">
          <h3 className="text-4xl font-bold mb-4 text-slate-900">
            Ready to build something{" "}
            <span className="text-blue-500 underline decoration-blue-200 underline-offset-8">
              extraordinary
            </span>
            ?
          </h3>
          <p className="text-slate-500 mb-12 max-w-lg mx-auto text-lg">
            Skip the generic templates. Get a custom quote for a
            high-performance engine built specifically for your brand.
          </p>
          <a
            href="mailto:contact@midlinecode.com"
            className="inline-flex items-center gap-3 px-12 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all text-lg shadow-xl hover:shadow-blue-500/20 active:scale-95"
          >
            <FiMail size={20} />
            Email Us Directly
          </a>
          <p className="mt-6 text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Average Response Time: &lt; 24 Hours
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
