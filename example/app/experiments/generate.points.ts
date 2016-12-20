import { Component, Input, Output, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MapService } from 'angular2.leaflet.components/services/map.service';
declare var L: any;

var moment = require('moment');

@Component({
    selector: 'generate-points',
    templateUrl: 'app/experiments/generate.points.html'
})
export class GeneratePoints {
    population: number = 9;
    @Input() count: Array<number> = Array(this.population).fill(0, 0);//.map((x,i)=>i);
    lat: Array<number> = this.randomArray(52.611, 52.701, this.population);
    lon: Array<number> = this.randomArray(-1.109, -1.001, this.population);
    allp: Array<Array<number>> = this.mergelatlon();
    allpclone: Array<Array<number>> = [...this.allp];
    generations: Array<any> = [];
    generationsScore: Array<any> = [];
    seed: Array<number> = Array(this.population).fill(0, 0).map((x, i) => i);
    genloop: number = 0;
    keep: number = 1;
    timer = Observable.timer(2000, 50);
    subscription;
    options = {};
    ourCustomControl;
    ourCustomControlConstructor;
    solutions = 0;

    constructor(private mapService: MapService) {
    }

    randomFromInterval(min, max) {
        let rand = Math.floor(Math.random() * (max * 1000 - min * 1000 + 1) + min * 1000);
        return rand / 1000;
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
        var model = this;
        this.ourCustomControlConstructor = L.Control.extend({
            options: {
                position: 'topleft'
            },
            initialize: function (data) {
                this._data = data;
            },
            onAdd: function (map) {
                return this.updateModel(this._data);
            },
            updateModel: function (_data) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

                container.style.backgroundColor = 'white';
                container.style.width = '300px';
                container.style.height = '70px';
                container.innerHTML = "<div style='padding-left:5px;'> unmutatable genes are now at : " + _data.keep + "</div><br>" +
                    "<div style='padding-left:5px;'> best solution at " + _data.solution + "</div>" +
                    "<div style='padding-left:5px;'> current iteration at " + _data.distance + "</div>";

                container.onclick = function () {
                    console.log('buttonClicked');
                }
                return container;
            }
        });

        let map = this.mapService.getMap();
        this.ourCustomControl = new this.ourCustomControlConstructor({ keep: this.keep, solution: 0, distance: 0 });
        map.addControl(this.ourCustomControl);
    }

    sortNumber(a, b) {
        return a - b;
    }

    shufflestaff(t) {
        let newgen = [...this.allpclone];
        let seedclone = [...this.seed]

        newgen = this.evolve(seedclone, newgen);

        var distance = this.getdistance(newgen);

        if (this.generations.length < 10) {
            this.generations.push(newgen);
            this.generationsScore.push(distance);
            this.solutions += 1;
        } else {
            var maxItem = Math.max(...this.generationsScore);
            var minItem = Math.min(...this.generationsScore);

            if (maxItem > distance) {
                var maxIndex = this.generationsScore.indexOf(maxItem);
                var minIndex = this.generationsScore.indexOf(minItem);

                var marriage = this.marry([...this.generations[minIndex]], newgen);
                let marriagedistance = this.getdistance(marriage);


                if (distance < marriagedistance) {
                    this.generationsScore[maxIndex] = distance;
                    this.generations[maxIndex] = newgen;
                    this.solutions += 1;

                    if (this.solutions % Math.floor(this.population / 4) === 0) {
                        if (this.keep == this.population - 2) {
                        } else {
                            this.keep += 1;
                        }
                    }

                } else {
                    this.generationsScore[maxIndex] = marriagedistance;
                    this.generations[maxIndex] = marriage;
                    this.solutions += 1;
                    // if (this.solutions % Math.floor(this.population / 4) === 0) {
                    //     this.keep += 1;
                    // }
                }
                console.log("score", this.generationsScore);
            }
        }

        minItem = Math.min(...this.generationsScore);
        minIndex = this.generationsScore.indexOf(minItem);

        let map = this.mapService.getMap();
        map.removeControl(this.ourCustomControl);
        this.ourCustomControl = new this.ourCustomControlConstructor({
            keep: this.keep,
            solution: this.generationsScore[minIndex],
            distance: t
        });
        map.addControl(this.ourCustomControl);

        this.allp = this.generations[minIndex];

        this.allpclone = this.generations[this.genloop];
        if (this.genloop < this.generations.length - 1) {
            this.genloop += 1
        } else {
            this.genloop = 0;
        }

        if (this.keep == this.population) {
            this.subscription.unsubscribe();
        }
    }

    getnewColor() {
        return { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16) };
    }

    evolve(seedclone, newgen) {
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

        return newgen;
    }

    marry(genPoolA, genPoolB) {
        let seedclone = [...this.seed]
        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();

        var common: Array<number> = [];
        genPoolA.forEach((element, index) => {
            if (element[0] == genPoolB[index][0] && element[1] == genPoolB[index][1]) {
                common.push(index);
            }
        });

        seedsplice.forEach((element, index) => {
            if (common.length < this.population - 1) {
                if (common.indexOf(element) === -1) {
                    common.push(element)
                }
            }
        });

        if (common.length > 0) {

            var mm = this.findLargeSegments(genPoolA);
            var cmm = common.indexOf(mm);

            if (cmm !== -1) {
                common.splice(cmm, 1);

                cmm = common.indexOf(mm + 1);
                if (cmm !== -1) {
                    common.splice(cmm, 1);
                }
                console.log("got rid of largest segment");
            }

            common.sort(this.sortNumber).reverse();
            var seedgen = [];

            common.forEach((element, index) => {
                seedgen[index] = genPoolA[element];
            });

            common.forEach((element, index) => {
                genPoolA.splice(element, 1);
            });


            this.shuffle(genPoolA);

            common.forEach((element, index) => {
                genPoolA.splice(element, 0, seedgen[index]);
            });

            console.log("marriage keep", common.length);
            console.log(moment().format("h:mm:ss a"));

            return genPoolA;
        }
        return genPoolA;
    }

    findLargeSegments(a) {
        var distanceList = [];
        a.forEach((element, index) => {
            if (index < a.length - 1) {
                var dist = this.getdistancefromlatlon(element[0], element[1], a[index + 1][0], a[index + 1][1]);
                distanceList.push(dist);
            }
        });

        //var indeces = Array(distanceList.length).fill(0, 0).map((x, i) => i);
        var maxItem = Math.max(...distanceList);
        var maxIndex = distanceList.indexOf(maxItem);

        return maxIndex;
    }

    mergelatlon() {
        var allpoints: Array<Array<number>> = [];
        var distance = 0;
        let model = this;
        this.count.forEach((element, index) => {
            allpoints[index] = [model.lat[index], model.lon[index]];
        });
        return allpoints;
    }

    getdistance(gen) {
        var distance = 0;
        gen.forEach((element, index) => {
            if (index + 1 > gen.length - 1) {
            } else {
                let dis = this.getdistancefromlatlon(gen[index][0], gen[index][1], gen[index + 1][0], gen[index + 1][1]);
                distance += dis;
            }
        });

        return distance;
    }

    getdistancefromlatlon = function (lat1, lon1, lat2, lon2) {
        var R = 6378.137; // Radius of earth in KM
        var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d * 1000; // meters
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
