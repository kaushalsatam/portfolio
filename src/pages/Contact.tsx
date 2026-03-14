import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Particles from "@/components/Particles"; // example background

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "kaushalsatam@example.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Particles particleCount={80} />
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
          Let's Connect
        </h2>

        <p className="text-neutral-700 dark:text-neutral-300 text-lg max-w-2xl mx-auto mb-12">
          I'm always open to discussing new opportunities, collaborations, or
          interesting projects. Feel free to reach out.
        </p>

        {/* Glass Card */}
        <div
          className="
          p-10
          rounded-2xl
          border border-neutral-200 dark:border-neutral-800
          bg-white/60 dark:bg-neutral-900/60
          backdrop-blur-xl
          shadow-lg
          flex flex-col items-center gap-8
          "
        >
          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-lg font-medium">
              <Mail size={20} />
              {email}
            </div>

            <ShimmerButton
              onClick={copyEmail}
              className="flex items-center gap-2"
            >
              {copied ? (
                <>
                  Copied <Check size={16} />
                </>
              ) : (
                <>
                  Copy Email <Copy size={16} />
                </>
              )}
            </ShimmerButton>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="
              flex items-center gap-2
              px-5 py-3
              rounded-lg
              border border-neutral-300 dark:border-neutral-700
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
              "
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="
              flex items-center gap-2
              px-5 py-3
              rounded-lg
              border border-neutral-300 dark:border-neutral-700
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
              "
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
