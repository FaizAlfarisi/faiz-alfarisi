import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { formatArticleDate } from "@/lib/utils";
import type { Writing } from "@/types";

interface EngineeringNotesProps {
  writings: Writing[];
}

const statusConfig = {
  published: { label: "Published", variant: "success" as const },
  draft: { label: "Draft", variant: "warning" as const },
  "coming-soon": { label: "Coming Soon", variant: "outline" as const },
};

export function EngineeringNotes({ writings }: EngineeringNotesProps) {
  return (
    <Section
      id="notes"
      title="Engineering Notes"
      description="Thoughts on engineering decisions, lessons learned, and technical explorations."
      bordered

    >
      <StaggerChildren className="space-y-4">
        {writings.map((writing) => {
          const status = statusConfig[writing.status];

          const isPublished = writing.status === "published";

          const content = (
            <article className="group rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:shadow-md hover:border-primary-400">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                <Badge variant="secondary">{writing.category}</Badge>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {writing.title}
              </h3>
              {writing.status === "coming-soon" && (
                <p className="mt-2 text-base text-muted-foreground">
                  Currently being written. Check back soon.
                </p>
              )}
              {isPublished && (
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  {writing.publishedAt && (
                    <time dateTime={writing.publishedAt}>
                      {formatArticleDate(writing.publishedAt)}
                    </time>
                  )}
                  {writing.readingTime && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{writing.readingTime} min read</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-accent-600">
                    Read article →
                  </span>
                </div>
              )}
            </article>
          );

          return (
            <StaggerItem key={writing.id}>
              {isPublished ? (
                <Link href={`/journal/${writing.slug}`} className="block">
                  {content}
                </Link>
              ) : (
                content
              )}
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
