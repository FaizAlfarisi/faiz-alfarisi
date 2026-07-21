import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Professional experience and engineering growth."
      bordered
      warm

    >
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

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {exp.summary}
            </p>

            <ul className="mt-3 space-y-1">
              {exp.responsibilities.slice(0, 3).map((r, i) => (
                <li
                  key={i}
                  className="text-base text-muted-foreground"
                >
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.tech_stack.slice(0, 5).map((tech) => (
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
    </Section>
  );
}
