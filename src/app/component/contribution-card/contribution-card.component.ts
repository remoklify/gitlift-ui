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
}
