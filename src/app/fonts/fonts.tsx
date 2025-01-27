import { Lora, Montserrat, Hind_Madurai, Courgette } from "next/font/google";


export const buttonFont = Hind_Madurai({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-hind-madurai",
    weight: ["300", "400", "500", "600", "600"],
})

export const mainFont = Lora({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-lora",
    weight: ["400", "500", "600", "700"],
})

export const titleFont = Montserrat({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const highlightFont = Courgette({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-courgette",
    weight: ["400"],
})
