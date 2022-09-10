import { Grid, Group } from "@mantine/core";
import { BackgroundGradient } from "./layout/background-gradient";

import { CardPosition } from "./layout/cards-position";
import { FrontCard } from "./layout/front-card";

export function CardLayout() {
  return (
    <Group>
      <BackgroundGradient src="bg-main-desktop.png" />
    </Group>
  );
}
