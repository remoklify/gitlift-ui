import { Component, OnInit } from '@angular/core';
import { GITLIFT_BADGES } from 'src/app/app.constant';

@Component({
  selector: 'app-badges-page',
  templateUrl: './badges-page.component.html',
  styleUrls: ['./badges-page.component.scss'],
})
export class BadgesPageComponent implements OnInit {
  badges = GITLIFT_BADGES;

  constructor() {}

  ngOnInit(): void {}
}
