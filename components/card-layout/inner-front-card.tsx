import { Image, SimpleGrid, Stack, Text } from "@mantine/core";
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
            <Text>{cardValue.cardDate}</Text>
          </SimpleGrid>
        </CardSmallLetters>
      </CardTextPosition>
    </Stack>
  );
}
