"use client";
import Navbar from "@/components/navbar";
import { AuroraBackgroundDemo } from "@/components/background";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import TimeLine from "@/components/timeline_component";
import Project from "@/components/project";



export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="mt-16 w-full relative flex flex-col">
        <AuroraBackgroundDemo />
        <div>
          <Intro />
        </div>
        <div className="lg:px-28">
          <About />
        </div>
        <div className="lg:px-28 bg-black bg-opacity-60">
          <Skills />
        </div>
        <div className="h-screen lg:px-28 md:mt-20">
          <TimeLine />
        </div>
        <div className="lg:px-28 mt-10 md:mt-0 pb-20 md:pb-0 bg-black bg-opacity-60">
          <Project />
        </div>
      </div>
    </div>
  );
}



