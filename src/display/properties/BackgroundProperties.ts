import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {SpriteProperties} from "../../abstract/display/properties/SpriteProperties";
import {GameStyle} from "../../style/GameStyle";

export class BackgroundProperties extends AbstractViewProperties {

    public spriteProperties: SpriteProperties;

    constructor(position?: PIXI.Point) {
        super(position);
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.spriteProperties = new SpriteProperties(GameStyle.BACKGROUND);
    }

}