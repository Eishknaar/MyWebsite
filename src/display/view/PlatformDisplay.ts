import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PlatformDisplayProperties} from "../properties/PlatformDisplayProperties";
import {Platform} from "./Platform";
export class PlatformDisplay extends AbstractGameView {

    protected properties: PlatformDisplayProperties;
    protected platforms: Platform[];

    public create(): void {
        this.createPlatforms();
    }

    public createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <PlatformDisplayProperties> properties;
    }

    protected createPlatforms(): void {
        this.platforms = [];
        for(let platformProperties of this.properties.platformPropertiesArray){
            let platform: Platform = this.factory.createPlatform(platformProperties);
            this.platforms.push(platform);
            this.addChild(platform);
        }
    }
}