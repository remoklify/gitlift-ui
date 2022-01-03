import { Component, OnInit } from '@angular/core';
import { GithubUser } from 'src/app/model/github-user/github-user.model';
import { GithubService } from 'src/app/service/github/github.service';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss'],
})
export class GithubUserCardComponent implements OnInit {
  public user: GithubUser = {} as GithubUser;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getGithubUserWithUsername('fatihturker').then((data) => {
      data.subscribe((githubUser) => {
        console.log(githubUser);
        this.user = githubUser;
      });
    });
  }
}
