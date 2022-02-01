import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-earned-page',
  templateUrl: './earned-page.component.html',
  styleUrls: ['./earned-page.component.scss'],
})
export class EarnedPageComponent implements OnInit {
  hash: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params.hash) {
        //this.router.navigate( [ URLS.notFound ] );
        return;
      }

      this.hash = params.hash;
    });
  }
}
