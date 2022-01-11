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
  private padding: number = 20;
  private maxY: number = 0;
  private tickSize: number = 4;
  private tickPadding: number = 4;

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

    this.drawXAxis(this.context, contributionDays, this.tickSize);
    this.drawYxis(this.context, max, this.tickSize);

    let lineX = this.getLongestValueWidth(contributionDays.length) + this.padding * 2;
    let lineY = this.padding * 2;

    for (let i = 0; i < contributionDays.length; i++) {
      const act = contributionDays[i];
      let toY =
        lineY + (act.contributionCount / max) * (this.height - this.padding);
      let toX = lineX + this.width / contributionDays.length;
      this.drawLine(this.context, lineX, lineY, toX, toY);
      lineY = toY;
      lineX = toX;
    }
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
  };

  drawXAxis = (
    ctx: CanvasRenderingContext2D,
    contributionDays: Activity[],
    tickSize: number
  ) => {
    let x = 0;
    let y = this.height;
    for (var n = 0; n < contributionDays.length; n++) {
      const act = contributionDays[n];
      x = (n + 1) * (this.width / contributionDays.length) - this.padding;
      //this.drawLine(ctx, x, y, x, y + tickSize);
      this.drawText(
        ctx,
        this.getDay(act.weekday),
        x,
        y - tickSize - this.tickPadding
      );
    }
  };

  drawYxis = (ctx: CanvasRenderingContext2D, max: number, tickSize: number) => {
    let x = 0;
    let y = 0;
    for (var n = 0; n <= max; n++) {
      y = (n + 1) * (this.height / max) - this.padding;
      //this.drawLine(ctx, x, y, x + tickSize, y);
      this.drawText(
        ctx,
        (max - n).toString(),
        x + tickSize + this.tickPadding,
        y
      );
    }
  };

  drawText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number
  ) => {
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#d2cece';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText(text, x, y);
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
