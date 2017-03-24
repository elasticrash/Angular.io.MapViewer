import { Component } from '@angular/core';
import * as L from 'leaflet';
import * as Proj4 from 'proj4';

@Component({
  selector: 'my-sappproj',
  templateUrl: 'app/templates/app.component.3.html'
})
export class AppComponent3 {
  systemDefinition: string = "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs";
  coordinateSystem: any = 'L.CRS.EPSG2100';
  system: any = {};

  ngOnInit() {
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
    }

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

        var dx = ll2[0] - ll1[0],
          dy = ll2[1] - ll1[1];

        return Math.sqrt(dx * dx + dy * dy);
      }
    });
  }
}

