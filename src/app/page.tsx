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
          <div className="w-full flex items-center justify-center">
            <div className="w-[20rem] lg:w-[70rem] full relative">
              {/* Gradients */}
              <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
              <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />
              {/* <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] lg:w-1/4 blur-sm" />
              <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-1/4" /> */}
            </div>
          </div>
          <Skills />
        </div>
        <div className="h-screen lg:px-28  lg:mb-20">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />
                {/* <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] lg:w-1/4 blur-sm" />
              <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-1/4" /> */}
              </div>
            </div>
          </div>
          <div className="md:mt-20">
            <TimeLine />
          </div>
        </div>
        <div className="lg:px-28  bg-black bg-opacity-60">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />
                {/* <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] lg:w-1/4 blur-sm" />
              <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-1/4" /> */}
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 pb-20 md:pb-0">
            <Project />
          </div>
        </div>
        <div className="h-[80vh] lg:px-28  lg:mb-20">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />
                {/* <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] lg:w-1/4 blur-sm" />
              <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-1/4" /> */}
              </div>
            </div>
          </div>
          <div className="md:mt-20">
          </div>
        </div>
      </div>
    </div>
  );
}



