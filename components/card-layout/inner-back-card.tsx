import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CardViewProps } from "../../interface";
import { CardSmallLetters, CVCText } from "../../styles/css-components";

export function InnerBackCard({ cardValue }: CardViewProps) {
  const isMobile = useMediaQuery("(min-width: 1080px)");
  return (
    <CardSmallLetters>
      {isMobile ? (
        <Text className="CVCText">{cardValue.cardCVC}</Text>
      ) : (
        <Text align="right" className="CVCTextMobile">
          {cardValue.cardCVC}
        </Text>
      )}
    </CardSmallLetters>
  );
}
