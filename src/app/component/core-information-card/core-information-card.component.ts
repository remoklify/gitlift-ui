import { Component, Input, OnInit } from '@angular/core';
import { CoreInformation } from 'src/app/model/core-information/core-information.model';

@Component({
  selector: 'app-core-information-card',
  templateUrl: './core-information-card.component.html',
  styleUrls: ['./core-information-card.component.scss']
})
export class CoreInformationCardComponent implements OnInit {
  @Input() info: CoreInformation = {} as CoreInformation;
  
  constructor() { }

  ngOnInit(): void {
  }

}
