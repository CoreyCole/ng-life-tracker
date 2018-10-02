import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { definedCategories, sampleFoodLog } from './example-data';
import { TrackingCategory, HistoryLog } from './models';

@Injectable()
export class StateService {
  constructor() {}

  scanCategories(): Observable<TrackingCategory[]> {
    return of(definedCategories);
  }

  getCategory(name: string): Observable<TrackingCategory> {
    for (const category of definedCategories) {
      if (category.name === name) return of(category);
    }
    return throwError(`category not found: ${name}`);
  }

  getHistory(categoryName: string): Observable<HistoryLog> {
    if (categoryName === 'food') {
      return of(sampleFoodLog);
    } else {
      return of({ rows: [] });
    }
  }
}
