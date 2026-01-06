import DotGrid from "@/components/DotGrid";
import "./globals.css";
import { Poppins } from "next/font/google";

const roboto = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>Kaushal Satam | Portfolio</title>
                <meta
                    name="description"
                    content="I'm Kaushal, a Software Developer specializing in React, Node.js, and PostgreSQL. Explore my projects and skills."
                />
                <meta
                    name="keywords"
                    content="Kaushal, Software Developer, React, Node.js, PostgreSQL, Full Stack Developer"
                />
                <meta name="author" content="Kaushal" />
            </head>
            <body className={`bg-black ${roboto.className}`}>
                <div className="fixed inset-0 -z-10 pointer-events-none">
                    <DotGrid
                        dotSize={5}
                        gap={25}
                        baseColor="#271e37"
                        activeColor="#5227ff"
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={2}
                        className="w-full h-full bg-black"
                    />
                </div>
                {children}
            </body>
        </html>
    );
}
