import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { appConfig } from './app.config';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class OauthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  client: any = environment.stackoverflow;

  readonly EXCH_ROOT_URL = 'https://api.stackexchange.com/2.2/info?site=stackoverflow&key=';

  getAppInfo() {
    return this.http.get(this.EXCH_ROOT_URL + this.client.key);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public isAuthenticated(): boolean {
    // pretty hackable
    // mojno bilo decodit' jwt i proveryat' ego
   const token = this.getUserInfo().token;
   if (token) return true;
 }

  login(email: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { email: email, password: password }).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }))
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.removeItem('currentUser');
  }

}
