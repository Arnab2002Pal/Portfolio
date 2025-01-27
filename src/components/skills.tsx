import React, { useState } from 'react';
import { highlightFont, mainFont, buttonFont } from "../app/fonts/fonts";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiElixir } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaPhoenixFramework } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { FaCloudflare } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";

const Skills = () => {
    const programming_languages = [
        { name: "Typescript", icon: <SiTypescript size={25} className="text-blue-500" />, shadowColor: 'rgba(59, 130, 246, 0.5)' }, // Blue
        { name: "Javascript", icon: <IoLogoJavascript size={25} className="text-yellow-500" />, shadowColor: 'rgba(252, 211, 77, 0.5)' }, // Yellow
        { name: "Elixir", icon: <SiElixir size={25} className="text-purple-500" />, shadowColor: 'rgba(168, 85, 247, 0.5)' }, // Purple
        { name: "Python", icon: <FaPython size={25} className="text-yellow-500" />, shadowColor: 'rgba(252, 211, 77, 0.5)' }, // Yellow
    ];

    const web_technologies = [
        {
            name: "React.Js",
            icon: <FaReact size={25} className="text-blue-400" />, // React's original branding color
            shadowColor: "rgba(59, 130, 246, 0.5)" // Light blue shadow
        },
        {
            name: "Node.Js",
            icon: <FaNodeJs size={25} className="text-green-500" />, // Node.js green
            shadowColor: "rgba(34, 197, 94, 0.5)" // Green shadow
        },
        {
            name: "Express.Js",
            icon: <SiExpress size={25} className="text-gray-300" />, // Neutral light gray for Express
            shadowColor: "rgba(156, 163, 175, 0.5)" // Soft gray shadow
        },
        {
            name: "Next.Js",
            icon: <RiNextjsFill size={25} className="text-white" />, // Black as Next.js branding
            shadowColor: "rgba(225, 225, 225, 0.5)" // white shadow
        },
        {
            name: "Phoenix",
            icon: <FaPhoenixFramework size={30} className="text-orange-500" />, // Orange for Phoenix branding
            shadowColor: "rgba(249, 115, 22, 0.5)" // Orange shadow
        },
    ];

    const database_tools = [
        {
            name: "MongoDB",
            icon: <BiLogoMongodb size={30} className="text-green-500" />,
            shadowColor: "rgba(34, 197, 94, 0.5)" // Green shadow
        },
        {
            name: "PostgreSQL",
            icon: <BiLogoPostgresql size={30} className="text-blue-500" />,
            shadowColor: "rgba(59, 130, 246, 0.5)" // Blue shadow
        },
        {
            name: "Redis",
            icon: <DiRedis size={40} className="text-red-500" />,
            shadowColor: "rgba(239, 68, 68, 0.5)" // Red shadow
        },
        {
            name: "Docker",
            icon: <FaDocker size={30} className="text-blue-400" />,
            shadowColor: "rgba(96, 165, 250, 0.5)" // Light blue shadow
        },
        {
            name: "Nginx",
            icon: <DiNginx size={70} className="text-green-600" />,
            shadowColor: "rgba(22, 163, 74, 0.5)" // Dark green shadow
        },
        {
            name: "Cloudflare",
            icon: <FaCloudflare size={30} className="text-orange-500" />,
            shadowColor: "rgba(251, 146, 60, 0.5)" // Orange shadow
        },
        {
            name: "AWS - EC2, S3",
            icon: <FaAws size={30} className="text-orange-500" />,
            shadowColor: "rgba(251, 146, 60, 0.5)" // Orange shadow
        },
    ];


    const [languageIndex, setlanguageIndex] = useState<number | null>(null);
    const [techIndex, setTechIndex] = useState<number | null>(null);
    const [databaseToolsIndex, setDatabaseToolsIndex] = useState<number | null>(null);

    return (
        <div className="h-[90vh]">
            <div className="flex flex-col justify-center items-center">
                <div className={`${mainFont.className} w-full h-[18vh] flex flex-col justify-center items-center`}>
                    <h3 className="text-white text-2xl md:text-5xl font-semibold">Skills <span className={`${highlightFont.className}`}>&</span> Experience</h3>
                    <p className="text-sm md:text-xl mt-2 text-center">
                        The skills, tools, and technologies I use:
                    </p>
                    <div className="w-5/6 md:w-2/3 bg-white shadow-softCircle"></div>
                </div>
                <div className="w-full h-auto lg:h-[70vh] flex justify-center items-center">
                    <div className="mb-10 md:mb-36 text-sm md:text-xl w-full md:w-4/5 h-auto md:h-4/5 rounded-2xl md:border-zinc-400 md:border-b-2 flex flex-col justify-center items-center px-4 md:px-8 gap-5">

                        {/* Programming Languages Section */}
                        <div className="flex flex-wrap  gap-4 items-center justify-center">
                            {programming_languages.map((language, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center text-white font-medium bg-neutral-800 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
                                    style={{
                                        boxShadow:
                                            languageIndex === index
                                                ? `0px 1px 20px ${language.shadowColor}, inset 0px -3px 8px ${language.shadowColor}`
                                                : "none",
                                    }}
                                    onMouseEnter={() => setlanguageIndex(index)}
                                    onMouseLeave={() => setlanguageIndex(null)}
                                >
                                    <div className="text-xs md:text-sm font-semibold">
                                        {languageIndex === index ? language.name : language.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Web Technologies Section */}
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            {web_technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center text-white font-medium bg-neutral-800 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
                                    style={{
                                        boxShadow:
                                            techIndex === index
                                                ? `0px 1px 20px ${tech.shadowColor}, inset 0px -3px 8px ${tech.shadowColor}`
                                                : "none",
                                    }}
                                    onMouseEnter={() => setTechIndex(index)}
                                    onMouseLeave={() => setTechIndex(null)}
                                >
                                    <div className="text-xs md:text-sm font-semibold">
                                        {techIndex === index ? tech.name : tech.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Database & Tools Section */}
                        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center mb-10 lg:mb-0">
                            {database_tools.map((tool, index) => (
                                <div
                                    key={index}
                                    style={{
                                        boxShadow:
                                            databaseToolsIndex === index
                                                ? `0px 1px 20px ${tool.shadowColor}, inset 0px -3px 8px ${tool.shadowColor}`
                                                : "none",
                                    }}
                                    onMouseEnter={() => setDatabaseToolsIndex(index)}
                                    onMouseLeave={() => setDatabaseToolsIndex(null)}
                                    className="flex items-center justify-center text-white font-medium bg-neutral-800 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
                                >
                                    <div className="text-xs md:text-sm font-semibold">
                                        {databaseToolsIndex === index ? tool.name : tool.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Skills;
