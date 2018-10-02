import { Component, OnInit, Input } from '@angular/core';

import { TrackingCategory, HistoryLog } from './../../models';

@Component({
  selector: 'trk-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  @Input() category: TrackingCategory;

  constructor() { }

  ngOnInit() {
  }

  track(data: HistoryLog) {
    console.log('tracking', data);
  }

}
