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
    <Section className="bg-zinc-900 min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Be Well Stay Calm And{" "}
                <span className="block text-[#d4ff67]">Keep In Touch</span>
              </h2>
              <p className="mt-4 text-zinc-400">Contact</p>
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
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent"
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
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent"
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
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent"
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
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent"
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
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4ff67] focus:border-transparent resize-none"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-[#d4ff67] hover:bg-[#c2ee55] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4ff67] focus:ring-offset-zinc-900 transition-colors duration-200"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
