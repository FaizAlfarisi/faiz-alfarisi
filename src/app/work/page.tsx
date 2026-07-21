import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { ProjectCard } from "@/features/work/project-card";
import { getFeaturedProjects, getArchiveProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering projects demonstrating problem-solving and technical decision-making.",
};

export default function WorkPage() {
  const featuredProjects = getFeaturedProjects();
  const archiveProjects = getArchiveProjects();

  return (
    <Container>
      <Section padded>
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-10 rounded-full bg-accent-500" />
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl">
              Work
            </h1>
          </div>
          <p className="mb-12 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Selected engineering projects demonstrating problem-solving and
            technical decision-making.
          </p>
        </FadeIn>

        <div className="mb-20">
          <SlideUp>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-1.5 w-8 rounded-full bg-accent-500" />
              <h2 className="text-3xl font-bold tracking-tight">Featured</h2>
            </div>
          </SlideUp>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <SlideUp key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </SlideUp>
            ))}
          </div>
        </div>

        {archiveProjects.length > 0 && (
          <div>
            <SlideUp>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-1.5 w-8 rounded-full bg-accent-500" />
                <h2 className="text-3xl font-bold tracking-tight">Archive</h2>
              </div>
              <p className="mb-8 max-w-2xl text-base text-muted-foreground">
                Additional projects demonstrating consistency and learning
                progression.
              </p>
            </SlideUp>
            <div className="grid gap-6 md:grid-cols-2">
              {archiveProjects.map((project, index) => (
                <SlideUp key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} variant="outlined" />
                </SlideUp>
              ))}
            </div>
          </div>
        )}
      </Section>
    </Container>
  );
}
