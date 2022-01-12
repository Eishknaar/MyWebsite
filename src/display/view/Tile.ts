import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {TileProperties} from "../properties/TileProperties";
import {Sprite} from "../../abstract/display/view/Sprite";

export class Tile extends AbstractGameView {

    protected properties: TileProperties;
    protected sprite: Sprite;

    public createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <TileProperties> properties;
    }

    public create(): void {
        super.create();
        this.createSprite();
    }

    protected createSprite(): void {
        this.sprite = new Sprite(this.properties.spriteProperties);
        this.addChild(this.sprite);
    }

}