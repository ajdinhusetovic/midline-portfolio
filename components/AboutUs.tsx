import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#87CEEB] my-16 pt-20 pb-30">
      <section
        id="about-us"
        className="max-w-7xl mx-auto text-slate-900 flex flex-col items-center justify-center lg:gap-30"
      >
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold text-center">
          About Us
        </h1>
        <div className="flex flex-col xl:flex-row gap-20 mt-16 lg:mt-0 lg:gap-30 w-full">
          <Image
            src="/map-team.svg"
            alt="Map of the world"
            width={500}
            height={500}
            className="w-full max-w-[200px] lg:max-w-[500px] h-auto mx-auto"
          />

          <div className="flex flex-col gap-y-5 max-w-2xl mx-auto px-4 w-full">
            <h2 className="text-2xl lg:text-3xl font-medium text-center xl:text-left">
              About MidlineCode
            </h2>
            <p className="text-md lg:text-xl text-slate-800 text-center xl:text-left">
              A North Carolina web development agency with strong local presence
              in Fayetteville and clients across the United States and Europe.
            </p>
            <p className="text-md lg:text-xl text-slate-800 text-center xl:text-left">
              We specialize in web development, digital marketing, social media
              management, and professional photography. We give businesses
              everything they need to build a strong and effective online
              presence.
            </p>
            <p className="text-md lg:text-xl text-slate-800 text-center xl:text-left">
              Our team combines clean design, powerful development, and
              strategic marketing to create modern websites and digital
              experiences that actually drive results. From small businesses in
              Fayetteville to clients across the U.S. and Europe, we provide
              high-quality, reliable, and tailored solutions for every stage of
              growth.
            </p>
            <p className="text-md lg:text-xl text-slate-800 text-center xl:text-left">
              Whether you need a new website, a brand identity, social media
              content, or complete digital marketing support, we’re here to help
              your business grow with a polished, consistent, and professional
              online presence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
