import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/types";

const variantStyles = {
  default: "bg-foreground text-surface",
  secondary: "bg-primary-200 text-primary-800",
  outline: "border border-primary-400 text-primary-700",
  success: "bg-emerald-100 text-emerald-800 border border-emerald-300",
  warning: "bg-amber-100 text-amber-800 border border-amber-300",
  error: "bg-red-100 text-red-800 border border-red-300",
};

export function Badge({
  children,
  className,
  variant = "secondary",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
