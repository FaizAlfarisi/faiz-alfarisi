import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { getProfile, getSocials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaboration, opportunities, or engineering discussions.",
};

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.5 10.2c0 .7-.2 1.4-.5 2-.4.7-1 1.2-1.7 1.5-.7.4-1.5.5-2.3.5h-.5v3.8h-2V4.2h3c.8 0 1.5.2 2.1.5.6.4 1.1.9 1.4 1.5.3.7.5 1.4.5 2.1v1.9zm-7-5.5v3.3h2.3c.5 0 1-.1 1.4-.4.4-.2.6-.6.6-1 0-.4-.2-.7-.6-1-.3-.2-.8-.3-1.4-.3h-2.3zm0 8.2v3.5h2.4c.5 0 1-.1 1.3-.3.4-.3.5-.6.5-1 0-.4-.1-.7-.5-1-.3-.2-.8-.4-1.3-.4h-2.4zM6.2 4.2l4.7 11.3h-.1L6.6 4.2h-2v15.3h1.9V7.3l4.6 12.2h1.4l4.6-12.2v12.2h2V4.2h-3.1L6.2 15.5h-.1z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: EnvelopeIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Upwork: UpworkIcon,
  Portfolio: GlobeIcon,
};

export default function ContactPage() {
  const profile = getProfile();
  const socials = getSocials();

  const primaryMethods = [
    { label: socials.email.label, value: socials.email.value, url: socials.email.url, external: false },
    { label: socials.linkedin.label, value: socials.linkedin.value, url: socials.linkedin.url, external: true },
  ];

  const secondaryMethods = [
    { label: socials.github.label, value: socials.github.value, url: socials.github.url, external: true },
    { label: socials.upwork.label, value: socials.upwork.value, url: socials.upwork.url, external: true },
    { label: socials.portfolio.label, value: socials.portfolio.value, url: socials.portfolio.url, external: true },
  ];

  return (
    <Container>
      <Section padded>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-1.5 w-10 rounded-full bg-accent-500" />
              <h1 className="text-5xl font-bold tracking-tighter md:text-6xl">
                Let&apos;s Connect
              </h1>
              <span className="h-1.5 w-10 rounded-full bg-accent-500" />
            </div>
            <p className="mb-12 text-lg md:text-xl text-muted-foreground">
              {profile.cta.primary.description}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 mb-8">
            {primaryMethods.map((method) => {
              const Icon = iconMap[method.label];
              return (
                <StaggerItem key={method.label}>
                  <a
                    href={method.url}
                    {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-lg bg-foreground px-6 py-5 text-left transition-colors hover:bg-foreground/90"
                  >
                    {Icon && <Icon className="h-6 w-6 shrink-0 text-surface/70" />}
                    <div>
                      <p className="text-base font-semibold text-surface">{method.label}</p>
                      <p className="text-sm text-surface/70">{method.value}</p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {secondaryMethods.map((method) => {
              const Icon = iconMap[method.label];
              return (
                <StaggerItem key={method.label}>
                  <a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-left transition-all hover:border-primary-400 hover:shadow-md"
                  >
                    {Icon && <Icon className="h-5 w-5 shrink-0 text-primary-600" />}
                    <div>
                      <p className="text-base font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Section>
    </Container>
  );
}
