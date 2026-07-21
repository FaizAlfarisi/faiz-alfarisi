import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SlideUp } from "@/components/ui/motion";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-12 py-20 md:flex-row md:items-start md:justify-between md:py-0">
          <SlideUp className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              {profile.name.display}
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground md:text-2xl">
              {profile.headline}
            </p>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {profile.bio.short}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/work" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Let&apos;s Connect
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.15} className="shrink-0">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-accent-200/40 via-accent-100/20 to-transparent blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-primary-300 md:h-80 md:w-80 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer">
                <Image
                  src={`/${profile.photo.path}`}
                  alt={`Portrait of ${profile.name.full}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
