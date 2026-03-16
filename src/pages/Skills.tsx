import { Card, CardContent } from "@/components/ui/card"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMaterialdesign,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiFlutter,
  SiShadcnui,
} from "react-icons/si"

import { TbApi } from "react-icons/tb"
import { RiShieldKeyholeFill } from "react-icons/ri"
import { FaDatabase } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"

type Skill = {
  name: string
  icon: React.ReactNode
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss className="text-blue-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Material UI", icon: <SiMaterialdesign className="text-blue-400" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="text-black" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "JWT", icon: <RiShieldKeyholeFill className="text-green-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
      { name: "REST APIs", icon: <TbApi className="text-purple-400" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      <div className="space-y-12">
        {skillData.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="group transition-all hover:scale-105 hover:border-primary hover:shadow-lg"
                >
                  <CardContent className="flex flex-col items-center justify-center gap-3 py-6">
                    <div className="text-3xl group-hover:scale-110 transition">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}