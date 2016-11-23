import { Component, Input, Output, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'generate-points',
    templateUrl: 'app/experiments/generate.points.html'
})
export class GeneratePoints {
    t
    @Input() count: Array<number> = Array(100).fill(0, 0);//.map((x,i)=>i);
    lat: Array<number> = this.randomArray(52.61, 52.7, 100);
    lon: Array<number> = this.randomArray(-1.11, -1, 100);
    allp: Array<Array<number>> = this.mergelatlon();
    allpclone: Array<Array<number>> = [...this.allp];
    generations: Array<any> = [];
    generationsScore: Array<any> = [];
    seed: Array<number> = Array(100).fill(0, 0).map((x, i) => i);
    genloop: number = 0;
    keep: number = 2;
    timer = Observable.timer(2000, 100);
    subscription;

    constructor(zone: NgZone) {
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
        this.subscription = this.timer.subscribe(t => {
            this.shufflestaff(t);
        });
    }

    sortNumber(a, b) {
        return a - b;
    }

    shufflestaff(t) {
        let newgen = [...this.allpclone];
        let seedclone = [...this.seed]
        this.shuffle(seedclone);

        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();
        var seedgen = [];

        seedsplice.forEach((element, index) => {
            seedgen[index] = newgen[element];
        });

        seedsplice.forEach((element, index) => {
            newgen.splice(element, 1);
        });

        this.shuffle(newgen);

        seedsplice.forEach((element, index) => {
            newgen.splice(element, 0, seedgen[index]);
        });

        console.log("shuffle");
        let distance = this.getdistance(newgen);

        if (this.generations.length < 10) {
            this.generations.push(newgen);
            this.generationsScore.push(distance);
        } else {
            let maxItem = Math.max(...this.generationsScore);
            if (maxItem > distance) {
                let maxIndex = this.generationsScore.indexOf(maxItem);
                this.generationsScore[maxIndex] = distance;
                this.generations[maxIndex] = newgen;
            }
        }
        let minItem = Math.min(...this.generationsScore);
        let minIndex = this.generationsScore.indexOf(minItem);
        this.allp = this.generations[minIndex];

        if (distance < this.generationsScore[this.genloop]) {
            this.keep += 1;
            console.log("now keep is at ", this.keep);
            if (this.keep > 50) {
                this.subscription.unsubscribe();
            }
        }

        this.allpclone = this.generations[this.genloop];
        if (this.genloop < this.generations.length - 1) {
            this.genloop += 1
        } else {
            this.genloop = 0;
        }




        console.log("loop", this.genloop);
        console.log("score", this.generationsScore);
        console.log("generation", this.generations);

    }

    mergelatlon() {
        var allpoints: Array<Array<number>> = [];
        var distance = 0;
        let model = this;
        this.lat.forEach((element, index) => {
            allpoints[index] = [model.lat[index], model.lon[index]];
        });
        return allpoints;
    }

    getdistance(gen) {
        var distance = 0;
        gen.forEach((element, index) => {
            if (index + 1 > gen.length - 1) {
            } else {
                let dis = this.distance(gen[index][0], gen[index][1], gen[index + 1][0], gen[index + 1][1]);
                distance += dis;
            }
        });


        console.log(distance);
        return distance;
    }

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    distance(ax, ay, bx, by) {
        return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    }

    ngOnChanges(changes) {
        console.log(changes);
    }
}
