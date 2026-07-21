import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SlideUp, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { getExperiences, getEducation } from "@/lib/data";
import { formatDateRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Professional experience, education, and engineering growth.",
};

export default function JourneyPage() {
  const experiences = getExperiences();
  const education = getEducation();

  return (
    <Container>
      <Section padded>
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-10 rounded-full bg-accent-500" />
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl">
              Journey
            </h1>
          </div>
          <p className="mb-16 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Professional experience, education, and engineering growth.
          </p>
        </FadeIn>

        <div className="mb-20">
          <SlideUp>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-1.5 w-8 rounded-full bg-accent-500" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
          </SlideUp>

          <StaggerChildren className="relative space-y-10">
            <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-primary-300 md:block" />

            {experiences.map((exp) => (
              <StaggerItem key={exp.id} className="relative md:pl-8">
                <div className="absolute left-0 top-2 hidden h-2.5 w-2.5 -translate-x-[5.5px] rounded-full border-2 border-primary-400 bg-surface md:block" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
                  <span className="font-semibold text-primary-700">
                    {formatDateRange(exp.start_date, exp.end_date, exp.current)}
                  </span>
                  <Badge variant="outline">{exp.employment_type}</Badge>
                </div>

                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="font-medium text-primary-700">{exp.company}</p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>

                <ul className="mt-3 space-y-1">
                  {exp.responsibilities.slice(0, 4).map((r, i) => (
                    <li key={i} className="flex gap-2 text-base text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary-200 px-2 py-0.5 text-sm font-medium text-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {education.length > 0 && (
          <div>
            <SlideUp>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-1.5 w-8 rounded-full bg-accent-500" />
                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              </div>
            </SlideUp>

            <StaggerChildren className="relative space-y-10">
              <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-primary-300 md:block" />

              {education.map((edu) => (
                <StaggerItem key={edu.id} className="relative md:pl-8">
                  <div className="absolute left-0 top-2 hidden h-2.5 w-2.5 -translate-x-[5.5px] rounded-full border-2 border-primary-400 bg-surface md:block" />

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
                    <span className="font-semibold text-primary-700">
                      {edu.start_year} – {edu.end_year}
                    </span>
                    <Badge variant="outline">{edu.degree}</Badge>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="font-medium text-primary-700">
                    {edu.field} · {edu.location}
                  </p>

                  {edu.gpa && (
                    <p className="mt-2 text-base text-muted-foreground">
                      GPA: {edu.gpa}
                    </p>
                  )}

                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {edu.summary}
                  </p>

                  {edu.thesis && (
                    <div className="mt-4 rounded-lg border border-border bg-surface p-4">
                      <p className="text-xs font-medium uppercase tracking-widest text-primary-600">
                        Thesis
                      </p>
                      <p className="mt-1 font-medium text-foreground">
                        {edu.thesis.title}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {edu.thesis.domains.map((domain) => (
                          <span
                            key={domain}
                            className="rounded-md bg-primary-200 px-2 py-0.5 text-sm font-medium text-primary-800"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                      {edu.thesis.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {edu.thesis.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-2 text-base text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {edu.activities.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-widest text-primary-600 mb-2">
                        Activities
                      </p>
                      <ul className="space-y-1">
                        {edu.activities.map((activity, i) => (
                          <li key={i} className="flex gap-2 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        )}
      </Section>
    </Container>
  );
}
