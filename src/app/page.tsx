"use client";
import ContactForm from "@/components/Contact";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClient";
import OurWorks from "@/components/OurWork";
import Process from "@/components/Process";
import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyOurProcess from "@/components/WhyOurProcess";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col snap-y snap-mandatory h-screen overflow-x-hidden scroll-smooth overflow-y-scroll bg-custom-bg">
        <AnimatePresence mode="wait" initial={true}>
          <Navbar />
          <Hero />
          <WhyChooseUs />
          <OurServices />
          <Process/>
          <OurWorks />
          <Testimonials />
          <WhyOurProcess/>
          <OurClients />
          <ContactForm/>
          <Footer />
        </AnimatePresence>
      </main>
      {/* </div> */}
    </>
  );
}
