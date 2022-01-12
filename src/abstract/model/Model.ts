import {EventEmitter} from 'events';
import {FontMap} from "../../font/FontMap";
import {Font} from "../font/Font";

export class Model {

    private eventHandler: EventEmitter;
    private fontMap: FontMap;

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

    public addEventListener(event: string, handler: Function, scope: any): void {
        this.eventHandler.addListener(event, () => {
            handler.call(scope);
        })
    }

    public dispatchEvent(event: string): void {
        this.eventHandler.emit(event);
    }

}