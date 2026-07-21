import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface ContainerProps extends BaseComponentProps {
  variant?: "default" | "narrow" | "wide";
  as?: "div" | "section" | "article" | "main";
}

const variants = {
  default: "max-w-[1200px]",
  narrow: "max-w-[720px]",
  wide: "max-w-[1400px]",
};

export function Container({
  children,
  className,
  variant = "default",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-8 lg:px-12",
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
