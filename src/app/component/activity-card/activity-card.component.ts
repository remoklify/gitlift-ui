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

  private width: number = 500;
  private height: number = 200;
  private padding: number = 50;
  private font: string = '12pt Calibri';
  private x: number = 0;
  private y: number = 0;
  private maxX: number = 0;
  private maxY: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.activityChart && this.contributionDays) {
      console.log(this.activityChart);
      this.context = (
        this.activityChart.nativeElement as HTMLCanvasElement
      ).getContext('2d') as CanvasRenderingContext2D;
      this.draw(this.contributionDays);
    }
  }

  getLongestValueWidth = (length: number) => {
    var longestValueWidth = 0;
    for (var n = 0; n <= length; n++) {
      var value = (this.maxY - n * length).toString();
      longestValueWidth = Math.max(
        longestValueWidth,
        this.context.measureText(value).width
      );
    }
    return longestValueWidth;
  };

  draw = (contributionDays: Activity[]) => {
    const chart: HTMLCanvasElement = this.activityChart.nativeElement;
    chart.width = this.width;
    chart.height = this.height;
    this.context.fillStyle = 'rgba(245, 127, 23, 0.2)';

    this.context.fillRect(0, 0, chart.width, chart.height);

    const max = this.getMaxContribution(contributionDays);

    this.x =
      this.getLongestValueWidth(contributionDays.length) + this.padding * 2;
    this.y = this.padding * 2;

    this.drawXAxis(this.context, contributionDays, 5);

    // for (let i = 0; i < contributionDays.length; i++) {
    //   const act = contributionDays[i];
    //   // let toY =
    //   //   y + (act.contributionCount / max) * (this.height - this.padding);
    //   // let toX = x + this.width / contributionDays.length;
    //   // this.drawLine(this.context, x, y, toX, toY);
    //   // y = toY;
    //   // x = toX;
    // }
  };

  drawLine = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = '#d2cece';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.translate(toX, toY);
  };

  drawXAxis = (
    ctx: CanvasRenderingContext2D,
    contributionDays: Activity[],
    tickSize: number
  ) => {
    let x = 0;
    let y = this.height - tickSize;
    for (var n = 0; n < contributionDays.length; n++) {
      const act = contributionDays[n];
      x = (n + 1) * (this.width / contributionDays.length);
      this.drawLine(ctx, x, y, x, y + tickSize);
      this.drawText(ctx, act.weekday, x, y);
    }
  };

  drawText = (
    ctx: CanvasRenderingContext2D,
    weekday: number,
    x: number,
    y: number
  ) => {
    ctx.lineWidth = 0.5;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText(this.getDay(weekday), 80, 10);
  };

  getMaxContribution = (contributionDays: Activity[]) => {
    let max = 0;
    for (let i = 0; i < contributionDays.length; i++) {
      const act = contributionDays[i];
      if (act.contributionCount > max) {
        max = act.contributionCount;
      }
    }

    return max;
  };

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
