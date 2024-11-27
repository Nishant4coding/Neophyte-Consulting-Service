import Image from "next/image";
import Section from "./custom/Section";
import { WhyChoose } from "@/constants/index";

export default function WhyChooseUs() {
  return (
    <Section className="bg-custom-bg text-white text-center">
      <h2 className="lg:text-5xl text-4xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WhyChoose.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-2"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={100}
              height={100}
            />
            <h3 className="lg:text-2xl text-xl font-semibold ">{feature.title}</h3>
            <p className=" lg:text-lg text-md">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
