import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, filter, map, tap, take } from 'rxjs/operators';
import { SearchService } from "../search.service";
import { research } from '../app.animations';

export enum KEY_CODE {
  ARROW_R = 39,
  ARROW_L = 37
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less'],
  animations: [research]
})
export class ResultsComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
   keyEvent(event: KeyboardEvent) {
     if (event.ctrlKey) {
       switch (event.keyCode) {
         case KEY_CODE.ARROW_R: {
           if (+this.page < +this.total/10) this.onPageChange((+this.page + 1).toString());
            break;
         }
         case KEY_CODE.ARROW_L: {
           if (+this.page > 1) this.onPageChange((+this.page - 1).toString());
           break;
         }
       }
     }
   }

  question: Observable<Params>;
  results: Observable<any>;
  sort = new BehaviorSubject('relevance');
  show: boolean = false;
  page: string;
  total: number;

  private currentQuestion: string;

  constructor(
    private route: ActivatedRoute,
    private search: SearchService,
    private router: Router
  ) {
  }

  showContent() {
    setTimeout(_ => this.show = true, 300);
  }

  getResults(title: string, sort: string, page: string) {
    this.show = false;
    this.results = this.search.getAdvancedSearch(title, sort, page).pipe(
      map(res => {
        this.showContent();
        this.total = res.total;
        return res;
      })
    );
  }

  onSortChange(sort: string) {
    this.show = false;
    this.sort.next(sort);
    this.getResults(this.currentQuestion, sort, this.page);
  }
  onPageChange(page) {
    this.show = false;
    this.page = page;
    this.router.navigate(['/results'], { queryParams:
    { question : this.currentQuestion,
      p: page }});
  }

  ngOnInit() {
    this.question = this.route.queryParams.pipe(
      filter(params => params.question));
    this.question.pipe(
      tap( params => {
        this.page = params.p;
        this.currentQuestion = params.question;
        this.getResults(params.question, "relevance", params.p);
      })
    ).subscribe();
  }
}
