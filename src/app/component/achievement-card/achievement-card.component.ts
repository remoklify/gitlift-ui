import { Component, Input, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Achievement } from 'src/app/model/achievement/achievement.model';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss']
})
export class AchievementCardComponent implements OnInit {
  @Input() achievement: Achievement = {} as Achievement;

  faCheck = faCheck;
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
