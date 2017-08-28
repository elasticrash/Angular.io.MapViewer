import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'extended-map',
  templateUrl: 'extended-map.component.html',
  styleUrls: ['extended-map.component.css'],        
})
export class ExtendedMapComponent {
  g: any = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              -2.197265625,
              53.12040528310657
            ],
            [
              -2.164306640625,
              52.5897007687178
            ],
            [
              -1.175537109375,
              52.62306005822959
            ],
            [
              -1.318359375,
              52.14697334064471
            ],
            [
              -0.45043945312499994,
              52.09300763963822
            ],
            [
              -0.50537109375,
              51.86292391360244
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.3623046875,
                51.781435604431195
              ],
              [
                -1.3623046875,
                51.896833883012484
              ],
              [
                -1.131591796875,
                51.896833883012484
              ],
              [
                -1.131591796875,
                51.781435604431195
              ],
              [
                -1.3623046875,
                51.781435604431195
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -0.59326171875,
            52.44261787120725
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -1.9116210937499998,
            52.335339071889386
          ]
        }
      }
    ]
  };

  ngOnInit() {
    let DefaultIcon = L.icon({
      iconUrl: '/assets/marker-icon.png',
      shadowUrl: '/assets/marker-shadow.png'
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }

}
