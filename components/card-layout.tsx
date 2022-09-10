import { Grid, Group, Image } from "@mantine/core";
import { BackCard } from "./layout/back-card";
import { BackgroundGradient } from "./layout/background-gradient";

import { CardPosition } from "./layout/cards-position";
import { FrontCard } from "./layout/front-card";

export function CardLayout() {
  return (
    <Group>
      <BackgroundGradient src="bg-main-desktop.png" />
      <CardPosition>
        <FrontCard src="bg-card-front.png">
          <Image src="card-logo.svg" alt="card logo" width={80}></Image>
        </FrontCard>
        <BackCard src="bg-card-back.png"></BackCard>
      </CardPosition>
    </Group>
  );
}
