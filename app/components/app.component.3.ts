import { Component } from '@angular/core';

var Lealflet = require('leaflet');
var Proj4Lealflet = require('proj4leaflet');
declare var L: any;

@Component({
  selector: 'my-sappproj',
  templateUrl: 'app/templates/app.component.3.html'
})
export class AppComponent3 {
  coordinateSystem: any = new L.Proj.CRS('EPSG:2100', "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +datum=GGRS87 +units=m +no_defs");
}
