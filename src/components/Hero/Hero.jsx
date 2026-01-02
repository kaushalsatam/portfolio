'use client'

import { ArrowDownToLineIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import github from "../../../public/github.png"
import linkedin from "../../../public/linkedin.png"
import hero from "../../../public/me1.png"
import { Spinner } from "../ui/spinner";

function Hero({ githubData, isLoading }) {

    return <>
        <div id="home" className="h-dvh w-full text-white flex justify-center items-center">
            <div className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 lg:grid-cols-2 lg:gap-8">
                {isLoading ?
                    <div className="flex justify-center items-center">
                        <Spinner />
                    </div>
                    :
                    <Image src={githubData.avatar_url} alt="Profile Picture" className="justify-self-center h-60 lg:h-80 lg:w-80 w-60 rounded-full" height={200} width={200} />
                }
                <div className=" flex flex-col justify-center items-center">
                    <h1 className="text-center text-gray-300">Hello, I'm</h1>
                    <p className="text-4xl lg:text-5xl font-extrabold text-center m-2">Kaushal Satam</p>
                    <p className="text-xl lg:text-2xl font-bold text-center text-gray-500 ">Software Developer</p>
                    <div className="flex justify-around gap-2 mt-8">
                        <Button variant="outline" className="bg-transparent h-12 rounded-lg" onClick={() => { open("Kaushal-Satam-Resume.pdf", "_blank", "noopener,noreferrer") }}>
                            <ArrowDownToLineIcon /> Download CV
                        </Button>
                        <Button variant="secondary" className="h-12" onClick={() => { window.location.href = '#contact' }}>
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
