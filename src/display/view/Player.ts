import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {Interactable} from "../../abstract/display/view/Interactable";
import {PlayerProperties} from "../properties/PlayerProperties";
import {AnimatedSprite} from "../../abstract/display/view/AnimatedSprite";
import {Platform} from "./Platform";
export class Player extends Interactable {

    public properties: PlayerProperties;
    public animatedSprite: AnimatedSprite

    protected create(): void {
        super.create();
        this.createAnimatedSprite();
    }

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <PlayerProperties> properties;
    }

    protected createAnimatedSprite(): void {
        this.animatedSprite = new AnimatedSprite(this.properties.animProperties);
        this.addChild(this.animatedSprite);
        this.animatedSprite.play();
    }

}