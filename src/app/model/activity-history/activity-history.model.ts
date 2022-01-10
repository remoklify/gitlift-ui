import { Activity } from '../activity/activity.model';

export interface ActivityHistory {
  contributionDays?: Activity[];
  firstDay?: string;
}
