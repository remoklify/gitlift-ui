import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language/language.model';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss'],
})
export class LanguageCardComponent implements OnInit {
  @Input() languages: Language[] = [];

  public MAX: number = 1000;

  constructor() {}

  ngOnInit(): void {
    this.languages.forEach((l: Language) => {
      let fill =
        (l.point / this.MAX) * 100 > 100 ? 100 : (l.point / this.MAX) * 100;
      l.fill = fill;
      l.out = 100 - fill > 1 ? 1 : 100 - fill;
      console.log(l);
    });
  }
}
