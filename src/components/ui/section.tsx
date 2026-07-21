import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";
import { Container } from "./container";

interface SectionProps extends BaseComponentProps {
  title?: string;
  description?: string;
  padded?: boolean;
  bordered?: boolean;
  warm?: boolean;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className,
  title,
  description,
  padded = true,
  bordered = false,
  warm = false,
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        bordered && "border-t border-border",
        warm && "section-warm",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            padded && "py-16 md:py-20 lg:py-24"
          )}
        >
          {(title || description) && (
            <div className="mb-10 md:mb-12">
              {title && (
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-1.5 w-10 rounded-full bg-accent-500" />
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    {title}
                  </h2>
                </div>
              )}
              {description && (
                <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </Container>
    </Component>
  );
}
