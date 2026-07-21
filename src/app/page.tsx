import type { Metadata } from "next";
import {
  getProfile,
  getFeaturedProjects,
  getExperiences,
  getSkills,
  getWritings,
  getSocials,
} from "@/lib/data";
import { Hero } from "@/features/hero";
import { FeaturedWork } from "@/features/featured-work";
import { Philosophy } from "@/features/philosophy";
import { ExperienceTimeline } from "@/features/experience";
import { CoreExpertise } from "@/features/core-expertise";
import { EngineeringNotes } from "@/features/engineering-notes";
import { ContactCTA } from "@/features/contact";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Fa'iz Alfarisi — Backend developer and AI engineer building intelligent systems that combine machine learning, software engineering, and real-world usability.",
};

export default function Home() {
  const profile = getProfile();
  const projects = getFeaturedProjects();
  const experiences = getExperiences();
  const skills = getSkills();
  const writings = getWritings();
  const socials = getSocials();

  return (
    <>
      <Hero profile={profile} />
      <FeaturedWork projects={projects} />
      <Philosophy />
      <ExperienceTimeline experiences={experiences} />
      <CoreExpertise skills={skills} />
      <EngineeringNotes writings={writings} />
      <ContactCTA profile={profile} socials={socials} />
    </>
  );
}
