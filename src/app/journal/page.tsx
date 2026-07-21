import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { getWritings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Thoughts on engineering decisions, lessons learned, and technical explorations.",
};

const statusConfig = {
  published: { label: "Published", variant: "success" as const },
  draft: { label: "Draft", variant: "warning" as const },
  "coming-soon": { label: "Coming Soon", variant: "outline" as const },
};

export default function JournalPage() {
  const writings = getWritings();

  return (
    <Container>
      <Section padded>
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-10 rounded-full bg-accent-500" />
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl">
              Journal
            </h1>
          </div>
          <p className="mb-12 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Thoughts on engineering decisions, lessons learned, and technical
            explorations.
          </p>
        </FadeIn>

        <StaggerChildren className="space-y-4">
          {writings.map((writing) => {
            const status = statusConfig[writing.status];

            return (
              <StaggerItem key={writing.id}>
                <article className="rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:border-primary-400 hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="secondary">{writing.category}</Badge>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {writing.title}
                  </h2>

                  {writing.status === "coming-soon" && (
                    <p className="mt-2 text-base text-muted-foreground">
                      Currently being written. Check back soon.
                    </p>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>
    </Container>
  );
}
