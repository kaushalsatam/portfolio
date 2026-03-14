import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import GradientText from "@/components/GradientText";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
      relative
      border-t border-neutral-200 dark:border-neutral-800
      bg-white/60 dark:bg-neutral-900/60
      backdrop-blur-xl
      px-6
      pt-16
      pb-10
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-xl font-semibold"
            >
              Kaushal Satam
            </GradientText>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
              Full Stack Software Developer building scalable web and mobile
              applications with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
              <a href="#home" className="hover:opacity-70 transition">
                Home
              </a>

              <a href="#aboutme" className="hover:opacity-70 transition">
                About
              </a>

              <a href="#experience" className="hover:opacity-70 transition">
                Experience
              </a>

              <a href="#projects" className="hover:opacity-70 transition">
                Projects
              </a>

              <a href="#contact" className="hover:opacity-70 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:kaushalsatam@example.com"
                className="flex items-center gap-2 hover:opacity-70 transition"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://github.com/yourgithub"
                target="_blank"
                className="flex items-center gap-2 hover:opacity-70 transition"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                className="flex items-center gap-2 hover:opacity-70 transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
          flex flex-col sm:flex-row
          items-center
          justify-between
          gap-4
          pt-8
          border-t border-neutral-200 dark:border-neutral-800
          text-sm text-neutral-600 dark:text-neutral-400
          "
        >
          <p>© {year} Kaushal Satam. All rights reserved.</p>

          <a
            href="#home"
            className="flex items-center gap-1 hover:opacity-70 transition"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
