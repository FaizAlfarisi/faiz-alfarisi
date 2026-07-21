import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "outlined";
}

function getPrimaryMetric(project: Project): string | null {
  if (project.metrics.accuracy) return project.metrics.accuracy;
  if (project.metrics.performance) return project.metrics.performance;
  if (project.metrics.users) return project.metrics.users;
  if (project.metrics.other && project.metrics.other.length > 0) {
    return project.metrics.other[0];
  }
  return null;
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const metric = getPrimaryMetric(project);

  const borderClass =
    variant === "outlined"
      ? "border border-border/70"
      : "border border-border";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex flex-col overflow-hidden rounded-lg bg-surface ${borderClass} transition-all duration-200 hover:shadow-lg hover:border-primary-400`}
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
          <p className="mb-4 text-base font-medium text-foreground">{metric}</p>
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
            <span className="rounded-md bg-primary-200 px-2 py-0.5 text-xs font-medium text-primary-800">
              +{project.tech_stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 text-base font-medium text-foreground transition-colors group-hover:text-accent-600">
          Read Case Study →
        </div>
      </div>
    </Link>
  );
}
