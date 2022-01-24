import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { GithubUser } from 'src/app/model/github-user/github-user.model';
import { GithubService } from 'src/app/service/github/github.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { MD_BADGE } from 'src/app/app.constant';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  faBack = faChevronLeft;
  faGithub = faGithub;

  constructor(
    private githubService: GithubService,
    private router: Router,
    private toastr: ToastrService
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
              this.user.contribution.restrictedContributions =
                this.user.contribution.totalContributionsCount -
                this.user.contribution.totalCommitContributions -
                this.user.contribution.totalIssueContributions -
                this.user.contribution.totalPullRequestContributions -
                this.user.contribution.totalPullRequestReviewContributions -
                this.user.contribution.totalRepositoryContributions;
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
    this.router.navigate(['/']).then(() => {
      return true;
    });
  };

  generateMdBadge = () => {
    const mdBadge = MD_BADGE.replace(
      /\${username}/g,
      this.username.toLowerCase()
    );
    navigator.clipboard.writeText(mdBadge);
    this.toastr.success(
      'Successfully copied to clipboard. Now you can add the badge to your Github Profile.',
      'Gitlift Badge is generated!'
    );
  };
}
