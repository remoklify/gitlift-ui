import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  search = (event: any) => {
    console.log(event.target.value);
  }
}
