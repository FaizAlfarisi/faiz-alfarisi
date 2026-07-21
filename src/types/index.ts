// Common types used throughout the application

import type {
  Profile,
  Education,
  Experience,
  Certification,
  Honor,
  Skills,
  SkillSection,
  Social,
  Socials,
  Writing,
  Project,
  Projects,
} from "@/lib/data";

export type {
  Profile,
  Education,
  Experience,
  Certification,
  Honor,
  Skills,
  SkillSection,
  Social,
  Socials,
  Writing,
  Project,
  Projects,
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
};

export type Section = {
  id: string;
  title: string;
  description?: string;
};

export type CTAVariant = "primary" | "secondary" | "ghost";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

export type ButtonSize = "sm" | "md" | "lg";

export type CardVariant = "default" | "outlined" | "elevated";

export type BadgeVariant = "default" | "secondary" | "outline" | "success" | "warning" | "error";

export type ResponsiveValue<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type AnimationDirection = "up" | "down" | "left" | "right";

export type AnimationVariant = "fade" | "slide" | "scale" | "stagger";

export type MotionConfig = {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  viewport?: object;
};

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface HeadingProps extends BaseComponentProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  hover?: boolean;
  clickable?: boolean;
  href?: string;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
}

export interface LinkProps extends BaseComponentProps {
  href: string;
  external?: boolean;
  underline?: boolean;
}

// Layout types
export interface LayoutProps extends BaseComponentProps {
  navigation?: NavigationItem[];
  footer?: boolean;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  description?: string;
  padded?: boolean;
  bordered?: boolean;
}

// Feature prop types
export interface HeroProps extends BaseComponentProps {
  profile: Profile;
}

export interface FeaturedWorkProps extends BaseComponentProps {
  projects: Project[];
}

export interface ExperienceProps extends BaseComponentProps {
  experiences: Experience[];
}

export interface SkillsProps extends BaseComponentProps {
  skills: Skills;
}

export interface EngineeringNotesProps extends BaseComponentProps {
  writings: Writing[];
}

export interface ContactProps extends BaseComponentProps {
  profile: Profile;
  socials: Socials;
}
