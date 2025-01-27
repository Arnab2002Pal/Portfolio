"use client";
import Navbar from "@/components/navbar";
import { AuroraBackgroundDemo } from "@/components/background";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";



export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="mt-16 w-full relative">
        <AuroraBackgroundDemo />
        <div>
          <Intro />
        </div>
        <div className="lg:px-28">
          <About/>
        </div>
        <div className="h-screen lg:px-28">
          <Skills/>
        </div>

      </div>
    </div>
  );
}



