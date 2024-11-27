"use client";

import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

// Lazy load components
const ContactForm = React.lazy(() => import("@/components/Contact"));
const Navbar = React.lazy(() => import("@/components/custom/Navbar"));
const Footer = React.lazy(() => import("@/components/Footer"));
const Hero = React.lazy(() => import("@/components/Hero"));
const OurClients = React.lazy(() => import("@/components/OurClient"));
const OurWorks = React.lazy(() => import("@/components/OurWork"));
const OurServices = React.lazy(() => import("@/components/Services"));
const Testimonials = React.lazy(() => import("@/components/Testimonials"));
const WhyChooseUs = React.lazy(() => import("@/components/WhyChooseUs"));
const WhyOurProcess = React.lazy(() => import("@/components/WhyOurProcess"));

export default function Home() {
  return (
    <main className="relative flex flex-col snap-y snap-mandatory h-screen overflow-x-hidden scroll-smooth overflow-y-scroll bg-custom-bg">
      <AnimatePresence mode="wait" initial={true}>
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading WhyChooseUs...</div>}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<div>Loading OurServices...</div>}>
          <OurServices />
        </Suspense>
        {/* <Process /> */}
        <Suspense fallback={<div>Loading OurWorks...</div>}>
          <OurWorks />
        </Suspense>
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading WhyOurProcess...</div>}>
          <WhyOurProcess />
        </Suspense>
        <Suspense fallback={<div>Loading OurClients...</div>}>
          <OurClients />
        </Suspense>
        <Suspense fallback={<div>Loading ContactForm...</div>}>
          <ContactForm />
        </Suspense>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </AnimatePresence>
    </main>
  );
}
