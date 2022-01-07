import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  faSearch = faSearch;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search = (event: any) => {
    console.log(event.target.value);
    if (event && event.target && event.target.value) {
      this.router.navigate(['/user/' + event.target.value]).then(() => {
        return true;
      });
    }
  };
}
