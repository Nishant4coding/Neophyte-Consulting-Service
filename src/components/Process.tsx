"use client";

import Image from "next/image";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description:
        "We understand your business goals and define project scope, direction, and deliverables along with your ideas.",
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description:
        "We create wireframes and high-fidelity prototypes to visualize and finalize designs that align with your brand and customer needs.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Development",
      description:
        "Using the latest technologies, our developers build responsive, high-performing, and functional websites tailored to your needs.",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Testing",
      description:
        "We conduct comprehensive testing for usability, responsiveness, performance, security, and cross-browser compatibility.",
      color: "bg-red-500",
    },
    {
      id: 5,
      title: "Launch",
      description:
        "Once the product is ready, we deploy, ensuring initial performance runs smoothly.",
      color: "bg-green-500",
    },
    {
      id: 6,
      title: "On-Going Support",
      description:
        "Post-launch, we ensure you get the necessary support and maintain your performance.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </div>
              {/* Step Icon */}
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-black font-bold`}
                >
                  {step.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
