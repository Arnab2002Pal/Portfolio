import image1 from "../../../public/assets/KuberSS.png"
import error_Image from "../../../public/assets/error_image.jpg"
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


export const projects = [
    {
        title: "Kuber AI",
        subtitle: "AI-Finance Management App",
        image: image1,
        summary: "An AI-powered financial management app providing personalized budgeting and investment insights for students.",
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
        summary: "A lightweight Vercel alternative with modular servers for faster deployment React based application deployment.",
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
        summary: "An AI-driven GitHub PR review tool automating bug detection and performance optimization for faster code reviews.",
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
];

export const programming_languages = [
    { name: "Typescript", icon: <SiTypescript size={25} className="text-blue-500" />, shadowColor: 'rgba(59, 130, 246, 0.5)' }, // Blue
    { name: "Javascript", icon: <IoLogoJavascript size={25} className="text-yellow-500" />, shadowColor: 'rgba(252, 211, 77, 0.5)' }, // Yellow
    { name: "Elixir", icon: <SiElixir size={25} className="text-purple-500" />, shadowColor: 'rgba(168, 85, 247, 0.5)' }, // Purple
    { name: "Python", icon: <FaPython size={25} className="text-yellow-500" />, shadowColor: 'rgba(252, 211, 77, 0.5)' }, // Yellow
];

export const web_technologies = [
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

export const database_tools = [
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

