import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {Interactable} from "../../abstract/display/view/Interactable";
import {KeyCode} from "../../abstract/constants/KeyCode";
import {PlayerProperties} from "../properties/PlayerProperties";
import {AnimatedSprite} from "../../abstract/display/view/AnimatedSprite";
import {Platform} from "./Platform";
import {EventStyle} from "../../style/EventStyle";
export class Player extends Interactable {

    public properties: PlayerProperties;
    public animatedSprite: AnimatedSprite;
    private horizontalMovement: number;

    protected create(): void {
        super.create();
        this.createAnimatedSprite();
    }

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <PlayerProperties> properties;
    }

    protected addEventListeners(): void {
        super.addEventListeners();
        this.addEventListener(EventStyle.KEY_DOWN, this.onKeyDown, this);
    }

    protected createAnimatedSprite(): void {
        this.animatedSprite = new AnimatedSprite(this.properties.animProperties);
        this.addChild(this.animatedSprite);
        this.animatedSprite.play();
    }

    protected onKeyDown(event): void {
        switch(event.keyCode)
        {
            case KeyCode.A:
                this.horizontalMovement = 1;
                break;
            case KeyCode.D:
                this.horizontalMovement = -1;
                break;
        }
    }

}