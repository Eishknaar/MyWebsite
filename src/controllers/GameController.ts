import {AbstractController} from "../abstract/controllers/AbstractController";
import {Factory} from "../abstract/factory/Factory";
import {EventStyle} from "../style/EventStyle";

export class GameController extends AbstractController {

    constructor(factory: Factory) {
        super(factory);
    }

    protected addEventListeners(): void {
        super.addEventListeners();
        this.addEventListener(EventStyle.WINDOW_RESIZE, this.onWindowResize, this);
    }

    protected initialise(): void {

    }

    protected onWindowResize(event: string, eventData: any): void {

    }
}