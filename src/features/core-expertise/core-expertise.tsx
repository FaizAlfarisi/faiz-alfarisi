"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/section";
import type { Skills, SkillSection } from "@/types";

interface CoreExpertiseProps {
  skills: Skills;
}

const monogramMap: Record<string, string> = {
  "artificial-intelligence": "AI",
  "backend-engineering": "BE",
};

function getMonogram(section: SkillSection): string {
  if (monogramMap[section.id]) return monogramMap[section.id];
  return section.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CoreExpertise({ skills }: CoreExpertiseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeSection = skills.sections[activeIndex];

  return (
    <Section
      id="skills"
      title="Core Expertise"
      description="I enjoy building intelligent systems across AI engineering and backend development, transforming ideas into production-ready software."
      bordered

    >
      {/* Enhanced segmented control */}
      <div className="mb-12 flex max-w-lg rounded-xl border border-border bg-surface p-1.5">
        {skills.sections.map((section, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={section.id}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-1 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && !shouldReduceMotion && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-lg bg-primary-200 border border-primary-300/50"
                  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                />
              )}
              {isActive && shouldReduceMotion && (
                <span className="absolute inset-0 rounded-lg bg-primary-200 border border-primary-300/50" />
              )}
              <span className="relative z-10">{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Left: monogram + meta */}
            <div className="flex flex-col items-start md:w-48 shrink-0">
              <span className="text-7xl font-bold leading-none tracking-tighter text-accent-500/15 select-none">
                {getMonogram(activeSection)}
              </span>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="text-sm font-semibold text-foreground">
                  {activeSection.title}
                </span>
                <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-xs font-semibold text-accent-500">
                  {activeSection.items.length}
                </span>
              </div>
            </div>

            {/* Right: description + tags */}
            <div className="flex-1">
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {activeSection.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeSection.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-primary-800 transition-all duration-200 hover:border-primary-400 hover:shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Currently Exploring */}
      {skills.currently_exploring.length > 0 && (
        <div className="mt-14 border-t border-border pt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500">
              Currently Exploring
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.currently_exploring.map((item) => (
              <span
                key={item}
                className="rounded-md bg-primary-50 px-2.5 py-1 text-sm text-primary-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
