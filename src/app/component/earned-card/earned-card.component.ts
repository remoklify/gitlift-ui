import { Component, Input, OnInit } from '@angular/core';
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
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  getBadge = (totalPoint: number) => {
    return this.commonUtil.getBadge(totalPoint);
  };
}
