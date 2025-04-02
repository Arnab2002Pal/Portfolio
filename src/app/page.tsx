"use client";
import Navbar from "@/components/navbar";
import { AuroraBackgroundDemo } from "@/components/background";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import TimeLine from "@/components/timeline_component";
import Project from "@/components/project";
import Email from "@/components/contact";
import Footer from "@/components/footer";
import { motion } from "motion/react";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  return (
    <div>
      <Navbar />
      <div className="mt-16 w-full relative flex flex-col">
        <AuroraBackgroundDemo />
        <div>
          <Intro />
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="about_section"
          className="lg:px-28"
        >
          <About />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="skill_section"
          className="lg:px-28 bg-black bg-opacity-60">
          <div className="w-full flex items-center justify-center">
            <div className="w-[20rem] lg:w-[70rem] full relative">
              {/* Gradients */}
              <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
              <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />

            </div>
          </div>
          <Skills />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="experince_section"
          className="h-[48rem] md:h-[90rem] lg:h-[63rem] lg:px-28">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />
              </div>
            </div>
          </div>
          <div className="md:mt-20">
            <TimeLine />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="project_section"
          className="lg:px-28  bg-black bg-opacity-60">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />

              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 pb-40 md:pb-0">
            <Project />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="contact_section"
          className="h-[80vh] lg:px-28 lg:mb-20">
          <div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[20rem] lg:w-[70rem] full relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[4px] lg:w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-36 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px lg:w-3/4" />

              </div>
            </div>
          </div>
          <div className="">
            <Email />
          </div>
        </motion.div>
        <div className="mt-20 md:mt-0">
          <Footer />
        </div>
      </div>
    </div >
  );
}



