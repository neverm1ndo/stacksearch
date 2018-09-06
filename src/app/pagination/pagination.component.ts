import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable, range, BehaviorSubject } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input('total') total: number;
  @Input('page') page$: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  pages$: Observable<number[]>

  selectPage(page: number) {
    this.pageChange.emit(page);
  }

  getPages() {
    this.pages$ = range(-3, 3 * 2 + 1).pipe(
      map(offset => +this.page$ + offset)).pipe(
      filter(page => this.isValidPageNumber(page, Math.ceil(this.total/10)))
    ).pipe(
      toArray()
    );
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  ngOnChanges() {
    this.getPages();
  }

  ngOnInit() {
    this.getPages()
  }

}
