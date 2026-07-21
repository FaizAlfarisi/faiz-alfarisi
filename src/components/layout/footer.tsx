import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getSocials } from "@/lib/data";
import { getCurrentYear } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Journey", href: "/journey" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const socials = getSocials();

  const socialLinks = [
    { label: socials.github.label, href: socials.github.url },
    { label: socials.linkedin.label, href: socials.linkedin.url },
    { label: socials.email.label, href: socials.email.url },
    { label: socials.upwork.label, href: socials.upwork.url },
  ];

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-12 md:py-16">
          <p className="mb-8 text-sm text-muted-foreground">
            Building intelligent systems with thoughtful engineering.
          </p>

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            &copy; {getCurrentYear()} Fa&apos;iz Alfarisi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
