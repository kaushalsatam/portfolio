import GradientText from "@/components/GradientText";
import RotatingText from "@/components/RotatingText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { FileDown } from "lucide-react";

const Hero = () => {
  const openResume = () => {
    window.open("/Kaushal_Satam.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl flex flex-col items-center text-center gap-8">
        {/* Status */}
        <SparklesText
          sparklesCount={3}
          className="text-sm tracking-wide text-muted-foreground"
        >
          Open to Work
        </SparklesText>

        {/* Main Heading */}
        <h1
          className="font-semibold leading-[1.15] tracking-tight
                       text-[clamp(2.2rem,4vw,3.5rem)] max-w-4xl"
        >
          I build scalable, user-focused{" "}
          <span className="inline-flex align-baseline">
            <RotatingText
              texts={["web", "mobile"]}
              mainClassName="px-3 bg-blue-700 text-white rounded-lg overflow-hidden py-1 md:py-2"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </span>{" "}
          applications with clean code and modern technologies
        </h1>

        {/* Subtitle */}
        <div className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Hello, I am{" "}
          <span className="inline-flex align-baseline">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="font-bold"
            >
              Kaushal Satam
            </GradientText>
          </span>{" "}
          — a Software Developer building scalable full-stack applications.
        </div>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 pt-2">
          <a href="#contact">
            <InteractiveHoverButton className="h-10 sm:h-12 px-4 sm:px-7 text-sm sm:text-base">
              Get in touch
            </InteractiveHoverButton>
          </a>

          <ShimmerButton
            onClick={openResume}
            className="flex items-center gap-2 h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base"
          >
            Download CV <FileDown size={16} className="sm:w-4.5 sm:h-4.5" />
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
