import { Component, Input, OnInit } from '@angular/core';
import { ActivityHistory } from 'src/app/model/activity-history/activity-history.model';

@Component({
  selector: 'app-activity-history-card',
  templateUrl: './activity-history-card.component.html',
  styleUrls: ['./activity-history-card.component.scss'],
})
export class ActivityHistoryCardComponent implements OnInit {
  @Input() activityHistory: ActivityHistory | undefined = {} as ActivityHistory;

  constructor() {}

  ngOnInit(): void {}
}
