export class BoundingBox {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;

    constructor(val?: Array<number>) {
        if (val) {
            this.minX = val[0];
            this.maxX = val[1];
            this.minY = val[2];
            this.maxY = val[3];
        }
    }

    getBBox(): Array<Array<number>> {
        return [
            [this.minX, this.maxY],
            [this.maxX, this.maxY],
            [this.maxX, this.minY],
            [this.minX, this.minY]
        ]
    }
}