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
var map_service_1 = require('angular2.leaflet.components/services/map.service');
var Lealflet = require('leaflet');
var CoordinateControl = (function () {
    function CoordinateControl(mapService) {
        this.mapService = mapService;
        this.crs = {};
    }
    CoordinateControl.prototype.ngOnInit = function () {
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
                container.innerHTML = "<div style='padding-left:5px;'> x " + _data.x + "</div>" +
                    "<div style='padding-left:5px;'> y " + _data.y + "</div>";
                container.onclick = function () {
                    console.log('buttonClicked');
                };
                return container;
            }
        });
        var map = this.mapService.getMap();
        map.on('mousemove', function (e) {
            map.removeControl(model.ourCustomControl);
            var proj = model.crs.forward([e.latlng.lng, e.latlng.lat]);
            model.ourCustomControl = new model.ourCustomControlConstructor({
                x: proj[0],
                y: proj[1]
            });
            map.addControl(model.ourCustomControl);
        });
        this.ourCustomControl = new this.ourCustomControlConstructor({ x: 0, y: 0 });
        map.addControl(this.ourCustomControl);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoordinateControl.prototype, "crs", void 0);
    CoordinateControl = __decorate([
        core_1.Component({
            selector: 'coordinate-control',
            template: ""
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService])
    ], CoordinateControl);
    return CoordinateControl;
}());
exports.CoordinateControl = CoordinateControl;
//# sourceMappingURL=coordinates.js.map