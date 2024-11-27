"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./custom/Section";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section className=" flex items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-2 items-center">
        <div className="space-y-8">
          <div>
            <p className="mt-4 text-zinc-400">Contact</p>

            <h2 className="text-4xl font-bold text-white">
              Be Well Stay Calm And{" "}
              <span className="block text-[#d4ff67]">Keep In Touch</span>
            </h2>
          </div>

          <div className="relative h-[300px] lg:h-[400px]">
            <Image
              src="/contact.png"
              alt="Contact illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className=" p-6 rounded-lg border border-[#d4ff67]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500  "
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact No"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500  "
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500  "
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Service Looking for"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500  "
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Project Budget"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500  "
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={3}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 resize-none"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center justify-center px-10 py-4 border text-base text-white font-medium border-[#d4ff67] rounded-tl-full rounded-br-full hover:bg-[#c2ee55]"
              >
                Contact us
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
