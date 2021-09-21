import {AbstractController} from "../abstract/controllers/AbstractController";
import {Factory} from "../abstract/factory/Factory";
import {EventStyle} from "../style/EventStyle";

export class GameController extends AbstractController {

    constructor(factory: Factory) {
        super(factory);
    }

    protected addEventListeners() {
        super.addEventListeners();
    }
}