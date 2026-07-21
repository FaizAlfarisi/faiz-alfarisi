import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <FadeIn>
          <h1 className="mb-4 text-6xl font-bold tracking-tighter">404</h1>
          <p className="mb-8 max-w-md text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-surface transition-colors hover:bg-foreground/90"
            >
              Back to Home
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary-100"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary-100"
            >
              Contact
            </Link>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
