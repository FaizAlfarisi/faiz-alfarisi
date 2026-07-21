import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { ProjectImage } from "@/features/work/project-image";
import {
  getProjectBySlug,
  getNextProject,
  getPreviousProject,
  getAllProjects,
} from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.assets.cover
        ? [
            {
              url: `https://faiz-alfarisi.vercel.app/${project.assets.cover}`,
              width: 1200,
              height: 750,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: project.assets.cover
        ? [`https://faiz-alfarisi.vercel.app/${project.assets.cover}`]
        : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  const previousProject = getPreviousProject(slug);

  return (
    <Container>
      <article className="py-16">
        <SlideUp>
          <header className="mb-16 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">{project.tagline}</p>
          </header>
        </SlideUp>

        {project.assets.cover && (
          <SlideUp>
            <div className="mb-16">
              <ProjectImage
                src={`/${project.assets.cover}`}
                alt={project.title}
                width={1200}
                height={750}
                className="w-full rounded-lg border border-border"
                priority
              />
            </div>
          </SlideUp>
        )}

        <div className="mx-auto max-w-3xl">
          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Overview</SectionHeading>
              <p className="leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Problem</SectionHeading>
              <p className="leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Solution</SectionHeading>
              <p className="leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Architecture</SectionHeading>
              <div className="rounded-lg border border-border bg-primary-100/50 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  {project.architecture.nodes.map((node, index) => (
                    <div key={node} className="flex items-center gap-3">
                      <span className="rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium">
                        {node}
                      </span>
                      {index < project.architecture.nodes.length - 1 && (
                        <span className="text-primary-500">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {project.architecture.edges && project.architecture.edges.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    {project.architecture.edges.join(" · ")}
                  </p>
                </div>
              )}
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Engineering Decisions</SectionHeading>
              <ul className="space-y-3">
                {project.engineering_decisions.map((decision, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span className="leading-relaxed">{decision}</span>
                  </li>
                ))}
              </ul>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Challenges</SectionHeading>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Lessons Learned</SectionHeading>
              <ul className="space-y-3">
                {project.lessons_learned.map((lesson, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Future Improvements</SectionHeading>
              <ul className="space-y-3">
                {project.future_improvements.map((improvement, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span className="leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </SlideUp>

          <SlideUp>
            <section className="mb-16">
              <SectionHeading>Technology</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary-200 px-3 py-1.5 text-sm font-medium text-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </SlideUp>

          {project.assets.gallery && project.assets.gallery.length > 0 && (
            <SlideUp>
              <section className="mb-16">
                <SectionHeading>Gallery</SectionHeading>
                <div className="grid gap-4">
                  {project.assets.gallery.map((image, index) => (
                    <ProjectImage
                      key={index}
                      src={`/${image}`}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1200}
                      height={750}
                      className="w-full rounded-lg border border-border"
                    />
                  ))}
                </div>
              </section>
            </SlideUp>
          )}

          {(project.metrics.accuracy ||
            project.metrics.performance ||
            project.metrics.dataset ||
            project.metrics.users ||
            (project.metrics.other && project.metrics.other.length > 0)) && (
            <SlideUp>
              <section className="mb-16">
                <SectionHeading>Results</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.metrics.accuracy && (
                    <div className="rounded-lg border border-border bg-surface p-4">
                      <p className="text-sm text-muted-foreground">Accuracy</p>
                      <p className="text-lg font-semibold">{project.metrics.accuracy}</p>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div className="rounded-lg border border-border bg-surface p-4">
                      <p className="text-sm text-muted-foreground">Performance</p>
                      <p className="text-lg font-semibold">{project.metrics.performance}</p>
                    </div>
                  )}
                  {project.metrics.dataset && (
                    <div className="rounded-lg border border-border bg-surface p-4">
                      <p className="text-sm text-muted-foreground">Dataset</p>
                      <p className="text-lg font-semibold">{project.metrics.dataset}</p>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div className="rounded-lg border border-border bg-surface p-4">
                      <p className="text-sm text-muted-foreground">Users</p>
                      <p className="text-lg font-semibold">{project.metrics.users}</p>
                    </div>
                  )}
                </div>
                {project.metrics.other && project.metrics.other.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {project.metrics.other.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </SlideUp>
          )}

          {(project.links.github || project.links.demo) && (
            <SlideUp>
              <section className="mb-16">
                <SectionHeading>Links</SectionHeading>
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-100"
                    >
                      GitHub Repository
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-100"
                    >
                      View Demo
                    </Link>
                  )}
                </div>
              </section>
            </SlideUp>
          )}
        </div>

        <FadeIn>
          <nav className="border-t border-border pt-12" aria-label="Project navigation">
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {previousProject && (
                <Link
                  href={`/work/${previousProject.slug}`}
                  className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-primary-400 hover:shadow-lg"
                >
                  <p className="mb-1 text-xs text-muted-foreground">← Previous</p>
                  <p className="font-semibold text-foreground transition-colors group-hover:text-accent-600">
                    {previousProject.title}
                  </p>
                </Link>
              )}
              {nextProject && (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group rounded-lg border border-border bg-surface p-6 text-right transition-all hover:border-primary-400 hover:shadow-lg"
                >
                  <p className="mb-1 text-xs text-muted-foreground">Next →</p>
                  <p className="font-semibold text-foreground transition-colors group-hover:text-accent-600">
                    {nextProject.title}
                  </p>
                </Link>
              )}
            </div>
          </nav>
        </FadeIn>

        <div className="mx-auto mt-8 max-w-3xl">
          <Link
            href="/work"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Work
          </Link>
        </div>
      </article>
    </Container>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-1.5 w-8 rounded-full bg-accent-500" />
      <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}
