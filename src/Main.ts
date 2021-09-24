import "pixi.js";
import pixiManager from "abstract/graphics/PixiManager";
import {Factory} from "./abstract/factory/Factory";
import {ImageLoader} from "./abstract/loader/ImageLoader";
import {gsap} from "gsap";
import {PixiPlugin} from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

class Main {

    protected factory: Factory;
    protected loader: ImageLoader;

    constructor() {
        this.createFactory();
        this.createLoader();
    }

    protected createFactory(): void {
        this.factory = new Factory();
    }

    protected createLoader(): void {
        this.loader = new ImageLoader(this.create, this);
    }

    protected create(): void {
        this.createBackground();
        this.createPlatformDisplay();
    }

    protected createBackground(): void {
        let background = this.factory.createBackground();
        this.addComponent(background);
    }

    protected createPlatformDisplay(): void {
        let platformDisplay = this.factory.createPlatformDisplay();
        this.addComponent(platformDisplay);
    }

    protected addComponent(component: PIXI.DisplayObject): void {
        pixiManager.stage.addChild(component);
    }
}

new Main();