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
      <body className={`bg-slate-800 ${roboto.className}`}>{children}</body>
    </html>
  );
}
