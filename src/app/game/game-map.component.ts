import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-game-mapp',
  templateUrl: 'game-map.component.html',
  styleUrls: ['game-map.component.css'],      
})
export class GameComponent {
  countries: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.countries = this.route.snapshot.data['countries'];
  }


}
