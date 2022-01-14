import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {AnimatedSpriteProperties} from "../../abstract/display/properties/AnimatedSpriteProperties";
import {GameStyle} from "../../style/GameStyle";

export class PlayerProperties extends AbstractViewProperties {

    public animProperties: AnimatedSpriteProperties;

    constructor(position?: PIXI.Point) {
        super(position);
        this.setDefaultValues();
    }

    public setDefaultValues(): void {
        this.animProperties = new AnimatedSpriteProperties(GameStyle.PLAYER, 9, true);
    }

}