import { Point } from 'app/spatial-index/model/point';

export class GeneralizedLevels {
    public points: Array<Point>;
    public depth: number;
    public sublevel: GeneralizedLevels;

    constructor(depth?) {
        this.depth = depth;
        this.points = [];
    }
}
