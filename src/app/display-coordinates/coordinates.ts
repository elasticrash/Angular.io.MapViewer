import { Component, Input } from '@angular/core';
import { MapService } from 'ngx.leaflet.components/services/map.service';
import * as L from 'leaflet';

@Component({
    selector: 'coordinate-control',
    template: ``
})
export class CoordinateControl {

    @Input() crs: any = {};

    ourCustomControlConstructor;
    ourCustomControl;
    constructor(private mapService: MapService) {
    }

    ngOnInit() {
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
                }
                return container;
            }
        });

        let map = this.mapService.getMap();
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
    }
}
