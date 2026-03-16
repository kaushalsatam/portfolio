import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

type EducationItem = {
  degree: string
  institute: string
  duration: string
  location: string
  cgpa: string
}

const educationData: EducationItem[] = [
  {
    degree: "Masters of Computer Applications",
    institute:
      "Deccan Education Society's Navinchandra Mehta Institute of Technology and Development",
    duration: "2022 – 2024",
    location: "Dadar (W), Mumbai",
    cgpa: "8.38 CGPA",
  },
  {
    degree: "B.Sc. Computer Science",
    institute: "Kankavli College, Kankavli",
    duration: "2019 – 2022",
    location: "Kankavli, Sindhudurg",
    cgpa: "9.31 CGPA",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu) => (
          <Card
            key={edu.degree}
            className="transition-all hover:shadow-lg hover:border-primary"
          >
            <CardContent className="flex flex-col sm:flex-row sm:items-start gap-4 p-6">
              
              {/* Icon */}
              <div className="flex justify-center sm:justify-start">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">
                  {edu.degree}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {edu.institute}
                </p>

                <p className="text-sm text-muted-foreground">
                  {edu.duration} | {edu.location}
                </p>

                <p className="text-sm font-medium text-primary">
                  {edu.cgpa}
                </p>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}