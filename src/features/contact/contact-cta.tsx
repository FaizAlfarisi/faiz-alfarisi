
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SlideUp } from "@/components/ui/motion";
import type { Profile, Socials } from "@/types";

interface ContactCTAProps {
  profile: Profile;
  socials: Socials;
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

export function ContactCTA({ profile, socials }: ContactCTAProps) {
  return (
    <Section id="contact" warm>
      <SlideUp>
        <div className="relative mx-auto max-w-2xl text-center py-8 md:py-12">
          <div className="absolute inset-0 -m-6 rounded-2xl bg-gradient-to-b from-accent-100/50 via-primary-100/30 to-transparent" />

          <div className="relative">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              {profile.cta.primary.title}
            </h2>
            <p className="mb-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
              {profile.cta.primary.description}
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={socials.email.url} variant="primary" size="lg">
                Send an Email
              </Button>
              <Button href={socials.linkedin.url} variant="secondary" size="lg">
                Connect on LinkedIn
              </Button>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <Button href={socials.github.url} variant="secondary" size="md" icon={<GitHubIcon className="h-4 w-4" />}>
                GitHub
              </Button>
              <Button href={socials.upwork.url} variant="secondary" size="md" icon={<UpworkIcon className="h-4 w-4" />}>
                Upwork
              </Button>
            </div>
          </div>
        </div>
      </SlideUp>
    </Section>
  );
}
