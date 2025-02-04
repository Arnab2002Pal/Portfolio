"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../../public/assets/arnablogo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div id="home_section">
            {/* Desktop Navbar */}
            <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 h-16 hidden lg:flex px-10 z-50">

                <div className="w-full flex justify-start items-center">
                    <Image src={logo} width={200} height={200} alt="Logo" className="w-24" />
                </div>
                <div className="w-full flex justify-end items-center">
                    <ul className="flex flex-row gap-10 cursor-default font-semibold">
                        <li className="w-full hover:text-white">
                            <a href="#home_section">Home</a>
                        </li>
                        <li className="w-full hover:text-white">
                            <a href="#about_section">About</a>
                        </li>
                        <li className="w-full hover:text-white">
                            <a href="#skill_section">Skills</a>
                        </li>
                        <li className="w-full hover:text-white">
                            <a href="#experince_section">Experience</a>
                        </li>
                        <li className="w-full hover:text-white">
                            <a href="#project_section">Project</a>
                        </li>
                        <li className="w-full hover:text-white">
                            <a href="#contact_section">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`fixed top-0 left-0 right-0 bg-black border-b border-gray-800 px-10 z-50 ${open ? "h-64 pt-5 items-start" : "h-16"
                    } flex lg:hidden`}
            >
                <div
                    className={`w-full flex flex-row justify-between items-center ${open && "flex-col items-start"
                        }`}
                >
                    <div className="w-full">
                        <Image src={logo} width={200} height={200} alt="Logo" className="w-16" />
                    </div>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full"
                        >
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { staggerChildren: 0.1 },
                                    },
                                }}
                                className="mt-4 flex flex-col gap-2 cursor-default font-semibold"
                            >
                                <li className="w-full hover:text-white">
                                    <a href="#home_section">Home</a>
                                </li>
                                <li className="w-full hover:text-white">
                                    <a href="#about_section">About</a>
                                </li>
                                <li className="w-full hover:text-white">
                                    <a href="#skill_section">Skills</a>
                                </li>
                                <li className="w-full hover:text-white">
                                    <a href="#experince_section">Experience</a>
                                </li>
                                <li className="w-full hover:text-white">
                                    <a href="#project_section">Project</a>
                                </li>
                                <li className="w-full hover:text-white">
                                    <a href="#contact_section">Contact</a>
                                </li>
                            </motion.ul>
                        </motion.div>
                    )}
                </div>

                <div onClick={handleOpen} className="w-full flex justify-end items-center">
                    {!open ? (
                        <div className="hover:text-white">
                            <GiHamburgerMenu />
                        </div>
                    ) : (
                        <div className="mt-1 hover:text-white">
                            <ImCross />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
