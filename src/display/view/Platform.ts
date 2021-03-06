import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {Interactable} from "../../abstract/display/view/Interactable";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PlatformProperties} from "../properties/PlatformProperties";
import {TileProperties} from "../properties/TileProperties";
import {Panel} from "../../abstract/display/view/Panel";
import {Tile} from "./Tile";
export class Platform extends Interactable {

    protected properties: PlatformProperties;
    protected panel: Panel;

    public create(): void {
        super.create();
        this.createPanel();
        this.createTiles();
    }

    public createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <PlatformProperties> properties;
    }

    protected createPanel(): void {
        this.panel = new Panel(this.properties.panelProperties);
        this.addChild(this.panel);
    }

    public createTiles(): void {
        let rowString = "";
        let columnString = "";
        for(let row = 0; row < this.properties.tilesDown; row++) {
            for(let column = 0; column < this.properties.tilesAcross; column++) {
                switch(row){
                    case 0:
                        rowString = "_top";
                        break;
                    case this.properties.tilesDown - 1:
                        rowString = "_bottom";
                        break;
                    default:
                        rowString = "_middle";
                        break;
                }

                switch(column){
                    case 0:
                        columnString = "_left";
                        break;
                    case this.properties.tilesAcross - 1:
                        columnString = "_right";
                        break;
                    default:
                        columnString = "";
                        break;
                }
                let tileType = "tile" + rowString + columnString;
                let tile: Tile = this.factory.createTile(new TileProperties(tileType));
                this.addChild(tile);
                this.panel.addToPanel(tile);
            }
        }
        this.panel.refresh();
    }

}