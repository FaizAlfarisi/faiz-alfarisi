import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      role="status"
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
