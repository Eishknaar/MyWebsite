import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PanelProperties} from "../../abstract/display/properties/PanelProperties";
import {TileProperties} from "./TileProperties";
export class PlatformProperties extends AbstractViewProperties {

    public tilesAcross: number;
    public tilesDown: number;
    public panelProperties: PanelProperties;

    constructor(tilesAcross: number, tilesDown: number, position?: PIXI.Point){
        super(position);
        this.tilesAcross = tilesAcross;
        this.tilesDown = tilesDown;
        this.setDefaultValues();
    }

    public setDefaultValues(): void {
        this.panelProperties = new PanelProperties(this.tilesAcross, this.tilesDown, 0, 0);

    }

}