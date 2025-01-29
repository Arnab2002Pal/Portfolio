import React, { useState } from 'react'
import { highlightFont, mainFont, buttonFont } from "../app/fonts/fonts";
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../../public/assets/KuberSS.png"
import error_Image from "../../public/assets/error_image.jpg"

const Project = () => {
    const [modelOpen, setModelOpen] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        subtitle: string;
        description: string[];
        image: StaticImageData;
        altText: string;
        links: {
            github: string;
            website: string;
            notion: string;
            demo: string;
        };
        skills: string[];
    }>();

    const projects = [
        {
            title: "Kuber AI",
            subtitle: "Ai-Finance Management App",
            image: image1,
            description: [
                "Built a smart financial guidance app for students using Gemini to deliver personalized budgeting and investment insights.",
                "Developed a responsive Next.js UI with secure authentication (NextAuth) and efficient state management (Recoil).",
                "Designed a robust Node.js backend with PostgreSQL, seamlessly supporting 15+ concurrent sessions.",
                "Deployed on AWS EC2 and Vercel using Docker, reducing update times by 50% with automated CI/CD pipelines."
            ],
            altText: "Image Yet To Be Added to Project",
            links: {
                github: "https://github.com/Arnab2002Pal/ai-finance",
                website: "https://finance.arnab-personal.tech/",
                notion: "https://www.notion.so/AI-Finance-Tracker-Web-Application-a16dae2af62b457f9d8d615902a1b07c",
                demo: "",
            },
            skills: ["Typescript", "Frontend - NextJs", "Backend - NodeJs", "ExpressJs", "AWS EC2", "NginX", "Docker", "Gemini", "PostgreSQL", "Redis", "PostgreSQL"],
        },
        {
            title: "Vercel Clone",
            subtitle: "Vercel Clone Lite: The Sleek Alternative",
            description: [
                "Engineered a high-performance Vercel clone in TypeScript and Node.js, optimizing three modular servers to reduce upload latency by 90% and build times by 40%.",
                "Streamlined cross-server communication and resource management using Docker and Docker Compose.",
                "Boosted upload speeds by 90% with parallel AWS S3 uploads and Redis caching, cutting upload time from 50 to 5 seconds.",
                "Ensured fault tolerance and high availability through robust error handling, scalable architecture, and parallel processing."
            ],
            image: error_Image,
            altText: "Image Yet To Be Added to Project",
            links: {
                github: "https://github.com/Arnab2002Pal/vercel-clone",
                website: "",
                notion: "https://www.notion.so/Vercel-Clone-15e91fcbd83580318248daa127b03ebb?pvs=4",
                demo: "",
            },
            skills: ["Typescript", "NodeJs", "ExpressJs", "PostgreSQL", "AWS EC2, S3", "NginX", "Docker", "Gemini", "Redis"],
        },
        {
            title: "Github PR Reviewer",
            subtitle: "AI-Powered Code Review Tool",
            description: [
                "Developed an automated GitHub code review tool using the Gemini API, analyzing 50+ pull requests daily for bugs and performance enhancements.",
                "Built a scalable Node.js backend with Prisma and BullMQ, optimizing task queuing and caching.",
                "Containerized with Docker, deployed on AWS EC2, and automated deployments via CI/CD pipelines.",
                "Reduced manual review time by 40% with APIs for analyzing code changes, tracking tasks, and retrieving results."
            ],
            image: error_Image,
            altText: "Image Yet To Be Added to Project",
            links: {
                github: "https://github.com/Arnab2002Pal/Code_Review",
                website: "",
                notion: "https://www.notion.so/Code-Reviewer-15791fcbd835800886a7d25c2071eed4?pvs=4",
                demo: "",
            },
            skills: ["Typescript", "NodeJs", "ExpressJs", "PostgreSQL", "AWS EC2", "NginX", "Docker", "Gemini", "Redis", "BullMQ"],
        },
    ]

    const handleModel = (indexValue: number) => {
        console.log(indexValue);

        setSelectedProject(projects[indexValue]);
        setModelOpen(true)
    }

    const closeModal = () => {
        setModelOpen(false);
        setSelectedProject({
            title: "",
            subtitle: "",
            description: [],
            image: error_Image,
            altText: "",
            links: {
                github: "",
                website: "",
                notion: "",
                demo: "",
            },
            skills: [],
        });
    };

    return (
        <div className="h-screen lg:h-[90vh] mb-10 md:mb-0 flex flex-col justify-center items-start ">
            <div className="flex flex-col justify-center items-start mt-40 md:mt-20 w-full">
                <div className={`${mainFont.className} w-full h-[18vh] flex flex-col justify-center items-center pb-10 md:pb-0 `}>
                    <h3 className="text-2xl md:text-5xl font-semibold py-2 bg-gradient-to-tl from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent"><span className={`${highlightFont.className} text-white `}>Projects </span>That Define Me</h3>
                    <p className="text-sm md:text-xl mt-3 text-center">
                        Crafting Solutions, One Project at a Time
                    </p>

                </div>
            </div>
            <div className="h-full w-full flex flex-col md:flex-row md:mt-4 justify-center items-start gap-4 py-2 md:py-0 md:overflow-x-auto">
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleModel(index)}
                            className="h-56 lg:h-80 w-5/6 min-w-[300px] md:min-w-[400px] rounded-2xl flex flex-col justify-start items-center overflow-hidden border-neutral-700 border-8"
                        >
                            {/* Image Section */}
                            <div className="h-2/3 w-full flex justify-center items-center bg-black">
                                <Image
                                    src={project.image}
                                    height={180}
                                    width={300}
                                    alt={project.altText}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-full h-1/3 flex flex-col justify-center items-center">
                                <h4 className="text-base md:text-xl font-semibold text-white">
                                    {project.title}
                                </h4>
                                <p className="text-center hidden md:block">{project.subtitle}</p>
                                <div className="text-xs md:text-base md:mt-2 md:px-4">
                                    Click to know more!
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <AnimatePresence>
                {modelOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-11/12 md:w-2/3 lg:w-3/4 rounded-2xl shadow-lg p-4 relative border-4 bg-stone-950 flex flex-col "
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="flex justify-center items-start">
                                <div className="w-full h-96 p-4  flex flex-col justify-center ">
                                    <h3 className="text-4xl font-bold mb-2 text-center bg-gradient-to-t from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent">
                                        {selectedProject?.title}
                                    </h3>
                                    <h5 className="font-medium text-xl mb-1 text-white">
                                        What does it do?
                                    </h5>
                                    <ol>
                                        {selectedProject?.description.map((point, index) => (
                                            <li key={index} className="text-base mb-3">
                                                <span className="font-medium text-justify">-</span> {point}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="h-96  w-full flex flex-col justify-center items-start gap-7 pr-4">
                                    <div className="h-56 w-full">
                                        <Image
                                            src={selectedProject!.image}
                                            height={800}
                                            width={1000}
                                            alt={selectedProject!.altText}
                                            className="object-cover border-2 border-neutral-400 w-full h-full rounded-xl"
                                        />
                                    </div>
                                    <div className="w-full flex flex-wrap gap-4 justify-start items-center">
                                        <span className="text-lg font-medium">Visit:</span>
                                        {selectedProject?.links.notion && (
                                            <a
                                                href={selectedProject?.links.notion}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Notion Doc
                                            </a>
                                        )}
                                        {selectedProject?.links.github && (
                                            <a
                                                href={selectedProject?.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {selectedProject?.links.website && (
                                            <a
                                                href={selectedProject?.links.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Live
                                            </a>
                                        )}
                                        {selectedProject?.links.demo && (
                                            <a
                                                href={selectedProject?.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Recorded Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="text-xl font-semibold mb-2 text-center">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    {selectedProject?.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className={`${buttonFont.className} text-sm md:text-base px-3 py-1 bg-neutral-700 text-white rounded-lg font-medium cursor-default`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="absolute top-1 right-2 text-white text-4xl hover:text-red-600 transition-transform transform hover:scale-110"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Project
