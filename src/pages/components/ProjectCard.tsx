import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  live,
  github,
}: ProjectCardProps) => {
  return (
    <div
      className="
      group
      rounded-2xl
      overflow-hidden
      border border-neutral-200 dark:border-neutral-800
      bg-white/60 dark:bg-neutral-900/60
      backdrop-blur-lg
      transition
      hover:-translate-y-1
      hover:shadow-2xl
      "
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full h-full object-cover
          transition duration-500
          group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="
              text-xs
              px-3 py-1
              rounded-full
              bg-neutral-200 dark:bg-neutral-800
              text-neutral-700 dark:text-neutral-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition"
            >
              Live Preview <ExternalLink size={16} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition"
            >
              GitHub <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
