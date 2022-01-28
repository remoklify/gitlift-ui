import { Injectable } from '@angular/core';
import { GITLIFT_BADGES } from '../app.constant';

@Injectable({
  providedIn: 'root',
})
export class CommonUtil {
  getBadge = (contributionCount: number, popularity: number) => {
    const sorted = GITLIFT_BADGES.sort((a: any, b: any) => {
      if (a.minCount > b.minCount) {
        return -1;
      }

      if (a.minCount < b.minCount) {
        return 1;
      }

      return 0;
    });
    
    for(let i = 0; i < sorted.length; i++) {
      const badge = sorted[i];

      if (contributionCount + popularity >= badge.minCount) {
        return badge.name;
      }
    }

    return 'beginner';
  };

  toCapitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
