import NextLink from "next/link";
import { cn } from "@/lib/utils";
import type { LinkProps as BaseLinkProps } from "@/types";

interface LinkProps extends BaseLinkProps {
  showExternalIcon?: boolean;
}

export function Link({
  children,
  className,
  href,
  external,
  underline = false,
  showExternalIcon = true,
}: LinkProps) {
  const baseStyles = cn(
    "inline-flex items-center gap-1 font-medium text-foreground transition-colors duration-fast ease-out",
    "hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    underline && "underline underline-offset-4",
    className
  );

  const externalIcon = showExternalIcon && (
    <svg
      className="h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
        {externalIcon}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseStyles}>
      {children}
    </NextLink>
  );
}
