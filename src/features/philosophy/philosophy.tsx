
import { Section } from "@/components/ui/section";
import { StaggerChildren, StaggerItem } from "@/components/ui/motion";

const principles = [
  {
    number: "01",
    title: "Systems Thinking",
    description:
      "Understand the complete system before optimizing individual components. Every decision affects the whole.",
  },
  {
    number: "02",
    title: "Simplicity First",
    description:
      "Prefer the simplest solution that fully solves the problem. Complexity should be earned, not assumed.",
  },
  {
    number: "03",
    title: "Evidence Over Claims",
    description:
      "Show architecture diagrams, metrics, and trade-offs. Trust is built through demonstrated work, not assertions.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    description:
      "Engineering maturity comes from reflection — acknowledging what failed and what would be improved.",
  },
];

export function Philosophy() {
  return (
    <Section
      id="philosophy"
      title="Engineering Philosophy"
      description="How I approach problems and make engineering decisions."

    >
      <StaggerChildren className="grid gap-5 sm:grid-cols-2">
        {principles.map((principle) => (
          <StaggerItem key={principle.title}>
            <div className="relative rounded-lg border border-border border-l-2 border-l-accent-500 bg-surface p-6 transition-all duration-200 hover:shadow-md hover:border-primary-400">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent-500">
                {principle.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
