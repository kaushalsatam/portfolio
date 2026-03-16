import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import GradualBlurMemo from "@/components/GradualBlur";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#aboutme" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header>
      {/* Top Blur */}
      <div className="fixed top-0 left-0 w-full h-24 z-40 pointer-events-none">
        <GradualBlurMemo position="top" strength={1.5} exponential />
      </div>

      {/* Page backdrop when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/20 dark:bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            alt="Kaushal Satam"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex"> <GlassSurface width={550} height={48} borderRadius={50}> <nav className="flex items-center justify-center gap-6 text-sm font-medium"> {links.map((link) => (<a key={link.name} href={link.href} className="hover:opacity-70 transition" > {link.name} </a>))} </nav> </GlassSurface> </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />

            {/* Hamburger with themed background */}
            <div
              className="
  md:hidden
  flex items-center justify-center
  rounded-full
  bg-neutral-200 dark:bg-neutral-800
  border border-neutral-300 dark:border-neutral-700
  p-1
  "
            >
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={20}
                distance="sm"
                rounded
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex justify-center relative z-50">
            <GlassSurface width={260} height={400} borderRadius={30}>
              <nav className="flex flex-col items-center justify-center gap-6 text-lg font-medium py-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:opacity-70 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </GlassSurface>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
