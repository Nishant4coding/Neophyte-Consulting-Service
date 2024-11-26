"use client";
import Heading from "@/components/custom/Heading";
import Navbar from "@/components/custom/Navbar";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col snap-y snap-mandatory h-screen overflow-x-hidden scroll-smooth overflow-y-scroll">
        <AnimatePresence mode="wait" initial={true}>
          <Navbar />
        </AnimatePresence>
      </main>
      {/* </div> */}
    </>
  );
}
