import { Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { CardViewProps } from "../../interface";
import {
  CardSmallLetters,
  CardTextPosition,
} from "../../styles/css-components";

export function InnerFrontCard({ cardValue }: CardViewProps) {
  return (
    <Stack>
      <Image src="card-logo.svg" alt="card logo" width={80} />
      <Text mt={38}>{cardValue.cardNumber}</Text>
      <CardTextPosition>
        <CardSmallLetters>
          <SimpleGrid cols={2} spacing={300} mb="lg">
            <Text style={{ whiteSpace: "nowrap" }}>
              {cardValue.cardName.toUpperCase()}
            </Text>
            <Group spacing={0}>
              <Text>{cardValue.cardMonth}</Text>
              {cardValue.cardMonth != "" ? <Text>/</Text> : <></>}
              <Text>{cardValue.cardYear}</Text>
            </Group>
          </SimpleGrid>
        </CardSmallLetters>
      </CardTextPosition>
    </Stack>
  );
}
