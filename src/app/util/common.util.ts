import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtil {
  getBadge = (contributionCount: number) => {
    if (contributionCount >= 4000) {
      return 'master';
    } else if (contributionCount >= 2000) {
      return 'expert';
    } else if (contributionCount >= 1000) {
      return 'productive';
    } else if (contributionCount >= 500) {
      return 'determined';
    } else {
      return 'beginner';
    }
  };

  toCapitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
