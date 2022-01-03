import { Component, Input, OnInit } from '@angular/core';
import { faBuilding, faEnvelope, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { GithubUser } from 'src/app/model/github-user/github-user.model';
import { GithubService } from 'src/app/service/github/github.service';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss'],
})
export class GithubUserCardComponent implements OnInit {
  @Input() username: string = '';
  public user: GithubUser = {} as GithubUser;

  faUserTie = faUserTie;
  faBuilding = faBuilding;
  faEnvelope = faEnvelope

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    if (this.username && this.username.length > 0) {
      this.githubService
        .getGithubUserWithUsername(this.username)
        .then((data) => {
          data.subscribe((githubUser) => {
            this.user = githubUser;
          });
        });
    }
  }
}
