/**
 * @description holds github user interface
 */

export interface GithubUser {
  login: string;
  name?: string;
  avatarUrl: string;
  bio?: string;
  company?: string;
  location?: string;
  email: string;
  websiteUrl?: string;
  isDeveloperProgramMember: boolean;
  isGithubStar: boolean;
  isHireable: boolean;
  totalContributionsCount: number;
  lastWeekEvents: any;
  languages: string[];
  primaryLanguages: string[];
}
