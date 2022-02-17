import {Model} from "../model/Model";
import {GameController} from "../../controllers/GameController";
import {Background} from "../../display/view/Background";
import {BackgroundProperties} from "../../display/properties/BackgroundProperties";
import {PlatformDisplay} from "../../display/view/PlatformDisplay";
import {PlatformDisplayProperties} from "../../display/properties/PlatformDisplayProperties";
import {Platform} from "../../display/view/Platform";
import {PlatformProperties} from "../../display/properties/PlatformProperties";
import {Tile} from "../../display/view/Tile";
import {TileProperties} from "../../display/properties/TileProperties";
import {Player} from "../../display/view/Player";
import {PlayerProperties} from "../../display/properties/PlayerProperties";

export * from "../model/Model";
export * from "../../controllers/GameController";
export * from "../../display/view/Background";
export * from "../../display/properties/BackgroundProperties";
export * from "../../display/view/PlatformDisplay";
export * from "../../display/properties/PlatformDisplayProperties";
export * from "../../display/view/Platform";
export * from "../../display/properties/PlatformProperties";
export * from "../../display/view/Tile";
export * from "../../display/properties/TileProperties";
export * from "../../display/view/Player";
export * from "../../display/properties/PlayerProperties";

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

    public createPlatformDisplay(): PlatformDisplay {
        return new PlatformDisplay(this, new PlatformDisplayProperties());
    }

    public createPlatform(properties: PlatformProperties): Platform {
        return new Platform(this, properties);
    }

    public createTile(properties: TileProperties): Tile {
        return new Tile(this, properties);
    }

    public createPlayer(): Player {
        return new Player(this, new PlayerProperties());
    }

    public getModel(): Model {
        return this.model;
    }

}