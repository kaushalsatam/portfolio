"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Switch from "@/components/Switch/Switch";
import Technologies from "@/components/Technologies/Technologies";
import { useEffect, useState } from "react";

export default function Home() {
    const [githubData, setGithubData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function githubFetch() {
            let githubFetch = await fetch("https://api.github.com/users/kaushalsatam");
            let githubResponse = await githubFetch.json();
            setGithubData(githubResponse)
            setIsLoading(false);
        }
        githubFetch();
    }, [])
    return (
        <>
            <Header />
            <Hero githubData={githubData} isLoading={isLoading} />
            <Switch />
            <About />
            <Experience />
            <Technologies />
            <Projects />
            <Contact />
        </>
    );
}
