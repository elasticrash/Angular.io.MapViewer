"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var map_service_1 = require('angular2.leaflet.components/services/map.service');
var moment = require('moment');
var GeneratePoints = (function () {
    function GeneratePoints(mapService) {
        this.mapService = mapService;
        this.population = 699;
        this.count = Array(this.population).fill(0, 0).map(function (x, i) { return i; });
        this.lat = this.randomArray(52.611, 52.701, this.population);
        this.lon = this.randomArray(-1.109, -1.001, this.population);
        this.latlonColllection = [];
        this.allp = this.mergelatlon();
        this.allpclone = this.allp.slice();
        this.generations = [];
        this.generationsScore = [];
        this.seed = Array(this.population).fill(0, 0).map(function (x, i) { return i; });
        this.genloop = 0;
        this.keep = 1;
        this.timer = Rx_1.Observable.timer(2000, 50);
        this.options = {};
        this.solutions = 0;
        this.getdistancefromlatlon = function (lat1, lon1, lat2, lon2) {
            var R = 6378.137; // Radius of earth in KM
            var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
            var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d * 1000; // meters
        };
    }
    GeneratePoints.prototype.randomFromInterval = function (min, max) {
        var rand = Math.floor(Math.random() * (max * 1000 - min * 1000 + 1) + min * 1000);
        return rand / 1000;
    };
    GeneratePoints.prototype.randomArray = function (min, max, size) {
        var _this = this;
        var val = Array(size).fill(0, 0);
        val.forEach(function (element, index, arrayObject) {
            arrayObject[index] = _this.randomFromInterval(min, max);
        });
        console.log(val);
        return val;
    };
    GeneratePoints.prototype.ngOnInit = function () {
        var _this = this;
        this.count.forEach(function (element) {
            _this.latlonColllection.push({ lat: _this.lat[element], lon: _this.lon[element] });
        });
        this.subscription = this.timer.subscribe(function (t) {
            _this.shufflestaff(t);
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
                };
                return container;
            }
        });
        var map = this.mapService.getMap();
        this.ourCustomControl = new this.ourCustomControlConstructor({ keep: this.keep, solution: 0, distance: 0 });
        map.addControl(this.ourCustomControl);
    };
    GeneratePoints.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    GeneratePoints.prototype.shufflestaff = function (t) {
        var newgen = this.allpclone.slice();
        var seedclone = this.seed.slice();
        newgen = this.evolve(seedclone, newgen);
        var distance = this.getdistance(newgen);
        if (this.generations.length < 10) {
            this.generations.push(newgen);
            this.generationsScore.push(distance);
            this.solutions += 1;
        }
        else {
            var maxItem = Math.max.apply(Math, this.generationsScore);
            var minItem = Math.min.apply(Math, this.generationsScore);
            if (maxItem > distance) {
                var maxIndex = this.generationsScore.indexOf(maxItem);
                var minIndex = this.generationsScore.indexOf(minItem);
                var marriage = this.marry(this.generations[minIndex].slice(), newgen);
                var marriagedistance = this.getdistance(marriage);
                if (distance < marriagedistance) {
                    this.generationsScore[maxIndex] = distance;
                    this.generations[maxIndex] = newgen;
                    this.solutions += 1;
                    if (this.solutions % Math.floor(this.population / 4) === 0) {
                        if (this.keep == this.population - 2) {
                        }
                        else {
                            this.keep += 1;
                        }
                    }
                }
                else {
                    this.generationsScore[maxIndex] = marriagedistance;
                    this.generations[maxIndex] = marriage;
                    this.solutions += 1;
                }
                console.log("score", this.generationsScore);
            }
        }
        minItem = Math.min.apply(Math, this.generationsScore);
        minIndex = this.generationsScore.indexOf(minItem);
        var map = this.mapService.getMap();
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
            this.genloop += 1;
        }
        else {
            this.genloop = 0;
        }
        if (this.keep == this.population) {
            this.subscription.unsubscribe();
        }
    };
    GeneratePoints.prototype.getnewColor = function () {
        return { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16) };
    };
    GeneratePoints.prototype.evolve = function (seedclone, newgen) {
        this.shuffle(seedclone);
        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();
        var seedgen = [];
        seedsplice.forEach(function (element, index) {
            seedgen[index] = newgen[element];
        });
        seedsplice.forEach(function (element, index) {
            newgen.splice(element, 1);
        });
        this.shuffle(newgen);
        seedsplice.forEach(function (element, index) {
            newgen.splice(element, 0, seedgen[index]);
        });
        return newgen;
    };
    GeneratePoints.prototype.marry = function (genPoolA, genPoolB) {
        var _this = this;
        var seedclone = this.seed.slice();
        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();
        var common = [];
        genPoolA.forEach(function (element, index) {
            if (element[0] == genPoolB[index][0] && element[1] == genPoolB[index][1]) {
                common.push(index);
            }
        });
        seedsplice.forEach(function (element, index) {
            if (common.length < _this.population - 1) {
                if (common.indexOf(element) === -1) {
                    common.push(element);
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
            common.forEach(function (element, index) {
                seedgen[index] = genPoolA[element];
            });
            common.forEach(function (element, index) {
                genPoolA.splice(element, 1);
            });
            this.shuffle(genPoolA);
            common.forEach(function (element, index) {
                genPoolA.splice(element, 0, seedgen[index]);
            });
            console.log("marriage keep", common.length);
            console.log(moment().format("h:mm:ss a"));
            return genPoolA;
        }
        return genPoolA;
    };
    GeneratePoints.prototype.findLargeSegments = function (a) {
        var _this = this;
        var distanceList = [];
        a.forEach(function (element, index) {
            if (index < a.length - 1) {
                var dist = _this.getdistancefromlatlon(element[0], element[1], a[index + 1][0], a[index + 1][1]);
                distanceList.push(dist);
            }
        });
        //var indeces = Array(distanceList.length).fill(0, 0).map((x, i) => i);
        var maxItem = Math.max.apply(Math, distanceList);
        var maxIndex = distanceList.indexOf(maxItem);
        return maxIndex;
    };
    GeneratePoints.prototype.mergelatlon = function () {
        var allpoints = [];
        var distance = 0;
        var model = this;
        this.count.forEach(function (element, index) {
            allpoints[index] = [model.lat[index], model.lon[index]];
        });
        return allpoints;
    };
    GeneratePoints.prototype.getdistance = function (gen) {
        var _this = this;
        var distance = 0;
        gen.forEach(function (element, index) {
            if (index + 1 > gen.length - 1) {
            }
            else {
                var dis = _this.getdistancefromlatlon(gen[index][0], gen[index][1], gen[index + 1][0], gen[index + 1][1]);
                distance += dis;
            }
        });
        return distance;
    };
    GeneratePoints.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    GeneratePoints.prototype.distance = function (ax, ay, bx, by) {
        return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    };
    GeneratePoints.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GeneratePoints.prototype, "count", void 0);
    GeneratePoints = __decorate([
        core_1.Component({
            selector: 'generate-points',
            templateUrl: 'app/experiments/generate.points.html'
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService])
    ], GeneratePoints);
    return GeneratePoints;
}());
exports.GeneratePoints = GeneratePoints;
//# sourceMappingURL=generate.points.js.map