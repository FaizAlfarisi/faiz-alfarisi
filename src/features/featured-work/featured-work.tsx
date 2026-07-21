import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, StaggerItem } from "@/components/ui/motion";
import type { Project } from "@/types";

interface FeaturedWorkProps {
  projects: Project[];
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  return (
    <Section
      id="work"
      title="Selected Work"
      description="Engineering projects demonstrating problem-solving and technical decision-making."
      bordered
      warm

    >
      <StaggerChildren className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const metric = Object.entries(project.metrics).find(
            ([key, val]) => key !== "other" && val
          );

          return (
            <StaggerItem key={project.id}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:shadow-lg hover:border-primary-400"
              >
                {project.assets.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary-200">
                    <Image
                      src={`/${project.assets.cover}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-0 inset-x-0 h-1 bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>

                  {metric && (
                    <p className="mb-4 text-sm font-medium text-foreground">
                      {metric[1]}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tech_stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary-200 px-2 py-0.5 text-sm font-medium text-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech_stack.length > 4 && (
                      <span className="rounded-md bg-primary-200 px-2 py-0.5 text-sm font-medium text-primary-800">
                        +{project.tech_stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 text-base font-medium text-foreground transition-colors group-hover:text-accent-600">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
