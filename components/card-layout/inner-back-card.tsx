import { Text } from "@mantine/core";
import { CardViewProps } from "../../interface";
import { CardSmallLetters } from "../../styles/css-components";

export function InnerBackCard({ cardValue }: CardViewProps) {
  return (
    <CardSmallLetters>
      <Text style={{ position: "absolute", right: "3.5rem", top: "6.7rem" }}>
        {cardValue.cardCVC}
      </Text>
    </CardSmallLetters>
  );
}
