import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spatial-index',
  templateUrl: './spatial-index.component.html',
  styleUrls: ['./spatial-index.component.css']
})
export class SpatialIndexComponent implements OnInit {
  population: number = 100;
  count: Array<number> = Array(this.population).fill(0, 0).map((x, i) => i);
  lat: Array<number> = this.randomArray(0, 10, this.population);
  lon: Array<number> = this.randomArray(0, 10, this.population);
  latlonColllection: Array<any> = [];
  polygonCollection: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.count.forEach(element => {
      this.latlonColllection.push({ lat: this.lat[element], lon: this.lon[element] });
    });

    this.polygonCollection.push([
      [Math.min(...this.lat), Math.max(...this.lon)],
      [Math.max(...this.lat), Math.max(...this.lon)],
      [Math.max(...this.lat), Math.min(...this.lon)],
      [Math.min(...this.lat), Math.min(...this.lon)]
    ])

    this.cutInNine(this.polygonCollection[0]);
    this.cutInNine(this.polygonCollection[1]);
    
    this.latlonColllection.forEach(element => {

    });
  }

  cutInNine(tetraedron) {
    var width = Math.sqrt(Math.pow(tetraedron[1][0] - tetraedron[0][0], 2)) / 3;
    var height = Math.sqrt(Math.pow(tetraedron[0][1] - tetraedron[2][1], 2)) / 3;

    console.log(width, height);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        this.polygonCollection.push([
          [Math.min(...this.lat) + (width * i), Math.min(...this.lon) + (height * j)],
          [Math.min(...this.lat) + (width * (i + 1)), Math.min(...this.lon) + (height * j)],
          [Math.min(...this.lat) + (width * (i + 1)), Math.min(...this.lon) + (height * (j + 1))],
          [Math.min(...this.lat) + (width * i), Math.min(...this.lon) + (height * (j + 1))]
        ])
      }
    }
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
    return val;
  }

}
