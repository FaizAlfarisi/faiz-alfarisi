import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

const variantStyles = {
  primary:
    "bg-foreground text-surface hover:bg-foreground/90 active:bg-foreground/80",
  secondary:
    "border border-primary-400 text-foreground bg-surface hover:bg-primary-100 active:bg-primary-200",
  ghost: "text-foreground hover:bg-primary-100 active:bg-primary-200",
  link: "text-foreground underline-offset-4 hover:underline active:opacity-70",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-5 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-base rounded-lg gap-2.5",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  disabled,
  loading,
  icon,
  iconPosition = "left",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-fast ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none";

  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const content = (
    <>
      {loading ? (
        <svg
          className="h-4 w-4 animate-spin"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && iconPosition === "left" && icon
      )}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
