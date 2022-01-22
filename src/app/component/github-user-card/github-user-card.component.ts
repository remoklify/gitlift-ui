import { Component, Input, OnInit } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { GithubUser } from 'src/app/model/github-user/github-user.model';
import { GithubService } from 'src/app/service/github/github.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss'],
})
export class GithubUserCardComponent implements OnInit {
  @Input() username: string = '';
  @Input() onlyMetrics?: boolean = false;

  public user: GithubUser = {} as GithubUser;
  public userFound: boolean = false;
  public loading: boolean = true;

  faBack = faBackward;

  constructor(
    private githubService: GithubService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.username && this.username.length > 0) {
      this.githubService
        .getGithubUserWithUsername(this.username)
        .then((data) => {
          data.subscribe((githubUser) => {
            if (githubUser && githubUser.contribution) {
              this.userFound = true;
              this.user = githubUser;
              this.user.contribution.languages =
                githubUser.contribution.languages.filter(
                  (l: string) =>
                    githubUser.contribution.primaryLanguages.indexOf(l) === -1
                );
            } else {
              console.log('user not found');
              this.userFound = false;
            }
            this.loading = false;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  back = () => {
    this.location.back();
  };
}
