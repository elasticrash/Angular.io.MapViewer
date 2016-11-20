import { Component, Input } from '@angular/core';

@Component({
    selector: 'generate-points',
    templateUrl: 'app/experiments/generate.points.html'
})
export class GeneratePoints {
    @Input() count: Array<number> = Array(100).fill(0, 0);//.map((x,i)=>i);
    @Input() lat: Array<number> = this.randomArray(52.61, 52.7, 100);
    @Input() lon: Array<number> = this.randomArray(-1.11, -1, 100);

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
}
