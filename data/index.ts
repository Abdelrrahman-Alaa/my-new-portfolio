import { PortfolioData } from "@/types/portfolio";
import { profileData } from "./profile";
import { projectsData, projectCategoriesData } from "./projects";
import { servicesData } from "./services";
import { skillCategoriesData } from "./skills";
import { navigationData } from "./navigation";

export const portfolioData: PortfolioData = {
  profile: profileData,
  navigation: navigationData,
  categories: projectCategoriesData,
  projects: projectsData,
  services: servicesData,
  skillCategories: skillCategoriesData,
};

export {
  profileData,
  projectsData,
  projectCategoriesData,
  servicesData,
  skillCategoriesData,
  navigationData,
};
