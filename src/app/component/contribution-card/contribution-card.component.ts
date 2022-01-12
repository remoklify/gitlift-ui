import { Component, Input, OnInit } from '@angular/core';
import { Contribution } from 'src/app/model/contribution/contribution.model';

@Component({
  selector: 'app-contribution-card',
  templateUrl: './contribution-card.component.html',
  styleUrls: ['./contribution-card.component.scss'],
})
export class ContributionCardComponent implements OnInit {
  @Input() contribution: Contribution = {} as Contribution;

  constructor() {}

  ngOnInit(): void {}

  getBadge = (contributionCount: number) => {
    if (contributionCount >= 5000) {
      return 'master';
    } else if (contributionCount >= 3000) {
      return 'expert';
    } else if (contributionCount >= 1000) {
      return 'pro';
    } else if (contributionCount >= 500) {
      return 'determined';
    } else {
      return 'beginner';
    }
  };
}
