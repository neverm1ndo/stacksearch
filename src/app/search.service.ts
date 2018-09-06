import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OauthService } from "./oauth.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private oauth: OauthService
  ) { }

  page: string;

  readonly SRC_URL = 'https://api.stackexchange.com/2.2/search/advanced';
  readonly QSTN_URL = 'https://api.stackexchange.com/2.2/questions';
  readonly USERS_URL = 'https://api.stackexchange.com/2.2/users';

  getAdvancedSearch(title: string, sort: string, page: string): Observable<any> {
    return this.http.get(this.SRC_URL ,{params:
      { pagesize: '10',
        page: page,
        order: "desc",
        sort: sort,
        title: title,
        site: "stackoverflow",
        filter: "!b1MMEUbuR8poMa",
        key: this.oauth.client.key
      }
    });
  }

  getUsersTopQuestions(id :number) {
    return this.http.get(this.USERS_URL + `/${id}/questions` , {params:
      { order: "desc",
        sort: "votes",
        site: "stackoverflow",
        pagesize: "4",
        key: this.oauth.client.key
      }});
    }

  getTagged(tag: string): Observable<any> {
    return this.http.get(this.SRC_URL , {params:
      { pagesize: '4',
        page: '1',
        order: "desc",
        sort: "votes",
        tagged: tag,
        site: "stackoverflow",
        key: this.oauth.client.key
      }});
  }
  getQuestion(id: string): Observable<any> {
    return this.http.get(this.QSTN_URL + `/${id}` , {params:
      { order: "desc",
        sort: "activity",
        site: "stackoverflow",
        filter: "!LVBj29mB6Y(88vxKX2ObLu",
        key: this.oauth.client.key
      }});
  }
}
