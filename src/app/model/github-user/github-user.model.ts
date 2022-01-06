/**
 * @description holds github user interface
 */

import { Achievement } from '../achievement/achievement.model';
import { Contribution } from '../contribution/contribution.model';
import { CoreInformation } from '../core-information/core-information.model';
import { PersonalInformation } from '../personal-information/personal-information.model';

export interface GithubUser {
  coreInformation: CoreInformation;
  personalInformation: PersonalInformation;
  achievement: Achievement;
  contribution: Contribution;
}
