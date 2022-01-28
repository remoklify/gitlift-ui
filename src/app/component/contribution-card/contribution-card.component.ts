import { Component, Input, OnInit } from '@angular/core';
import {
  faCheckDouble,
  faCode,
  faCodeBranch,
  faDatabase,
  faEnvelope,
  faEyeSlash,
  faFire,
  faProjectDiagram,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Contribution } from 'src/app/model/contribution/contribution.model';
import { CommonUtil } from 'src/app/util/common.util';

@Component({
  selector: 'app-contribution-card',
  templateUrl: './contribution-card.component.html',
  styleUrls: ['./contribution-card.component.scss'],
})
export class ContributionCardComponent implements OnInit {
  @Input() contribution: Contribution = {} as Contribution;

  faCode = faCode;
  faCodeBranch = faCodeBranch;
  faCheckDouble = faCheckDouble;
  faEnvelope = faEnvelope;
  faStar = faStar;
  faProjectDiagram = faProjectDiagram;
  faFire = faFire;
  faDatabase = faDatabase;
  faEyeSlash = faEyeSlash;

  constructor(private commonUtil: CommonUtil) {}

  ngOnInit(): void {}

  getBadge = (contributionCount: number) => {
    return this.commonUtil.getBadge(contributionCount);
  };
}
