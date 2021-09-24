import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties"
import {SpriteProperties} from "../../abstract/display/properties/SpriteProperties"
export class TileProperties extends AbstractViewProperties {

    private tileType: string;
    public spriteProperties: SpriteProperties;

    constructor(tileType: string, position?: PIXI.Point){
        super(position);
        this.tileType = tileType;
        this.setDefaultValues();
    }

    public setDefaultValues(): void {
        this.spriteProperties = new SpriteProperties(this.tileType);
    }

}