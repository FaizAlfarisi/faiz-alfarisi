import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface TextProps extends BaseComponentProps {
  variant?: "body" | "lead" | "small" | "caption";
  color?: "foreground" | "muted";
  as?: "p" | "span" | "div";
}

const variantStyles = {
  body: "text-base leading-relaxed",
  lead: "text-lg md:text-xl leading-relaxed",
  small: "text-sm leading-normal",
  caption: "text-xs leading-normal",
};

export function Text({
  children,
  className,
  variant = "body",
  color = "muted",
  as: Component = "p",
}: TextProps) {
  return (
    <Component
      className={cn(
        variantStyles[variant],
        color === "foreground"
          ? "text-foreground"
          : "text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}
