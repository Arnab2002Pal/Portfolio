import React from 'react'
import Image from "next/image";
import cropImage from "../../public/assets/profile.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

const Intro = () => {
    const hoverAnimation = {
        scale: 1.2,
        transition: { duration: 0.3 },
    };
    {/* Add a container to center the circle */ }
    return (
        <div
         className="absolute top-72 lg:top-96 left-0 w-full h-[50vh] lg:h-[44.5vh] bg-black bg-opacity-60">
            <div className="flex flex-col items-center justify-around h-80 lg:h-96 relative bottom-[5rem] lg:bottom-[6rem]">
                <div className="w-full flex justify-center h-full">
                    <div className="relative ">
                        <div className="rounded-full shadow-[0px_0px_50px_-12px_#ffffff]">
                            <Image
                                src={cropImage}
                                alt=""
                                width={200}
                                height={200}
                                className="h-32 w-32 lg:h-40 lg:w-40 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-full w-full flex flex-col justify-start items-center">
                    <div className="h-full w-full flex flex-col justify-start items-center text-white">
                        <div>
                            <h1
                                className="text-xl lg:text-4xl font-bold bg-gradient-to-tr from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent">
                                Arnab Kumar Pal
                            </h1>
                        </div>

                        <div className="text-sm lg:text-lg font-thin mt-1">
                            <p>Full Stack Developer | Software Engineer</p>
                        </div>
                    </div>
                    <div className="w-[20rem] lg:w-[40rem] full relative mt-9 lg:mt-10">
                        {/* Gradients */}
                        <div className="absolute inset-x-10 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] lg:w-3/4 blur-sm" />
                        <div className="absolute inset-x-10 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px lg:w-3/4" />
                        <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-[5px] lg:w-1/4 blur-sm" />
                        <div className="absolute inset-x-30 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px lg:w-1/4" />
                    </div>
                    <div className="h-full w-full flex flex-row justify-center items-center gap-6 mt-6">
                        <motion.div
                            whileHover={hoverAnimation}
                            className="hover:text-white cursor-pointer"
                        >
                            <a href={process.env.NEXT_PUBLIC_X} target='_blank'>
                                <FaXTwitter size={30} />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={hoverAnimation}
                            className="hover:text-white cursor-pointer"
                        >
                            <a href={process.env.NEXT_PUBLIC_GITHUB} target='_blank'>
                                <FaGithub size={30} />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={hoverAnimation}
                            className="hover:text-white cursor-pointer"
                        >
                            <a href={process.env.NEXT_PUBLIC_LINKEDIN} target='_blank'>
                                <FaLinkedin size={30} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro
