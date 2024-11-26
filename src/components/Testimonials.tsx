"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/constants/index";
import Section from "./custom/Section";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const itemsPerPage = isMobile ? 1 : 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(testimonials.length / itemsPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(testimonials.length / itemsPerPage) - 1
        : prevIndex - 1
    );
  };

  return (
    <Section className="bg-custom-bg">
      <h2 className="text-5xl font-bold text-white text-center">
        See What our clients say about us
      </h2>

      <div className="flex-col ">
        <div className="flex gap-2 items-end justify-end px-4 md:px-8 pb-10">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-custom-bg" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-custom-bg" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${
                  isMobile ? "w-full" : "w-1/2"
                } flex-shrink-0 px-4 md:px-8`}
              >
                <div className="bg-[#2D2E34] rounded-lg lg:p-8 p-4 h-full">
                  <div className="flex items-center gap-4 mb-6 justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-white font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-zinc-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/testimonials/quote.svg"
                      alt="quote"
                      width={48}
                      height={48}
                    />
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
