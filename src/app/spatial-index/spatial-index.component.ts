import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SpatialIndex } from 'app/spatial-index/model/spatial-index';
import { BoundingBox } from 'app/spatial-index/model/boundingbox';
import { Point } from 'app/spatial-index/model/point';
import { GeneralizedLevels } from 'app/spatial-index/model/generalize';
import { LeafletElement } from 'ngx.leaflet.components';

@Component({
  selector: 'app-spatial-index',
  templateUrl: './spatial-index.component.html',
  styleUrls: ['./spatial-index.component.css']
})
export class SpatialIndexComponent implements OnInit, AfterViewInit {
  @ViewChildren(LeafletElement) mapInstances: QueryList<LeafletElement>;

  population: any = 200;
  count: Array<number> = Array(this.population).fill(0, 0).map((x, i) => i);
  lat: Array<number> = this.randomArray(0, 10, this.population);
  lon: Array<number> = this.randomArray(0, 10, this.population);
  latlonColllection: Array<any> = [];
  polygonCollection: Array<any> = [];
  gravityCollection: Array<Point> = [];
  generalizedLevels: GeneralizedLevels = new GeneralizedLevels();

  constructor() { }

  ngOnInit() {
    const points = [];
    this.count.forEach(element => {
      points.push(new Point(this.lat[element], this.lon[element]));
      this.latlonColllection.push({ lat: this.lat[element], lon: this.lon[element] });
    });

    const initialIndex = new SpatialIndex();
    initialIndex.bbox = new BoundingBox([
      Math.min(...this.lat),
      Math.max(...this.lat),
      Math.min(...this.lon),
      Math.max(...this.lon)
    ]);

    initialIndex.setDimensions();

    this.polygonCollection.push(initialIndex.bbox.getBBox());

    initialIndex.setCollection(3);
    initialIndex.setItems(points);
    initialIndex.depth = 0;

    this.createIndex(initialIndex);
    this.createObjectForRender(initialIndex);

    this.LevelGravity(initialIndex);
    this.createGravityPool(initialIndex);

    console.log(initialIndex);
    console.log(this.generalizedLevels);

  }

  ngAfterViewInit() {
    console.log(this.mapInstances);

    const first = this.mapInstances.first.mapElement.nativeElement.myMapProperty;
    const last = this.mapInstances.last.mapElement.nativeElement.myMapProperty;

    last.on('zoomend', (e) => {
      this.getLevelGravity(e.target.getZoom());
    })

    first.on('move', (e) => {
      if (first.getCenter().lat !== last.getCenter().lat) {
        last.panTo(e.target.getCenter());
      }
    })

    first.on('zoomend', (e) => {
      last.setZoom(e.target.getZoom());
    })
  }

  LevelGravity(sp: SpatialIndex) {
    let element = this.generalizedLevels;

    for (let index = 0; index < sp.depth; index++) {
      if (element.sublevel === undefined) {
        element.sublevel = new GeneralizedLevels();
      }
      element = element.sublevel;
    }
    if (sp.gravity) {
      element.points.push(sp.gravity);
    }
  }

  getLevelGravity(zoom) {
    let element = this.generalizedLevels;
    for (let index = 0; index < zoom; index++) {
      if (element.sublevel === undefined) {
        element = element;
      } else {
        element = element.sublevel;
      }
    }
    this.gravityCollection = element.points;
  }

  createGravityPool(sp: SpatialIndex) {
    sp.collection.forEach(element => {
      this.LevelGravity(element);
      this.createGravityPool(element);
    });
  }

  createIndex(sp: SpatialIndex) {
    sp.collection.forEach(element => {
      element.setDimensions();
      element.setItems(sp.items);
      element.depth = sp.depth + 1;

      this.LevelGravity(element);

      if (element.averageDistance > 0.1) {
        element.setCollection(3);
        this.createIndex(element);
      }
    });
  }

  createObjectForRender(sp: SpatialIndex) {
    sp.collection.forEach(element => {
      this.polygonCollection.push(element.bbox.getBBox());
      if (element.collection.length > 0) {
        this.createObjectForRender(element);
      }
    });
  }

  randomFromInterval(min, max) {
    const rand = Math.floor(Math.random() * (max * 1000 - min * 1000 + 1) + min * 1000);
    return rand / 1000;
  }

  randomArray(min, max, size) {
    const val: Array<number> = Array(size).fill(0, 0);
    val.forEach((element, index, arrayObject) => {
      arrayObject[index] = this.randomFromInterval(min, max);
    });
    return val;
  }

}
