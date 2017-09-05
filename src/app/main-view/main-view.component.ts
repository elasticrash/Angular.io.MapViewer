import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-view',
    templateUrl: 'main-view.component.html',
    styleUrls: ['main-view.component.css'],
})

export class MainViewComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    fullscreen(where:string){
        this.router.navigate([where]);
    }
}