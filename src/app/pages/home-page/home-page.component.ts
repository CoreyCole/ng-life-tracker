import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from '../../state.service';
import { TrackingCategory } from '../../models';

@Component({
  selector: 'trk-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categories: Observable<TrackingCategory[]>;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.categories = this.state.scanCategories();
  }

}
