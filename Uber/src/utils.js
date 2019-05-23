import { platform, PixelRation } from "react-native";

export function getPixelSize(pixels) {
  return platform.select({
    ios: pixels,
    android: PixelRation.getPixelSizeForLayoutSize(pixels)
  });
}
