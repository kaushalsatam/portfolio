import kaushalsatam from "@/assets/kaushalsatam.jpeg";
import TiltedCard from "@/components/TiltedCard";
import { RetroGrid } from "@/components/ui/retro-grid";

const AboutMe = () => {
  return (
    <section id="aboutme" className="relative h-dvh w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-12 max-w-6xl px-8">
          <div className="aboutme-info-container flex flex-col justify-between">
            <h2 className="text-4xl">
              I’m Kaushal Satam, <br />a Full Stack Software Developer
            </h2>

            <p className="text-xl mt-6">
              Focused on building scalable, efficient, and user-friendly
              applications. I work with React, Node.js, Express, PostgreSQL, and
              Flutter, designing APIs, managing databases, and crafting clean
              interfaces. I value clean architecture, thoughtful UX, and
              continuous learning, and I enjoy turning real-world problems into
              reliable solutions. I’m always open to new opportunities and
              collaborations.
            </p>
          </div>

          <TiltedCard imageSrc={kaushalsatam} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
