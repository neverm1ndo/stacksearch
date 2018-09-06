import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.less']
})
export class AnswerComponent {

  @Input('answer') answer: Observable<any>;

}
