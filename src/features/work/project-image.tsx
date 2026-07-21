"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  width = 1200,
  height = 750,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg border border-border bg-muted/50",
          className
        )}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{alt}</p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Image not available
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={cn("rounded-lg object-cover", className)}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}
