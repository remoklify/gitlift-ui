import { Component, Input, OnInit } from '@angular/core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { EarnedBadge } from 'src/app/model/earned-badge/earned-badge.model';
import { GithubService } from 'src/app/service/github/github.service';
import { CommonUtil } from 'src/app/util/common.util';

@Component({
  selector: 'app-earned-card',
  templateUrl: './earned-card.component.html',
  styleUrls: ['./earned-card.component.scss'],
})
export class EarnedCardComponent implements OnInit {
  @Input() hash: string = '';
  earned: EarnedBadge = {} as EarnedBadge;

  EXPIRY: number = 1;

  faCertificate = faCertificate;

  constructor(
    private githubService: GithubService,
    private commonUtil: CommonUtil
  ) {}

  ngOnInit(): void {
    if (this.hash.length > 0) {
      this.githubService
        .decryptHash(this.hash)
        .then((data) => {
          data.subscribe((decrypted: EarnedBadge) => {
            this.earned = decrypted;
            this.earned.created = new Date(this.earned.created);
            this.earned.expiry = this.getNYearsLater(
              this.earned.created,
              this.EXPIRY
            );
            this.earned.expiry.setHours(
              this.earned.created.getHours(),
              this.earned.created.getMinutes(),
              this.earned.created.getSeconds(),
              this.earned.created.getMilliseconds()
            );
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  getNYearsLater = (d: Date, n: number) => {
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    return new Date(year + n, month, day);
  };

  getBadge = (totalPoint: number) => {
    return this.commonUtil.getBadge(totalPoint);
  };
}
