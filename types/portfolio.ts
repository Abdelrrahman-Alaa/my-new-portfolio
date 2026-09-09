export type Locale = "ar" | "en";

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedArray {
  ar: string[];
  en: string[];
}

export type ProjectCategory = "all" | "ecommerce" | "corporate" | "apps";

export interface ProjectMetric {
  value: string;
  label: LocalizedString;
}

export interface Project {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  category: "ecommerce" | "corporate" | "apps";
  image: string;
  tags: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  iconName: "Globe" | "ShoppingBag" | "Zap";
  title: LocalizedString;
  description: LocalizedString;
  features: LocalizedArray;
  badge: LocalizedString;
}

export interface SkillItem {
  name: string;
  level: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: SkillItem[];
}

export interface TrustMetric {
  id: string;
  value: string | LocalizedString;
  label: LocalizedString;
  sublabel: LocalizedString;
}

export interface NavigationItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface DeveloperProfile {
  name: LocalizedString;
  avatar?: string;
  workspaceImage?: string;
  title: LocalizedString;
  heroBadge: LocalizedString;
  heroHeading: LocalizedString;
  heroHighlight: LocalizedString;
  heroSubheading: LocalizedString;
  aboutTitle: LocalizedString;
  aboutBio: LocalizedArray;
  stats: {
    yearsExperience: string;
    completedProjects: string;
    clientSatisfaction: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappMessage: LocalizedString;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    location: LocalizedString;
  };
  availability: {
    isAvailable: boolean;
    label: LocalizedString;
  };
  trustMetrics: TrustMetric[];
}

export interface PortfolioData {
  profile: DeveloperProfile;
  navigation: NavigationItem[];
  projects: Project[];
  services: Service[];
  skillCategories: SkillCategory[];
  categories: {
    id: ProjectCategory;
    label: LocalizedString;
  }[];
}
