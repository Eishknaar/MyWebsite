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
    private horizontalMovement: number = 0;

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
        this.addEventListener(EventStyle.KEY_UP, this.onKeyUp, this);
    }

    public update(): void {
        this.x += this.horizontalMovement;
    }

    protected createAnimatedSprite(): void {
        this.animatedSprite = new AnimatedSprite(this.properties.animProperties);
        this.addChild(this.animatedSprite);
        this.animatedSprite.play();
    }

    protected onKeyDown(event: string, eventData: any): void {
        this.setHorizontalMovement(event, eventData.keyCode);
        console.log(this.horizontalMovement);
        console.log(event);
        console.log(eventData);
        console.log(eventData.type);
    }
    protected onKeyUp(event: string, eventData): void {
        this.setHorizontalMovement(event, eventData.keyCode);
        console.log(this.horizontalMovement);
        console.log(eventData.type);
    }

    protected setHorizontalMovement(event: string, keyCode: number): void {
        switch(keyCode) {
            case KeyCode.A:
                this.horizontalMovement = event === EventStyle.KEY_DOWN ? -1 : 0;
                break;
            case KeyCode.D:
                this.horizontalMovement = event === EventStyle.KEY_DOWN ? 1 : 0;
                break;
            default:
                break;
        }
    }

}