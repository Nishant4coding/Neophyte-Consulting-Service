import Image from "next/image";
import { worksData } from "../constants/index";
import Section from "./custom/Section";

export default function OurWorks() {
  return (
    <Section className="bg-custom-bg text-white">
      <h2 className="text-center text-5xl font-bold ">Our Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {worksData.map((work, index) => (
          <div
            key={index}
            className="bg-[#2D2E34] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border-2 border-custom-bg hover:border-[#dcfd82]"
          >
            <div className="p-4 ">
              <Image
                src={work.image}
                alt={work.title}
                className="w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-400">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
