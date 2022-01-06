import { Component, Input, OnInit } from '@angular/core';
import { PersonalInformation } from 'src/app/model/personal-information/personal-information.model';
import { faBuilding, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLink,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-information-card',
  templateUrl: './personal-information-card.component.html',
  styleUrls: ['./personal-information-card.component.scss'],
})
export class PersonalInformationCardComponent implements OnInit {
  @Input() info: PersonalInformation = {} as PersonalInformation;

  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faLink = faLink;

  constructor() {}

  ngOnInit(): void {}
}
