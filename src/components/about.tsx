import React from 'react'
import Image from "next/image";
import picture from "../../public/assets/about.jpg"
import { highlightFont, mainFont, buttonFont } from "../app/fonts/fonts"
import { IoIdCard } from "react-icons/io5";

const About = () => {
    return (
        <div className="h-screen flex lg:flex-row justify-around items-center">
            <div className="mt-7 md:mt-16 h-full lg:h-[80vh] w-full flex flex-col justify-start items-center">
                <div className="mt-24 lg:mt-0 h-24 lg:pt-0 lg:h-1/3 w-full flex justify-center items-center text-3xl lg:text-5xl">
                    <h2 className="font-semibold">
                        <span className="bg-gradient-to-tl from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent">More about</span>
                        <span className={`${highlightFont.className} italic text-white`}> Myself</span>
                    </h2>
                </div>

                {/* Text for large screens */}
                <div className={`${mainFont.className} lg:h-1/3 w-7/12 hidden lg:flex justify-center items-center text-base md:text-xl text-justify`}>
                    Hello! I&apos;m Arnab Kumar Pal, an Associate Software Engineer from India with over 1 Year of experience developing and engineering cutting-edge products. I am passionate about crafting seamless user experiences and designing robust servers that ensure smooth functionality. I aim to create innovative solutions that resonate with audiences and drive engagement effectively.
                </div>

                {/* Text for small to medium screens */}
                <div className={`${mainFont.className} lg:h-1/3 w-11/12 sm:w-7/12 flex lg:hidden justify-center items-center text-base md:text-xl text-justify`}>
                    Hello! I&apos;m Arnab Kumar Pal, an Associate Software Engineer from India with 1+ year of experience in developing user-centric products and scalable servers. I&apos;m passionate about creating innovative solutions that drive engagement and ensure smooth performance.
                </div>

                <div className={`h-1/3 md:w-7/12 flex justify-start items-center`}>
                    <a
                        href={process.env.NEXT_PUBLIC_RESUME}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonFont.className} font-semibold flex gap-2 text-lg justify-center items-center bg-neutral-800 px-6 py-2 rounded-3xl hover:text-rose-500 transition-300`}
                    >
                        <span className=" text-2xl">
                            <IoIdCard className="hover:text-white" />
                        </span> Resume

                    </a>
                    {/* <button className="flex gap-2 text-base justify-center items-center bg-neutral-800 px-6 py-2 rounded-3xl hover:text-white">
                        <span className='text-rose-400'>
                            <SiGmail />
                        </span> Mail Me
                    </button> */}
                </div>
            </div>
            <div className="mt-16 h-[80vh] w-full hidden lg:flex flex-col justify-center items-center">
                <Image
                    src={picture}
                    alt=""
                    width={2000}
                    height={1500}
                    className="w-[20rem] lg:w-[36rem] border-neutral-800 border-8 rounded-lg"
                />
            </div>
        </div>
    )
}

export default About
