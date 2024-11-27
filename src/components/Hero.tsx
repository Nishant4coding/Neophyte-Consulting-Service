import Image from "next/image";
import Section from "./custom/Section";
import Navbar from "./custom/Navbar";

function Hero() {
  return (
    <Section className="bg-[url('/hero_bg.png')] bg-opacity-80 bg-cover bg-center min-h-fit">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className=" text-white flex flex-col md:flex-row items-center justify-between z-20">
        <div className="lg:max-w-[50vw] text-center md:text-left ">
          <h2 className="text-white font-semibold text-xl pb-10">
            Welcome to <br className="lg:hidden block" />
            <span className="bg-purple-400  lg:p-2 p-1 rounded-lg ">
              Neophyte Consulting Service
            </span>
          </h2>
          <div className="flex flex-col gap-4 lg:pb-8 pb-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              A Vision of Your Dreams
            </h1>
            <p className="text-gray-300 lg:leading-loose leading-relaxed lg:text-2xl text-lg text-justify">
              At Neophyte Consulting Services, we are dedicated to empowering
              businesses through innovative and tailored digital solutions. With
              a team of expert developers, designers, and digital marketers, we
              provide comprehensive services that help you thrive in the digital
              landscape.
            </p>
          </div>
          <button className=" border-2 rounded-lg border-[#dcfd82] hover:text-black lg:py-4 py-2 px-6">
            Consult Us Now
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            alt="hero"
            src="/hero.png"
            className=""
            width={900}
            height={900}
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
