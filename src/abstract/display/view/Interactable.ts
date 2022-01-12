import {AbstractGameView} from "./AbstractGameView";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {Factory} from "../../factory/Factory";
export class Interactable extends AbstractGameView {

    protected __collider: PIXI.Rectangle;

    constructor(factory: Factory, properties: AbstractViewProperties) {
        super(factory, properties);
        this.setCollider();
    }

    protected setCollider(): void {
        this.__collider = new PIXI.Rectangle(0, 0, this.getBounds().width, this.getBounds().height);

        if(this.coreProperties.debug){
            const rect = new PIXI.Graphics();
            rect.beginFill(0xFF0000);
            rect.drawRect(this.__collider.x, this.__collider.y, this.__collider.width, this.__collider.height);
            rect.endFill();
            this.addChild(rect);
        }
    }

    public getCollider(): PIXI.Rectangle {
        return this.__collider;
    }

}