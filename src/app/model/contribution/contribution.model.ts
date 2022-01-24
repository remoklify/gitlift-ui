import { ActivityHistory } from '../activity-history/activity-history.model';

export interface Contribution {
  totalCommitContributions: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  totalRepositoryContributions: number;
  restrictedContributions: number;
  totalContributionsCount: number;
  totalStargazerCount: number;
  totalForkCount: number;
  totalFollowersCount: number;
  lastWeekEvents: ActivityHistory;
  languages: string[];
  primaryLanguages: string[];
}
