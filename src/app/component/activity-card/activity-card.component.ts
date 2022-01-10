import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Activity } from 'src/app/model/activity/activity.model';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() contributionDays?: Activity[] = new Array<Activity>();

  @ViewChild('activityChart', { static: true })
  activityChart: ElementRef<HTMLCanvasElement>;

  private context: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    if (this.activityChart) {
      console.log(this.activityChart);
      this.context = (
        this.activityChart.nativeElement as HTMLCanvasElement
      ).getContext('2d') as CanvasRenderingContext2D;
      this.draw();
    }
  }

  private draw() {
    const chart: HTMLCanvasElement = this.activityChart.nativeElement;
    chart.width = 500;
    chart.height = 200;
    this.context.fillStyle = 'rgba(136, 14, 79, 0.2)';

    this.context.fillRect(0, 0, chart.width, chart.height);
  }

  getDay = (weekday: number) => {
    let day: string = '';
    switch (weekday) {
      case 0:
        day = 'Sun';
        break;
      case 1:
        day = 'Mon';
        break;
      case 2:
        day = 'Tue';
        break;
      case 3:
        day = 'Wed';
        break;
      case 4:
        day = 'Thu';
        break;
      case 5:
        day = 'Fri';
        break;
      case 6:
        day = 'Sat';
        break;
    }
    return day;
  };
}
