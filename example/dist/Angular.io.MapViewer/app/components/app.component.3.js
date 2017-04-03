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
var L = require('leaflet');
var Proj4 = require('proj4');
var AppComponent3 = (function () {
    function AppComponent3() {
        this.systemDefinition = "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs";
        this.coordinateSystem = 'L.CRS.EPSG2100';
        this.system = {};
    }
    AppComponent3.prototype.ngOnInit = function () {
        this.system = Proj4(this.systemDefinition);
        var model = this;
        var upleft = [-34387.6695, 4641211.3222];
        var botright = [1056496.8434, 3691163.5140];
        var extentWidth = botright[0] - upleft[0];
        var extentHeight = upleft[1] - botright[1];
        var boundpointa = new L.Point(upleft[0], upleft[1]);
        var boundpointb = new L.Point(botright[0], botright[1]);
        var b = L.bounds(boundpointa, boundpointb);
        var resX = extentWidth / 256;
        var resY = extentHeight / 256;
        var res = Math.max(resX, resY);
        L.Projection[this.system.oProj.projName] = {
            R: this.system.a,
            R_MINOR: this.system.b,
            bounds: b,
            project: function (latlng) {
                var point = model.system.forward([latlng.lng, latlng.lat]);
                return new L.Point(point[0], point[1]);
            },
            unproject: function (point) {
                var point2 = model.system.inverse([point.x, point.y]);
                return new L.LatLng(point2[1], point2[0]);
            }
        };
        L.CRS.EPSG2100 = L.extend({}, L.CRS, {
            code: 'EPSG:2100',
            projection: L.Projection[model.system.oProj.projName],
            transformation: new L.Transformation(model.system.oProj.k0, -model.system.oProj.lat0, -model.system.oProj.k0, model.system.oProj.long0),
            scale: function (zoom) {
                return 1 / (res / Math.pow(2, zoom));
            },
            distance: function (latlng1, latlng2) {
                var ll1 = model.system.forward([latlng1.lng, latlng1.lat]);
                var ll2 = model.system.forward([latlng2.lng, latlng2.lat]);
                var dx = ll2[0] - ll1[0], dy = ll2[1] - ll1[1];
                return Math.sqrt(dx * dx + dy * dy);
            }
        });
    };
    AppComponent3 = __decorate([
        core_1.Component({
            selector: 'my-sappproj',
            templateUrl: 'app/templates/app.component.3.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent3);
    return AppComponent3;
}());
exports.AppComponent3 = AppComponent3;
//# sourceMappingURL=app.component.3.js.map