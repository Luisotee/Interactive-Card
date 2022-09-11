import { Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { BackCard } from "./back-card";
import { BackgroundGradient } from "./layout/background-gradient";

import { FrontCard } from "./front-card";
import {
  CardPosition,
  CardSmallLetters,
  CardTextPosition,
} from "../styles/css-components";
import { CardViewProps } from "../interface";

export function CardLayout({ cardValue }: CardViewProps) {
  return (
    <Group>
      <BackgroundGradient src="bg-main-desktop.png" />
      <CardPosition>
        <FrontCard src="bg-card-front.png">
          <Stack>
            <Image src="card-logo.svg" alt="card logo" width={80} />
            <Text mt={38}>{cardValue.cardNumber}</Text>
            <CardTextPosition>
              <CardSmallLetters>
                <SimpleGrid cols={2} spacing={300} mb="lg">
                  <Text style={{ whiteSpace: "nowrap" }}>
                    {cardValue.cardName.toUpperCase()}
                  </Text>
                  <Text>{cardValue.cardDate}</Text>
                </SimpleGrid>
              </CardSmallLetters>
            </CardTextPosition>
          </Stack>
        </FrontCard>
        <BackCard src="bg-card-back.png"></BackCard>
      </CardPosition>
    </Group>
  );
}
