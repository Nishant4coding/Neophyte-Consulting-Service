import Image from "next/image";
import Section from "./custom/Section";
import Navbar from "./custom/Navbar";

function Hero() {
  return (
    <Section className="bg-[url('/hero_bg.png')] bg-opacity-80 bg-cover bg-center min-h-fit">
      <div className=" text-white flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-[50vw] text-center md:text-left ">
          <h2 className="text-white font-semibold text-xl pb-10">
            Welcome to{" "}
            <span className="bg-purple-400  p-2 rounded-lg ">
              Neophyte Consulting Service
            </span>
          </h2>
          <h1 className="text-7xl md:text-4xl lg:text-6xl font-bold mb-4">
            A Vision of Your Dreams
          </h1>
          <p className="text-gray-300 leading-loose text-2xl">
            At Neophyte Consulting Services, we are dedicated to empowering
            businesses through innovative and tailored digital solutions. With a
            team of expert developers, designers, and digital marketers, we
            provide comprehensive services that help you thrive in the digital
            landscape.
          </p>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-2 px-6 rounded transition">
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
