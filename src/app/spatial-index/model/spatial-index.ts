import { BoundingBox } from "app/spatial-index/model/boundingbox";
import { Point } from "app/spatial-index/model/point";

export class SpatialIndex {
    bbox: BoundingBox;
    width: number;
    height: number;
    count: number;
    collection: Array<SpatialIndex>;
    gravity: Point;
    items: Array<Point>;

    constructor() {
        this.collection = [];
        this.items = [];
    }

    setDimensions() {
        this.width = Math.sqrt(Math.pow(this.bbox.getBBox()[1][0] - this.bbox.getBBox()[0][0], 2));
        this.height = Math.sqrt(Math.pow(this.bbox.getBBox()[0][1] - this.bbox.getBBox()[2][1], 2));
    }

    setCollection(divider): void {
        var w = this.width / divider;
        var h = this.height / divider;

        for (var i = 0; i < divider; i++) {
            for (var j = 0; j < divider; j++) {
                var sp = new SpatialIndex();
                sp.bbox = new BoundingBox([
                    this.bbox.minX + (w * i),
                    this.bbox.minX + (w * (i + 1)),
                    this.bbox.minY + (h * j),
                    this.bbox.minY + (h * (j + 1)),
                ]);
                this.collection.push(sp);
            }
        }
    }

    setItems(points: Array<Point>) {
        points.forEach(element => {
            if (element.x > this.bbox.minX && element.x < this.bbox.maxX) {
                if (element.y > this.bbox.minY && element.y < this.bbox.maxY) {
                    this.items.push(element);
                }
            }
        });
    }
}