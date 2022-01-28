import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-info-card',
  templateUrl: './badge-info-card.component.html',
  styleUrls: ['./badge-info-card.component.scss']
})
export class BadgeInfoCardComponent implements OnInit {
  @Input() badge: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
