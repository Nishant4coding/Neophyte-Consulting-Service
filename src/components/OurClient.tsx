import React from "react";
import Section from "./custom/Section";

const OurClients = () => {
  const clients = [
    "Lenskart",
    "Synergy Innovation",
    "Frankfinn",
    "Apna Bazaar",
    "Live Scoop",
    "Education Jobs",

    ,
  ];

  return (
    <Section className="lg:min-h-fit text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Clients <span className="text-[#dcfd82]">⚡</span>
      </h2>
      <div className="flex justify-between items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white text-black font-bold text-lg text-center py-2 px-4 rounded-full shadow-md  transition-all"
          >
            {client}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OurClients;
