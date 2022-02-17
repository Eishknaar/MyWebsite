
import "pixi.js";
import pixiManager from "abstract/graphics/PixiManager";
import {Factory} from "./abstract/factory/Factory";
import {ImageLoader} from "./abstract/loader/ImageLoader";
import {gsap} from "gsap";
import {PixiPlugin} from "gsap/PixiPlugin";

export * from "./abstract/factory/Factory";
export * from "./abstract/loader/ImageLoader";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);
/** Main is the starting class that adds everything to the screen */
export class Main {

    /** Used to create all PIXI.DisplayObjects */
    protected factory: Factory;
    /** Used to load all assets */
    protected loader: ImageLoader;

    /** Creates global variables */
    constructor() {
        this.createFactory();
        this.createLoader();
    }

    /** Creates a {@link Factory} */
    protected createFactory(): void {
        this.factory = new Factory();
    }

    /** Creates an {@link ImageLoader} */
    protected createLoader(): void {
        this.loader = new ImageLoader(this.create, this);
    }

    /**
     * Starts creating the PIXI.DisplayObjects.
     * This is called by the {@link ImageLoader} when the assets have loaded.
     */
    protected create(): void {
        this.createBackground();
        this.createPlayer();
        this.createPlatformDisplay();
    }

    /** Adds a {@link Background} to the screen */
    protected createBackground(): void {
        let background = this.factory.createBackground();
        this.addComponent(background);
    }

    /** Adds a {@link Player} to the screen */
    protected createPlayer(): void {
        let player = this.factory.createPlayer();
        this.addComponent(player);
    }

    /** Adds a {@link PlatformDisplay} to the screen */
    protected createPlatformDisplay(): void {
        let platformDisplay = this.factory.createPlatformDisplay();
        this.addComponent(platformDisplay);
    }

    /**
     * Adds a PIXI.DisplayObject to the screen
     * @param component The PIXI.DisplayObject to be added to the stage
     */
    protected addComponent(component: PIXI.DisplayObject): void {
        pixiManager.stage.addChild(component);
    }
}

new Main();