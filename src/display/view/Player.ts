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
    private topSpeed: number = 10;
    private acceleration: number = 1;
    private friction: number = 0.98;
    private horizontalMovement: number = 0;
    private verticalMovement: number = 0;

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
        this.horizontalMovement *= this.friction;
        this.verticalMovement *= this.friction;
        this.x += this.horizontalMovement;
        this.y += this.verticalMovement;

        this.x = this.clamp(this.x, 0, this.model.getGameSize().width - this.getWidth());
        this.y = this.clamp(this.y, 0, this.model.getGameSize().height - this.getHeight());
    }

    protected createAnimatedSprite(): void {
        this.animatedSprite = new AnimatedSprite(this.properties.animProperties);
        this.addChild(this.animatedSprite);
        this.animatedSprite.play();
    }

    protected onKeyDown(event: string, eventData: any): void {
        this.setHorizontalMovement(event, eventData.keyCode);
        this.setVerticalMovement(event, eventData.keyCode);
    }

    protected onKeyUp(event: string, eventData): void {
        this.setHorizontalMovement(event, eventData.keyCode);
        this.setVerticalMovement(event, eventData.keyCode);
    }

    protected setHorizontalMovement(event: string, keyCode: number): void {
        let direction = 0;
        switch(keyCode) {
            case KeyCode.A:
                direction = event === EventStyle.KEY_DOWN ? -1 : 0;
                break;
            case KeyCode.D:
                direction = event === EventStyle.KEY_DOWN ? 1 : 0;
                break;
            default:
                break;
        }
        this.horizontalMovement += direction * this.acceleration;
        this.horizontalMovement = this.clamp(this.horizontalMovement, -this.topSpeed, this.topSpeed);
    }

    protected setVerticalMovement(event: string, keyCode: number): void {
        let direction = 0;
        switch(keyCode) {
            case KeyCode.W:
                direction = event === EventStyle.KEY_DOWN ? -1 : 0;
                break;
            case KeyCode.S:
                direction = event === EventStyle.KEY_DOWN ? 1 : 0;
                break;
            default:
                break;
        }
        this.verticalMovement += direction * this.acceleration;
        this.verticalMovement = this.clamp(this.verticalMovement, -this.topSpeed, this.topSpeed);
    }

    protected clamp(value: number, min: number, max: number): number {
        let val = Math.min(max, Math.max(min, value));
        return val;
    }

    public setAcceleration(value: number): void {
        this.acceleration = value;
    }

    public getAcceleration(): number {
        return this.acceleration;
    }

    public setFriction(value: number): void {
        this.friction = value;
    }

    public getFriction(): number {
        return this.friction;
    }

    public setTopSpeed(value: number): void {
        this.topSpeed = value;
    }

    public getTopSpeed(): number {
        return this.topSpeed;
    }

    public getWidth(): number {
        return this.animatedSprite.width;
    }

    public getHeight(): number {
        return this.animatedSprite.height;
    }

}