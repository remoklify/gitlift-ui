import { ActivityHistory } from '../activity-history/activity-history.model';

export interface Contribution {
  totalContributionsCount: number;
  lastWeekEvents?: ActivityHistory;
  languages: string[];
  primaryLanguages: string[];
}
