import { Component, Input, Output, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'generate-points',
    templateUrl: 'app/experiments/generate.points.html'
})
export class GeneratePoints {t
    @Input() count: Array<number> = Array(100).fill(0, 0);//.map((x,i)=>i);
    lat: Array<number> = this.randomArray(52.61, 52.7, 100);
    lon: Array<number> = this.randomArray(-1.11, -1, 100);
    allp: Array<Array<number>> = this.mergelatlon();
    zone: NgZone;

    constructor(zone: NgZone) {
        zone.run(() => {
        });
    }

    randomFromInterval(min, max) {
        let rand = Math.floor(Math.random() * (max * 100 - min * 100 + 1) + min * 100);
        return rand / 100;
    }

    randomArray(min, max, size) {
        let val: Array<number> = Array(size).fill(0, 0);
        val.forEach((element, index, arrayObject) => {
            arrayObject[index] = this.randomFromInterval(min, max);
        });
        console.log(val);
        return val;
    }

    ngOnInit() {
        let timer = Observable.timer(5000, 5000);
        timer.subscribe(t => {
            this.shufflestaff(t);
        });
    }

    shufflestaff(t) {
        this.allp = this.shuffle(this.allp);
        console.log("shuffle");
        this.getdistance();
    }

    mergelatlon() {
        var allpoints: Array<Array<number>> = [];
        var distance = 0;
        let model = this;
        this.lat.forEach((element, index) => {
            allpoints.push([model.lat[index], model.lon[index]]);
            if (index + 1 > model.lat.length - 1) {
            } else {
                let dis = this.distance(model.lon[index], model.lat[index], model.lon[index + 1], model.lat[index + 1]);
                distance += dis;
            }
        });

        console.log(distance);
        return allpoints;
    }

    getdistance() {
        var distance = 0;
        let model = this;
        this.allp.forEach((element, index) => {
            if (index + 1 > model.allp.length - 1) {
            } else {
                let dis = this.distance(model.allp[index][0], model.allp[index][1], model.allp[index + 1][0], model.allp[index + 1][1]);
                distance += dis;
            }
        });
        console.log(distance);

    }

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        return a;
    }

    distance(ax, ay, bx, by) {
        return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    }

    ngOnChanges(changes) {
        console.log(changes);
    }
}
