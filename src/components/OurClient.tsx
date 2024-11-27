import Image from "next/image";
import { clients } from "@/constants/index";
import Section from "./custom/Section";

export default function OurClients() {
  return (
    <Section className="min-h-fit overflow-hidden justify-center items-center">
      {/* <Image src="/overlay.png" alt="overlay" width={1000} height={100} className="w-full -mx-[5vw] items-center"/> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Clients
          <span className="ml-2" role="img" aria-label="lightning">
            ⚡
          </span>
        </h2>

        <div className="relative">
          {/* First row of logos */}
          <div className="flex animate-marquee whitespace-nowrap">
            {clients.map((client) => (
              <div
                key={client.id}
                className="mx-4 flex min-w-[200px] items-center justify-center bg-white rounded-full px-8 py-4"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={60}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate row for seamless loop */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {clients.map((client) => (
              <div
                key={`${client.id}-duplicate`}
                className="mx-4 flex min-w-[200px] items-center justify-center bg-white rounded-full px-8 py-4"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={60}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
