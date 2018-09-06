import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alert } from '../app.animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  animations: [alert]
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  empty: boolean;

  searchQuestions(question : NgForm) {
    if (question.value.quest!=='' || undefined) {
      this.router.navigate(['/results'], { queryParams:
        { question : question.value.quest,
          p: 1 }});
    } else {
      this.empty = true
      setTimeout(_ => this.empty = false, 4000);
    }
  }

  ngOnInit() {
  }

}
