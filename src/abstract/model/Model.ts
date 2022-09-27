import {EventEmitter} from 'events';
import {FontMap} from "../../font/FontMap";
import {Font} from "../font/Font";

export class Model {

    private eventHandler: EventEmitter;
    private fontMap: FontMap;
    private gameSize: any = {width: 1920, height: 937};

    constructor() {
        this.createEventHandler();
        this.createFontMap();
    }

    protected createEventHandler(): void {
        this.eventHandler = new EventEmitter();
    }

    protected createFontMap(): void {
        this.fontMap = new FontMap();
    }

    public getFont(fontStyle: string): Font {
        return this.fontMap.getFont(fontStyle);
    }

    public getPlayerHeight(): number {
        return 80;
    }

    public isDebug(): boolean {
        return false;
    }

    public setGameSize(gameSize: any): void {
        this.gameSize = gameSize;
    }

    public getGameSize(): any {
        return this.gameSize;
    }

    public addEventListener(event: string, handler: Function, scope: any): void {
        this.eventHandler.addListener(event, (event, data) => {
            handler.call(scope, event, data);
        })
    }

    public dispatchEvent(event: string, data?: any): void {
        this.eventHandler.emit(event, event, data);
    }

}