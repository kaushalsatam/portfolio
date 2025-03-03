'use client'

import { ArrowDownToLineIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import github from "../../../public/github.png"
import linkedin from "../../../public/linkedin.png"
import hero from "../../../public/me1.png"

function Hero() {
    return <>
        <div className="h-dvh w-full text-white flex justify-center items-center">
            <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-8">
                <Image src={hero} alt="hero-img" className="justify-self-center h-60 md:h-80 md:w-80 w-60" />
                <div className=" flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-center text-gray-500">Hello, I'm</h1>
                    <p className="text-5xl font-bold text-center">Kaushal Satam</p>
                    <p className="text-xl font-bold text-center text-gray-500 m-4">Software Developer</p>
                    <div className="flex justify-around gap-2">
                        <Button variant="outline" className="bg-transparent h-12 rounded-lg" onClick={() => { open("Kaushal-Satam-Resume.pdf", "_blank", "noopener,noreferrer") }}>
                            <ArrowDownToLineIcon /> Download CV
                        </Button>
                        <Button variant="secondary" className="h-12">
                            <UserIcon /> Contact Info
                        </Button>
                    </div>
                    <div className="flex justify-center gap-12 m-4">
                        <Button className="bg-transparent invert" size="icon" onClick={() => { open("https://www.github.com/kaushalsatam") }}>
                            <Image src={github} alt="github" />
                        </Button>
                        <Button className="bg-transparent invert" size="icon" onClick={() => { open("https://www.linkedin.com/in/kaushalsatam") }}>
                            <Image src={linkedin} alt="linkedin" />
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Hero;
