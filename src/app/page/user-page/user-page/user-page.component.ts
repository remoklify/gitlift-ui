import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  public username: string = '';

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log("Params: ", params);
      if (!params.username) {
        //this.router.navigate( [ URLS.notFound ] );
        return;
      }

      this.username = params.username;
    });
  }
}
