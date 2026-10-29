import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

interface FigureProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  caption?: string;
  priority?: boolean;
}

function toDimension(value: number | string, name: "width" | "height") {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(
      `Figure: ${name} must be a positive number, received "${value}".`
    );
  }
  return parsed;
}

export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: FigureProps) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          width={toDimension(width, "width")}
          height={toDimension(height, "height")}
          priority={priority}
          sizes="(min-width: 768px) 768px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm leading-normal text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Anchor({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent-600 underline decoration-accent-300 underline-offset-4 transition-colors hover:text-accent-700"
        {...props}
      />
    );
  }

  return (
    <Link
      href={href}
      className="font-medium text-accent-600 underline decoration-accent-300 underline-offset-4 transition-colors hover:text-accent-700"
      {...props}
    />
  );
}

function Table({ children, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-8 overflow-x-auto">
      <table {...props}>{children}</table>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  Figure,
  a: Anchor,
  table: Table,
};
