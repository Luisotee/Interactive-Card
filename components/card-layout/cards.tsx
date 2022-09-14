import { Group } from "@mantine/core";
import { CardViewProps } from "../../interface";
import { CardPosition } from "../../styles/css-components";
import { BackCard } from "./back-card";
import { BackgroundGradient } from "../page-wrapper/background-gradient";
import { FrontCard } from "./front-card";
import { InnerBackCard } from "./inner-back-card";
import { InnerFrontCard } from "./inner-front-card";

export function Cards({ cardValue }: CardViewProps) {
  return (
    <Group style={{ width: "100%", height: "100vh" }} position="center">
      <CardPosition>
        <FrontCard src="bg-card-front.png">
          <InnerFrontCard cardValue={cardValue} />
        </FrontCard>
        <BackCard src="bg-card-back.png">
          <InnerBackCard cardValue={cardValue}></InnerBackCard>
        </BackCard>
      </CardPosition>
    </Group>
  );
}
