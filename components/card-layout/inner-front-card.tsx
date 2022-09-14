import { Grid, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { CardViewProps } from "../../interface";
import {
  CardSmallLetters,
  CardTextPosition,
} from "../../styles/css-components";

export function InnerFrontCard({ cardValue }: CardViewProps) {
  return (
    <Stack style={{ width: "100%" }}>
      <Image
        src="card-logo.svg"
        alt="card logo"
        width={80}
        style={{ marginBottom: "10px" }}
      />
      <Text>{cardValue.cardNumber}</Text>
      <CardTextPosition>
        <CardSmallLetters>
          <Grid>
            <Grid.Col span={9}>
              <Text
                style={{
                  whiteSpace: "nowrap",
                  overflowX: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cardValue.cardName.toUpperCase()}
              </Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <Group spacing={0} position="right">
                <Text>{cardValue.cardMonth}</Text>
                {cardValue.cardMonth != "" ? <Text>/</Text> : <></>}
                <Text>{cardValue.cardYear}</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </CardSmallLetters>
      </CardTextPosition>
    </Stack>
  );
}
