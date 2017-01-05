import { Component } from '@angular/core';

var Lealflet = require('leaflet');
var Proj4 = require('proj4');
declare var L: any;

@Component({
  selector: 'my-sappproj',
  templateUrl: 'app/templates/app.component.3.html'
})
export class AppComponent3 {


  systemDefinition: string = "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs";
  coordinateSystem: any = 'L.CRS.EPSG2100';

  constructor() {
  }

  ngOnInit() {

    var system = Proj4(this.systemDefinition);
    console.log(system);

    var upleft = [90000, 3602087];
    var botright = [1090000, 5508488];

    //   var upleft = [18.2700, 41.7700];
    // var botright = [29.9700, 33.2300];

    var extentWidth = botright[0] - upleft[0];
    var extentHeight = upleft[1] - botright[1];

    var boundsa = system.inverse(upleft);
    var boundsb = system.inverse(botright);

    var boundpointa = new L.Point(upleft[0], upleft[1]);
    var boundpointb = new L.Point(botright[0], botright[1]);
    var b = new L.bounds(boundpointa, boundpointb);

    var resX = extentWidth / 256;
    var resY = extentHeight / 256;
    var res = Math.max(resX, resY);
    var adjustedExtentWidth = 256 * 256 * res;
    var adjustedExtentHeight = 256 * 256 * res;

    L.Projection[system.oProj.projName] = {
      R: system.a,
      R_MINOR: system.b,

      bounds: b,
      project: function (latlng) {
        var point = system.forward([latlng.lng, latlng.lat]);
        return new L.Point(point[0], point[1]);
      },
      unproject: function (point) {
        var point2 = system.inverse([point.x, point.y]);
        return new L.LatLng(point2[1], point2[0]);
      }
    }

    L.CRS.EPSG2100 = L.extend({}, L.CRS.Earth, {
      code: 'EPSG:2100',
      projection: L.Projection[system.oProj.projName],
      transformation: new L.Transformation(1, 0, 1, 0),
      //transformation: new L.Transformation(system.oProj.k0, -system.oProj.lat0, -system.oProj.k0, system.oProj.long0),
      scale: function (zoom) {
        var s = 3117.411496270278;
        console.log("scale", 1 / (s / Math.pow(2, zoom)), "zoom", zoom);
        return 1 / (s / Math.pow(2, zoom));
      }
    });
  }
}

