import { Global } from "@mantine/core";
import bold from "./SpaceGrotesk/SpaceGrotesk-Medium.ttf";
import heavy from "./SpaceGrotesk/SpaceGrotesk-Bold.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Space Grotesk",
            src: `url('${bold}') format("ttf")`,
            fontWeight: 500,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Space Grotesk",
            src: `url('${heavy}') format("woff2")`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
