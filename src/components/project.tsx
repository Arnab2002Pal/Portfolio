import React, { useState } from 'react'
import { highlightFont, mainFont, buttonFont } from "../app/fonts/fonts";
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

import error_Image from "../../public/assets/error_image.jpg"
import { projects } from '@/app/utils/data';

const Project = () => {
    const [modelOpen, setModelOpen] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        subtitle: string;
        summary: string;
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
            summary: "",
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
            <div className="h-full w-full flex flex-col md:flex-row md:mt-4 justify-center items-center md:items-start gap-4 py-2 md:py-0 md:overflow-x-auto ">
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleModel(index)}
                            className="h-56 lg:h-80 w-5/6 min-w-[200px] md:min-w-[300px] rounded-2xl flex flex-col justify-start items-center overflow-hidden border-neutral-700 border-2 lg:border-8"
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
                            className="w-11/12 md:w-2/3 lg:w-3/4 rounded-2xl shadow-lg p-4 relative border-2 lg:border-4 bg-stone-950 flex flex-col "
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="flex flex-col lg:flex-row justify-center items-start">
                                <div className="w-full lg:h-96 p-4 flex flex-col justify-start lg:justify-center ">
                                    <h3 className=" text-2xl lg:text-4xl font-bold mb-2 text-center bg-gradient-to-t from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent">
                                        {selectedProject?.title}
                                    </h3>
                                    <h5 className="font-medium text-base md:text-xl mb-1 text-white">
                                        What does it do?
                                    </h5>
                                    <p className=' text-sm md:hidden'>
                                        {selectedProject?.summary}
                                    </p>
                                    <ol className='hidden md:block'>
                                        {selectedProject?.description.map((point, index) => (
                                            <li key={index} className="text-base mb-3">
                                                <span className="font-medium text-justify">-</span> {point}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="lg:h-96 w-full flex flex-col lg:justify-center items-start gap-7 pr-4">
                                    <div className="h-56 w-full hidden lg:block">
                                        <Image
                                            src={selectedProject!.image}
                                            height={800}
                                            width={1000}
                                            alt={selectedProject!.altText}
                                            className="object-cover border-2 border-neutral-400 w-full h-full rounded-xl"
                                        />
                                    </div>
                                    <div className="w-full flex flex-wrap gap-2 lg:gap-4 justify-start items-center mt-2 lg:mt-0">
                                        <span className="text-base lg:text-lg font-medium">Visit:</span>
                                        {selectedProject?.links.notion && (
                                            <a
                                                href={selectedProject?.links.notion}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Notion Doc
                                            </a>
                                        )}
                                        {selectedProject?.links.github && (
                                            <a
                                                href={selectedProject?.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {selectedProject?.links.website && (
                                            <a
                                                href={selectedProject?.links.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Live
                                            </a>
                                        )}
                                        {selectedProject?.links.demo && (
                                            <a
                                                href={selectedProject?.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs md:text-base px-3 py-1 bg-neutral-600 text-white rounded-lg hover:bg-white hover:text-neutral-700 font-medium transition-transform transform hover:scale-105"
                                            >
                                                Recorded Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-2 lg:mt-0">
                                <h4 className="text-base lg:text-xl font-semibold mb-2 text-center">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    {selectedProject?.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className={`${buttonFont.className} text-xs md:text-base px-3 py-1 bg-neutral-700 text-white rounded-lg font-thin lg:font-medium cursor-default`}
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
