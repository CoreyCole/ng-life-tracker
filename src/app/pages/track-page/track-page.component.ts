import { TrackingCategory, HistoryLog } from './../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../../state.service';

@Component({
  selector: 'trk-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit {
  categoryName: Observable<string>;
  trackingCategory: Observable<TrackingCategory>;
  history: Observable<HistoryLog>;

  constructor(
    private route: ActivatedRoute,
    public state: StateService
  ) { }

  ngOnInit() {
    this.categoryName = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('name'))
      );
    this.categoryName.subscribe(name => {
      console.log(name);
      this.history = this.state.getHistory(name);
      this.trackingCategory = this.state.getCategory(name);
    });
  }

}
