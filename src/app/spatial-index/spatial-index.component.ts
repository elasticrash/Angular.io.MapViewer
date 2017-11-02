import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SpatialIndex } from 'app/spatial-index/model/spatial-index';
import { BoundingBox } from 'app/spatial-index/model/boundingbox';
import { Point } from 'app/spatial-index/model/point';
import { LeafletElement } from '../../../../ngx.leaflet.component/map/map';
import { GeneralizedLevels } from 'app/spatial-index/model/generalize';

@Component({
  selector: 'app-spatial-index',
  templateUrl: './spatial-index.component.html',
  styleUrls: ['./spatial-index.component.css']
})
export class SpatialIndexComponent implements OnInit {
  @ViewChildren(LeafletElement) mapInstances: QueryList<LeafletElement>;

  population: number = 100;
  count: Array<number> = Array(this.population).fill(0, 0).map((x, i) => i);
  lat: Array<number> = this.randomArray(0, 10, this.population);
  lon: Array<number> = this.randomArray(0, 10, this.population);
  latlonColllection: Array<any> = [];
  polygonCollection: Array<any> = [];
  gravityCollection: Array<Point> = [];
  generalizedLevels: GeneralizedLevels = new GeneralizedLevels();

  constructor() { }

  ngOnInit() {
    var points = [];
    this.count.forEach(element => {
      points.push(new Point(this.lat[element], this.lon[element]));
      this.latlonColllection.push({ lat: this.lat[element], lon: this.lon[element] });
    });

    var initialIndex = new SpatialIndex();
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
    console.log(initialIndex);
    console.log(this.generalizedLevels);

    initialIndex.collection.forEach(element => {
      this.gravityCollection.push(element.gravity);
    });

  }

  LevelGravity(sp: SpatialIndex) {
    var element = this.generalizedLevels.sublevel;
    for (var index = 0; index <= sp.depth; index++) {
      element = element.sublevel;
    }
    element.points.push(sp.gravity);
  }

  ngAfterViewInit() {
    console.log(this.mapInstances);

    this.mapInstances.last.mapElement.nativeElement.myMapProperty.on('zoomend', (e) => {
      console.log(e.target.getZoom());
    })
    // this.mapInstances.changes.subscribe((r=>{
    //  console.log("change");
    // })); 
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
