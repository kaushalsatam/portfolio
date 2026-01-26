import GradientText from "@/components/GradientText";
import RotatingText from "@/components/RotatingText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { FileDown } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 grid-rows-[auto_auto_auto_auto]">
        <SparklesText
          sparklesCount={3}
          className="text-center m-4 text-sm font-light"
        >
          Open to work
        </SparklesText>
        <h1 className="text-5xl w-auto px-28 text-center leading-tight">
          I build scalable, user-focused{" "}
          <span className="inline-flex align-baseline">
            <RotatingText
              texts={["web", "mobile"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-blue-700 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-white"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </span>{" "}
          applications with clean code and modern technologies.
        </h1>
        <p className="m-8 text-2xl text-center">
          Hello, I am{" "}
          <span className="inline-flex align-baseline">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="font-extrabold"
            >
              Kaushal Satam
            </GradientText>
          </span>{" "}
          a <i>Software Developer</i>
        </p>
        <div className="flex justify-center items-center gap-4">
          <InteractiveHoverButton className="h-12 w-42 text-center">
            Get in touch
          </InteractiveHoverButton>
          <ShimmerButton>
            {" "}
            Download CV <FileDown />
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
