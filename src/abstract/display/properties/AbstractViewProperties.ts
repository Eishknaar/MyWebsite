export class AbstractViewProperties {

    public position: PIXI.Point;

    public debug: boolean;

    constructor(position?: PIXI.Point) {
        this.position = position ? position : new PIXI.Point(0, 0);
        this.debug = false;
    }

    public setDebug(value: boolean): void {
        this.debug = value;
    }

}