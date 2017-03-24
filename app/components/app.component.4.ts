import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-game-mapp',
  templateUrl: 'app/templates/app.component.4.html'
})
export class AppComponent4 {
  countries: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.countries = this.route.snapshot.data['countries'];
  }


}
