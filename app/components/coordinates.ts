import { Component } from '@angular/core';
import { MapService } from 'angular2.leaflet.components/services/map.service';

var Lealflet = require('leaflet');
declare var L: any;

@Component({
    selector: 'coordinate-control',
    template: ``
})
export class CoordinateControl {

    ourCustomControlConstructor;
    ourCustomControl;
    lat = 0;
    lon = 0;
    constructor(private mapService: MapService) {
    }

    ngOnInit() {
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
                }
                return container;
            }
        });

        let map = this.mapService.getMap();
        map.on('click', function (e) {
            this.lat = e.latlng.lat;
            this.lon = e.latlng.lng;
        });
        this.ourCustomControl = new this.ourCustomControlConstructor({ x: this.lat, y: this.lon });
        map.addControl(this.ourCustomControl);
    }
}
