import { Component, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { QuickViewService } from '../quickview.service';
import { OauthService } from '../oauth.service';
import { tap, filter } from 'rxjs/operators';
import { quickview, arr } from '../app.animations';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.less'],
  animations: [quickview, arr]
})
export class QuickviewComponent implements OnDestroy {

  constructor(
    private quickview: QuickViewService,
  ) {}

  ngOnDestroy(): void {
    this.quickview.topQuestions = null;
  }

}
