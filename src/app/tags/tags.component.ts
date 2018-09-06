import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { QuickViewService } from '../quickview.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent {

  @Input('tags') tags: {};

  constructor(
    private quickview: QuickViewService
  ) { }

  quickTag(tag: string) {
    if (tag!=this.quickview.view.getValue()) this.quickview.view.next(tag);
  }

}
