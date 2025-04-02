import React from 'react'
import { highlightFont, mainFont } from "../app/fonts/fonts";

const TimeLine = () => {
    return (
        <div className='h-screen flex flex-col items-center gap-5 md:gap-10 mt-10 md:mt-0 '>
            <div className={`${mainFont.className} w-full flex-col justify-center text-center items-center h-20`}>
                <h3 className="text-2xl md:text-5xl font-semibold bg-gradient-to-bl from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent">Milestones of <span className={`${highlightFont.className} text-white `}>Growth</span></h3>
                <p className="text-sm md:text-xl mt-2 text-center text-wrap px-2">
                    A Journey of Innovation and Growth in the Tech World
                </p>
            </div>
            <div className='w-[55vw] h-auto'>
                <ol className="relative border-s border-gray-700 mx-2 ">
                    <li className="mb-7 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">March 2025 - Current</time>
                        <h3 className="text-sm md:text-lg font-semibold text-white">Full Stack Developer @Bot2Do Technologies</h3>
                        <p className="hidden md:block mb-4 text-sm md:text-base font-normal text-justify text-gray-400 ">
                            Led end-to-end development of a client project, handling <span className='text-white font-medium'>frontend (React.js)</span> and <span className='text-white font-medium'>backend (NestJS)</span>. Designed and optimized <span className='text-white font-medium'>MongoDB schemas</span> for efficient data management. Integrated <span className='text-white font-medium'>OpenAI, Gemini, and DeepSeek APIs</span> to enhance AI-driven automation. Collaborated with the <span className='text-white font-medium'>Project Manager</span> to implement business logic efficiently within deadlines. Mentored junior developers and built scalable APIs, improving system performance and user experience.
                        </p>
                    </li>
                    <li className="mb-7 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">July 2024 - December 2024</time>
                        <h3 className="text-sm md:text-lg font-semibold text-white">Associate Software Engineer @Azilen Technologies</h3>
                        <p className="hidden md:block mb-4 text-sm md:text-base font-normal text-justify text-gray-400 ">Engineered and maintained an HR domain chat-based web application using <span className='text-white font-medium'>Elixir</span> for backend programming. <span className='text-white font-medium'>Integrated 10+ client systems</span> into the application, significantly enhancing functionality and efficiency. <span className='text-white font-medium'>Developed 30+ APIs</span>, including test case creation, which boosted system performance by 30%.</p>
                    </li>
                    <li className="mb-7 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-300"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">January 2024 - June 2024</time>
                        <h3 className="text-sm md:text-lg font-semibold text-white">Software Engineer - Intern @Azilen Technologies</h3>
                        <p className="hidden md:block text-base font-normal text-gray-400">Contributed to an internal project using <span className='text-white font-medium'>Elixir</span> and the <span className='font-medium text-white'>Phoenix framework</span>, including leveraging <span className='font-medium text-white'>LiveView</span> for real-time web-socket communication and <span className='font-medium text-white'>React.Js</span> for component development. Executed CRUD operations and introduced new features, improving application functionality. Optimized data management with <span className='font-medium text-white'>PostgresSQL</span> and <span className='font-medium text-white'>Ecto (ORM)</span>, cutting query response times by 20%.</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-500"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">March 2021 – June 2021</time>
                        <h3 className="text-sm md:text-lg font-semibold text-white">Graphic Designer - Intern @FuturePath Solution</h3>
                        <p className="hidden md:block text-base font-normal text-gray-400">Responsible for creating and designing visually engaging posters, YouTube thumbnails, and social media posts using <span className='font-medium text-white'>Adobe Illustrator</span> and <span className='font-medium text-white'>Adobe Photoshop</span>, resulting in a 15% increase in user engagement.</p>
                    </li>
                </ol>
            </div>

        </div>
    )
}

export default TimeLine;
