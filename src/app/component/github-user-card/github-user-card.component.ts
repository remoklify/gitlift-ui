import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { GithubUser } from 'src/app/model/github-user/github-user.model';
import { GithubService } from 'src/app/service/github/github.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LINKEDIN_CERTIFICATE, MD_BADGE } from 'src/app/app.constant';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Language } from 'src/app/model/language/language.model';
import { CommonUtil } from 'src/app/util/common.util';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss'],
})
export class GithubUserCardComponent implements OnInit {
  @Input() username: string = '';

  public user: GithubUser = {} as GithubUser;
  public userFound: boolean = false;
  public loading: boolean = true;

  faBack = faChevronLeft;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(
    private githubService: GithubService,
    private router: Router,
    private toastr: ToastrService,
    private commonUtil: CommonUtil
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
              const length =
                githubUser.contribution.languages.length >= 3
                  ? 3
                  : githubUser.contribution.languages.length;
              this.user.contribution.primaryLanguages =
                this.user.contribution.languages.slice(0, length);
              this.user.contribution.languages =
                githubUser.contribution.languages.filter(
                  (l: Language) =>
                    this.user.contribution.primaryLanguages.indexOf(l) === -1
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
    const badge = this.commonUtil.getBadge(
      this.user.contribution.totalContributionsCount +
        this.user.contribution.totalStargazerCount +
        this.user.contribution.totalFollowersCount +
        this.user.contribution.totalForkCount
    );

    const mdBadge = MD_BADGE.replace(
      /\${username}/g,
      this.username.toLowerCase()
    ).replace(/\${badge}/g, this.commonUtil.toCapitalize(badge));

    navigator.clipboard.writeText(mdBadge);
    this.toastr.success(
      'Successfully copied to clipboard. Now you can add the badge to your Github Profile.',
      'Gitlift Badge is generated!'
    );
  };

  shareBadge = () => {
    const uri = 'https://gitlift.com/earned/' + this.user.contribution.hash;

    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();

    const badge = this.commonUtil.getBadge(
      this.user.contribution.totalContributionsCount +
        this.user.contribution.totalStargazerCount +
        this.user.contribution.totalFollowersCount +
        this.user.contribution.totalForkCount
    );

    const certId = Md5.hashStr(this.user.contribution.hash);

    const linkedin_url = LINKEDIN_CERTIFICATE.replace(
      /\${issue_year}/g,
      year.toString()
    )
      .replace(/\${expiration_year}/g, (year + 1).toString())
      .replace(/\${issue_month}/g, month.toString())
      .replace(/\${expiration_month}/g, month.toString())
      .replace(/\${badge}/g, this.commonUtil.toCapitalize(badge))
      .replace(/\${cert_url}/g, uri)
      .replace(/\${cert_id}/g, certId);

    window.open(linkedin_url, '_blank');
  };
}
