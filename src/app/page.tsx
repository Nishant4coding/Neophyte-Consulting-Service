"use client";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurWorks from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col snap-y snap-mandatory h-screen overflow-x-hidden scroll-smooth overflow-y-scroll">
        <AnimatePresence mode="wait" initial={true}>
          <Navbar />
          <Hero />
          <WhyChooseUs />
          <OurWorks />
          <Testimonials />
          <Footer />
        </AnimatePresence>
      </main>
      {/* </div> */}
    </>
  );
}
