import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { QuickViewService } from '../quickview.service';
import { Owner } from "../shared/owner";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent {

  @Input('result') result: Subject<any>;

  constructor(
    private quickview: QuickViewService,
    private router: Router
  ) { }

  quickOwner(owner: Owner) {
    if (owner!=this.quickview.view.getValue()) this.quickview.view.next(owner);
  }

}
