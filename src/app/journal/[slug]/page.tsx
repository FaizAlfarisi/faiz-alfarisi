import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { Link as TextLink } from "@/components/ui/link";
import { mdxComponents } from "@/features/journal/mdx-components";
import { getArticleSource } from "@/lib/journal";
import {
  getPublishedWritings,
  getWritingBySlug,
  type Writing,
} from "@/lib/data";
import { formatArticleDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://faizalfarisi.vercel.app";

function getCoverUrl(writing: Writing): string | undefined {
  return writing.cover ? `${baseUrl}/${writing.cover}` : undefined;
}

export function generateStaticParams() {
  return getPublishedWritings().map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing || writing.status !== "published") return {};

  const description = writing.excerpt;
  const cover = getCoverUrl(writing);

  return {
    title: writing.title,
    description,
    openGraph: {
      type: "article",
      title: writing.title,
      description,
      publishedTime: writing.publishedAt,
      authors: writing.author ? [writing.author] : undefined,
      images: cover
        ? [{ url: cover, width: 1271, height: 719, alt: writing.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: writing.title,
      description,
      images: cover ? [cover] : [],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);
  const source = await getArticleSource(slug);

  if (!writing || !source) {
    notFound();
  }

  const published = getPublishedWritings();
  const index = published.findIndex((article) => article.slug === slug);
  const previous = index > 0 ? published[index - 1] : undefined;
  const next =
    index >= 0 && index < published.length - 1
      ? published[index + 1]
      : undefined;

  return (
    <Container>
      <article className="py-16">
        <div className="mx-auto mb-10 max-w-3xl">
          <Link
            href="/journal"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Kembali ke Journal
          </Link>
        </div>

        <SlideUp>
          <header className="mx-auto mb-10 max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{writing.category}</Badge>
              <Badge variant="success">Published</Badge>
            </div>

            <h1 className="mb-5 text-4xl font-bold tracking-tighter md:text-5xl">
              {writing.title}
            </h1>

            {writing.excerpt && (
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {writing.excerpt}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              {writing.author && (
                <span>
                  Oleh{" "}
                  <span className="font-medium text-foreground">
                    {writing.author}
                  </span>
                </span>
              )}
              {writing.affiliation && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{writing.affiliation}</span>
                </>
              )}
              {writing.publishedAt && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={writing.publishedAt}>
                    {formatArticleDate(writing.publishedAt, "id-ID")}
                  </time>
                </>
              )}
              {writing.readingTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{writing.readingTime} menit baca</span>
                </>
              )}
            </div>
          </header>
        </SlideUp>

        <FadeIn>
          <div className="journal-prose mx-auto max-w-3xl">
            <MDXRemote
              source={source}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeKatex],
                },
              }}
            />
          </div>
        </FadeIn>

        {writing.paperUrl && (
          <FadeIn>
            <section className="mx-auto mt-16 max-w-3xl rounded-lg border border-border bg-surface p-6">
              <h2 className="mb-2 text-2xl font-bold tracking-tight">
                Publikasi ilmiah
              </h2>
              <p className="mb-4 text-muted-foreground">
                Artikel ilmiah dari penelitian ini tersedia melalui DOI.
              </p>
              <TextLink href={writing.paperUrl} external>
                Baca artikel ilmiah
              </TextLink>
            </section>
          </FadeIn>
        )}

        {(previous || next) && (
          <FadeIn>
            <nav
              className="mx-auto mt-16 max-w-3xl border-t border-border pt-12"
              aria-label="Article navigation"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {previous && (
                  <Link
                    href={`/journal/${previous.slug}`}
                    className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-primary-400 hover:shadow-lg"
                  >
                    <p className="mb-1 text-xs text-muted-foreground">
                      ← Artikel sebelumnya
                    </p>
                    <p className="font-semibold text-foreground transition-colors group-hover:text-accent-600">
                      {previous.title}
                    </p>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/journal/${next.slug}`}
                    className="group rounded-lg border border-border bg-surface p-6 text-right transition-all hover:border-primary-400 hover:shadow-lg sm:col-start-2"
                  >
                    <p className="mb-1 text-xs text-muted-foreground">
                      Artikel berikutnya →
                    </p>
                    <p className="font-semibold text-foreground transition-colors group-hover:text-accent-600">
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </nav>
          </FadeIn>
        )}

        <div className="mx-auto mt-8 max-w-3xl">
          <Link
            href="/journal"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Kembali ke Journal
          </Link>
        </div>
      </article>
    </Container>
  );
}
