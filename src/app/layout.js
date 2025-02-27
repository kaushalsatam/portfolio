import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
