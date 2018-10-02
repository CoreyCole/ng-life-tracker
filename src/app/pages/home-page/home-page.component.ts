import { Component, OnInit } from '@angular/core';

import { definedCategories } from '../../categories';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categories = definedCategories;

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}