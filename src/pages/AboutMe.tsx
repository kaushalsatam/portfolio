import kaushalsatam from "@/assets/kaushalsatam.jpeg";
import TiltedCard from "@/components/TiltedCard";
import { RetroGrid } from "@/components/ui/retro-grid";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative w-full h-dvh overflow-hidden px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* IMAGE (shows first on mobile) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-55 sm:w-65 md:w-75">
              <TiltedCard imageSrc={kaushalsatam} />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
            <h2
              className="font-semibold tracking-tight leading-[1.2]
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              I’m Kaushal Satam
              <br />
              <span className="text-neutral-600 dark:text-neutral-400">
                Full Stack Software Developer
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Focused on building scalable, efficient, and user-friendly
              applications. I work with React, Node.js, Express, PostgreSQL, and
              Flutter — designing APIs, managing databases, and crafting clean
              interfaces.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I value clean architecture, thoughtful UX, and continuous
              learning. I enjoy turning real-world problems into reliable
              software solutions and I’m always open to new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
