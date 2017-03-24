import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';

@Injectable()
export class GameResolver implements Resolve<any> {
    constructor(private http: Http) { }

    resolve(): Observable<any> {

        return this.http.get("./countries.json", {})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }
}
