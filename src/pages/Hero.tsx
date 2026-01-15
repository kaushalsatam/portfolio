import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { WordRotate } from "@/components/ui/word-rotate";
// import { WordRotate } from "@/components/ui/word-rotate";
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
            <WordRotate
              words={["web", "mobile"]}
              className="inline-block text-purple-500"
            />
          </span>{" "}
          applications with clean code and modern technologies.
        </h1>
        <p className="m-8 text-2xl text-center">
          Hello, I am <b className="text-blue-900">Kaushal Satam</b> a{" "}
          <i>Software Developer</i>
        </p>
        <div className="flex justify-center items-center gap-4">
          <InteractiveHoverButton>Get in touch</InteractiveHoverButton>
          <PulsatingButton className="rounded-4xl">
            <div className="flex gap-2">
              Download CV <FileDown />
            </div>
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
