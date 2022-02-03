import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToMain = () => {
    this.router.navigate(['/']).then(() => {
      return true;
    });
  };
}
