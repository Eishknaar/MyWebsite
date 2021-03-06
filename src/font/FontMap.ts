import {FontStyle} from "../style/FontStyle";
import {FontColours} from "./FontColours";
import {FontStrokes} from "./FontStrokes";
import {FontDropShadows} from "./FontDropShadows";
import {AbstractFontMap} from "../abstract/font/AbstractFontMap";

export class FontMap extends AbstractFontMap {

    public static TAHOMA: string = "Tahoma";

    protected createFontMaps(): void {
        this.addStyle(FontStyle.EXAMPLE, FontMap.TAHOMA, 25, FontColours.RED).addStroke(FontStrokes.YELLOW_2).addDropShadow(FontDropShadows.BLUE_5_90);
    }


}