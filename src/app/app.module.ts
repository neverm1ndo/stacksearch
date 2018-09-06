import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RoutingModule } from './/routing.module';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResultsComponent } from './results/results.component';
import { LoaderComponent } from './loader/loader.component';
import { EntityPipe } from './shared/entity.pipe';
import { UnixdatePipe } from './shared/unixdate.pipe';
import { QuickviewComponent } from './quickview/quickview.component';
import { ResultComponent } from './result/result.component';
import { QuestPipe } from './shared/quest.pipe';
import { TagsComponent } from './tags/tags.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentComponent } from './comment/comment.component';
import { AnswerComponent } from './answer/answer.component';
import { HeadComponent } from './head/head.component';

import { UserService } from "./user.service";
import { AuthGuard } from './guard/auth.guard';
import { JwtInterceptorProvider } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/err.interceptor';
import { OauthService } from './oauth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ResultsComponent,
    LoaderComponent,
    EntityPipe,
    UnixdatePipe,
    QuickviewComponent,
    ResultComponent,
    QuestPipe,
    TagsComponent,
    PaginationComponent,
    QuestionComponent,
    PageNotFoundComponent,
    CommentComponent,
    AnswerComponent,
    HeadComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    OauthService,
    UserService,
    // JwtInterceptorProvider // q: why it's comented? a: open ./helpers/jwt.interceptor there's an explanation
    ErrorInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
