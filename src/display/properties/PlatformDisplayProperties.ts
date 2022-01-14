import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PlatformProperties} from "./PlatformProperties";
export class PlatformDisplayProperties extends AbstractViewProperties {

    public platformPropertiesArray: PlatformProperties[];

    constructor(position?: PIXI.Point) {
        super(position);
        this.setDefaultValues();
    }

    public setDefaultValues(): void {
        this.platformPropertiesArray = [];
        this.addPlatform(5, 4, new PIXI.Point(80, 80));
    }

    protected addPlatform(tilesAcross: number, tilesDown: number, position: PIXI.Point): void {
        this.platformPropertiesArray.push(new PlatformProperties(tilesAcross, tilesDown, position));
    }

}