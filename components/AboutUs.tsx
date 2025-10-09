import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen max-w-7xl mt-0 md:mt-[-250px] 2xl:mt-[-250px] mx-auto text-white flex flex-col items-center justify-center lg:gap-30"
    >
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center">
        About Us
      </h1>
      <div className="flex flex-col xl:flex-row gap-20 mt-16 lg:mt-0 lg:gap-30">
        <Image
          src="/map-team.svg"
          alt="Map of the world"
          width={500}
          height={500}
          className="w-full max-w-[200px] lg:max-w-[500px] h-auto mx-auto"
        />

        <div className="flex flex-col gap-y-5 max-w-lg mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center xl:text-left">
            About MidlineCode
          </h2>
          <p className="text-lg lg:text-lg text-gray-300 text-center xl:text-left">
            We’re a small, passionate web studio dedicated to helping businesses
            thrive online. As a small team, we combine design and development
            expertise to create custom websites, web applications, and
            e-commerce solutions tailored to your needs. Every project gets our
            full attention, from the first idea to the final launch. We focus on
            clean, modern design, smooth user experiences, and reliable
            performance. Whether you’re a startup or an established business,
            we’re here to help you stand out online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
