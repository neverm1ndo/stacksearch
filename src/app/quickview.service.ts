import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from './search.service';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuickViewService {

  view = new BehaviorSubject(null);
  topQuestions: Observable<any>;
  userview: boolean;

  constructor(
    private search: SearchService
  ) {

    this.view.pipe(filter(v => v!=null))
    .pipe(
      tap(v => {
        if (v.user_id) {
          this.userview = true;
          this.topQuestions = this.search.getUsersTopQuestions(v.user_id);
        } else {
          this.userview = false;
          this.topQuestions = this.search.getTagged(v);
        }
    })).subscribe()
  }
}
