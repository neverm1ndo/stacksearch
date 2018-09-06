import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from './app.config';
import { User } from './models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    getById(id: string) {
        return this.http.get(appConfig.apiUrl + '/users/' + id);
    }

    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/register', user);
    }
}
