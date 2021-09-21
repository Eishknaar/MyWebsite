import {Model} from "../model/Model";
import {GameController} from "../../controllers/GameController";
import {Background} from "../../display/view/Background";
import {BackgroundProperties} from "../../display/properties/BackgroundProperties";

export class Factory {

    protected model: Model;

    protected gameController: GameController;

    constructor() {
        this.model = new Model();
        this.createControllers();
    }

    protected createControllers(): void {
        this.gameController = new GameController(this);
    }

    public createBackground(): Background {
        return new Background(this, new BackgroundProperties());
    }

    public getModel(): Model {
        return this.model;
    }

}