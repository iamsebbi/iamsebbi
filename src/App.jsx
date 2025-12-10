import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";

// 1. Lazy Imports
const Works = lazy(() => import("./sections/Works"));
const Contact = lazy(() => import("./sections/Contact"));

// 2. Custom Skeletons (Tailwind)
const WorksSkeleton = () => (
  <div className="min-h-screen bg-black w-full p-4 animate-pulse pt-20">
    {/* Mimic Project Grid */}
    <div className="flex flex-col md:flex-row h-[50vh] w-full gap-4 mb-4">
      <div className="w-full md:w-1/2 bg-white/5 rounded-lg h-full" />
      <div className="w-full md:w-1/2 bg-white/5 rounded-lg h-full" />
    </div>
    <div className="flex flex-col md:flex-row h-[50vh] w-full gap-4">
      <div className="w-full md:w-1/2 bg-white/5 rounded-lg h-full" />
      <div className="w-full md:w-1/2 bg-white/5 rounded-lg h-full" />
    </div>
  </div>
);

const ContactSkeleton = () => (
  <div className="bg-black py-24 px-8 min-h-[80vh] flex items-center justify-center animate-pulse">
    <div className="container max-w-screen-2xl grid lg:grid-cols-2 gap-32 w-full">
      {/* Mimic Info Column */}
      <div className="space-y-12">
        <div className="h-32 w-3/4 bg-white/5 rounded-lg" />
        <div className="space-y-4">
          <div className="h-4 w-20 bg-white/5 rounded" />
          <div className="h-8 w-1/2 bg-white/5 rounded" />
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full bg-white/5" />
          <div className="w-12 h-12 rounded-full bg-white/5" />
          <div className="w-12 h-12 rounded-full bg-white/5" />
        </div>
      </div>
      
      {/* Mimic Form Column */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-[600px] w-full" />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-black">
      <Navbar />

      <main>
        <Hero />
        
        <Suspense fallback={<WorksSkeleton />}>
          <Works />
        </Suspense>

        <About />
        
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
