import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {TileProperties} from "../properties/TileProperties";
import {Sprite} from "../../abstract/display/view/Sprite";

export class Tile extends AbstractGameView {

    protected properties: TileProperties;
    protected sprite: Sprite;
    protected playerPosRectangle: PIXI.Rectangle


    public createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <TileProperties> properties;
    }

    public create(): void {
        super.create();
        this.createSprite();
        this.setPlayerPosRectangle();
    }

    protected createSprite(): void {
        this.sprite = new Sprite(this.properties.spriteProperties);
        this.addChild(this.sprite);
    }

    protected setPlayerPosRectangle(): void {
        let height: number = 1;
        let width: number = this.getBounds().width;
        let posX: number = this.x;
        let posY: number = this.y + this.model.getPlayerHeight();
        this.playerPosRectangle = new PIXI.Rectangle(posX, posY, width, height);
    }

    public getPlayerPosRectangle(): PIXI.Rectangle {
        return this.playerPosRectangle;
    }

}