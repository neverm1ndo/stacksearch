import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { SearchService } from '../search.service';
import { QuickViewService } from '../quickview.service';
import { Observable, of } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { arr } from '../app.animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less'],
  animations: [arr]
})
export class QuestionComponent implements OnInit, OnDestroy {

  question$: Observable<any>;
  question: Array<any>;
  answers: Array<any>;
  sort: string;
  answers$: Observable<any>;
  page: number = 1;

  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private quickview: QuickViewService
  ) { }

  sortByVotes() {
    this.sort = 'votes';
    this.answers$ = of(this.answers.sort((a, b) => b.score - a.score).slice((this.page - 1) * 10, this.page * 10));
  }

  answersPageChange(page) {
    this.page = page;
    this.answers$ = of(this.answers.slice((page - 1) * 10, page * 10));
  }

  sortByDate() {
    this.sort = 'date';
    this.answers$ = of(this.answers.sort((a, b) => a.creation_date - b.creation_date).slice((this.page - 1) * 10, this.page * 10));
  }

  ngOnInit() {
    this.question$ = this.search.getQuestion(this.route.snapshot.paramMap.get('id')).pipe(
      map( quest => quest.items[0])
    );
    this.question$.subscribe( q => {
      this.answers = q.answers;
      this.question = q;
      this.sortByVotes();
    });
  }
  ngOnDestroy() {
    this.quickview.topQuestions = null;
  }

}
