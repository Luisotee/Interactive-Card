import { Text } from "@mantine/core";
import { CardViewProps } from "../../interface";
import { CardSmallLetters, CVCText } from "../../styles/css-components";

export function InnerBackCard({ cardValue }: CardViewProps) {
  return (
    <CardSmallLetters>
      <Text className="CVCText">{cardValue.cardCVC}</Text>
    </CardSmallLetters>
  );
}
