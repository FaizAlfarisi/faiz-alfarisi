import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface HeadingProps extends BaseComponentProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  tracking?: "tighter" | "tight" | "normal" | "wide";
  color?: "foreground" | "muted";
}

const levelStyles = {
  1: "text-5xl md:text-6xl font-bold tracking-tighter",
  2: "text-3xl md:text-4xl font-semibold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold tracking-tight",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg md:text-xl font-semibold",
  6: "text-base md:text-lg font-semibold",
};

const trackingStyles = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
};

export function Heading({
  children,
  className,
  level,
  tracking,
  color = "foreground",
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        levelStyles[level],
        tracking && trackingStyles[tracking],
        color === "muted" && "text-muted-foreground",
        className
      )}
    >
      {children}
    </Tag>
  );
}
