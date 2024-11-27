import { servicesData } from "../constants/index";
import Section from "./custom/Section";

export default function OurServices() {
  return (
    <Section className="bg-custom-bg text-white py-16 px-6 min-h-fit">
      <h2 className="text-center text-5xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg hover:bg-[#dcfd82] hover:text-black transition duration-300 ease-in-out border-2 border-[#dcfd82]"
          >
            <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
