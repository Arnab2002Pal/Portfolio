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
import { RiOpenaiFill } from "react-icons/ri";
import { RiGeminiFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


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
            name: "OpenAI",
            icon: <RiOpenaiFill size={30} className="text-white" />,
            shadowColor: "rgba(225, 225, 225, 0.5)" // Blue shadow
        },
        {
            name: "Gemini",
            icon: <RiGeminiFill size={30} className="text-blue-500" />,
            shadowColor: "rgba(59, 130, 246, 0.5)" // Blue shadow
        },
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
        {
            name: "Github",
            icon: <FaGithub size={30} className="text-white" />,
            shadowColor: "rgba(225, 225, 225, 0.5)" // Orange shadow
        },
    ];


    const [languageIndex, setlanguageIndex] = useState<number | null>(null);
    const [techIndex, setTechIndex] = useState<number | null>(null);
    const [databaseToolsIndex, setDatabaseToolsIndex] = useState<number | null>(null);

    return (
        <div className="h-screen lg:h-[90vh] mb-10 md:mb-0 flex justify-center items-start">
            <div className="flex flex-col justify-center items-start mt-20">
                <div className={`${mainFont.className} w-full h-[18vh] flex flex-col justify-center items-center pb-10`}>
                    <h3 className="text-2xl md:text-5xl font-semibold py-2 bg-gradient-to-tl from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent"><span className={`${highlightFont.className} text-white `}>Skills</span> That Power My Craft</h3>
                    <p className="text-sm md:text-xl mt-3 text-center">
                        The skills, tools, and technologies I use:
                    </p>
                    <div className="w-5/6 md:w-2/3 bg-white shadow-softCircle"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="text-sm md:text-xl w-full md:w-4/5 md:h-4/5 rounded-2xl flex flex-col justify-center items-center px-4 md:px-8 md:py-5 lg:py-10 gap-2 md:bg-neutral-800">

                        {/* Programming Languages Section */}
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            {programming_languages.map((language, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center  font-medium bg-neutral-900 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-600"
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
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            {web_technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex  items-center justify-center font-medium bg-neutral-900 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
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
                        <div className="flex flex-wrap  gap-3 items-center justify-center">
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
                                    className="flex items-center justify-center font-medium bg-neutral-900 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
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
