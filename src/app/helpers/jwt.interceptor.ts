import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // S interceptorom oblom, no po suti token to mne ne nuzhen bedet sovsem, ved' ya ne budu managit' nichego, mne nujen tol'ko login i signup
        // Token budet vidavat'sya useru i hranit'sya v localStorage.('currentUser') vmeste s otal'nimi dannimi
        // interceptor zakomenchen v app.module t.k on konfliktuet c API Stackoverflow ibo otpravlyaet v requeste liwniy zagolovok Authorization s tokenom
        // kotoriy vidaet localniy server lul
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

export const JwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
};
