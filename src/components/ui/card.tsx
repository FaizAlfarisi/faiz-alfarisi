import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

// --- Card Root ---
interface CardRootProps extends BaseComponentProps {
  variant?: "default" | "outlined" | "elevated";
  hover?: boolean;
  href?: string;
  as?: "div" | "article" | "li";
}

const variantStyles = {
  default: "border border-border rounded-lg bg-surface",
  outlined: "border border-border/70 rounded-lg bg-surface",
  elevated: "border border-border rounded-lg bg-surface shadow-sm",
};

function CardRoot({
  children,
  className,
  variant = "default",
  hover = false,
  href,
  as: Component = "div",
}: CardRootProps) {
  const baseStyles = cn(
    "p-6",
    variantStyles[variant],
    hover && "transition-all duration-200 ease-out hover:shadow-md hover:border-primary-400",
    href && "cursor-pointer",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return <Component className={baseStyles}>{children}</Component>;
}

// --- Card Header ---
function CardHeader({ children, className }: BaseComponentProps) {
  return <div className={cn("mb-3", className)}>{children}</div>;
}

// --- Card Title ---
function CardTitle({ children, className }: BaseComponentProps) {
  return (
    <h3 className={cn("text-xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
}

// --- Card Description ---
function CardDescription({ children, className }: BaseComponentProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

// --- Card Content ---
function CardContent({ children, className }: BaseComponentProps) {
  return <div className={cn(className)}>{children}</div>;
}

// --- Card Footer ---
function CardFooter({ children, className }: BaseComponentProps) {
  return (
    <div
      className={cn(
        "mt-4 flex items-center gap-2 text-sm text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

// --- Compound Export ---
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
