import React, { useState } from 'react';
import { highlightFont, mainFont, buttonFont } from "../app/fonts/fonts";
import { database_tools, programming_languages, web_technologies } from '@/app/utils/data';


const Skills = () => {
    const [languageIndex, setlanguageIndex] = useState<number | null>(null);
    const [techIndex, setTechIndex] = useState<number | null>(null);
    const [databaseToolsIndex, setDatabaseToolsIndex] = useState<number | null>(null);

    const style = {
        transform: "rotate(-13deg)"
    }

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
                    <div className="text-sm md:text-xl w-full md:w-4/5 md:h-4/5 rounded-2xl flex flex-col justify-center items-center px-4 md:px-8 md:py-5 lg:py-10 gap-2  lg:bg-neutral-800">
                        {/* Scrollable Wrapper for Mobile & Tablet */}
                        <div className="max-h-[60vh] overflow-y-auto lg:overflow-visible lg:max-h-none w-full flex flex-col gap-4">
                            {/* Programming Languages Section */}
                            <div className="flex flex-wrap gap-3 items-center justify-center">
                                {programming_languages.map((language, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center font-medium bg-neutral-900 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-600"
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
                                        className="flex items-center justify-center font-medium bg-neutral-900 w-28 h-10 md:w-36 md:h-10 rounded-2xl cursor-default transition-shadow duration-300"
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
                            <div className="flex flex-wrap gap-3 items-center justify-center">
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
        </div>

    );
}

export default Skills;
