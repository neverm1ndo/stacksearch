import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from "./results/results.component";
import { QuestionComponent } from "./question/question.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent  },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]  },
  { path: 'results', component: ResultsComponent, canActivate: [AuthGuard]  },
  { path: 'question/:id', component: QuestionComponent, canActivate: [AuthGuard]  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
