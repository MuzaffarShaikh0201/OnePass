import { PixelRatio } from "react-native";
import { width } from "./constants";

export function getSize(style: string | number): number {
    const styles: { [key: string]: number } = {
        title: 5,
        normal: 30,
        h1: 16,
        h2: 20,
        logo: 12,
    };
    const fontScale = PixelRatio.getFontScale();
    const size = typeof style === "string" ? styles[style] : style;
    const fontsize = width / size / fontScale;

    return fontsize;
}
