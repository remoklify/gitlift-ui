import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss'],
})
export class LanguageCardComponent implements OnInit {
  @Input() languages: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
