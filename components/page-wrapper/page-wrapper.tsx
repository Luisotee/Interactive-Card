import { Container, Group } from "@mantine/core";
import { ReactNode } from "react";
import { BackgroundGradient } from "./background-gradient";
import { CenteredContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export const PageWrapper = ({ children }: Props) => (
  <Group style={{ width: "100%", height: "100vh" }}>
    <BackgroundGradient
      src="bg-main-desktop.png"
      mobileSrc="bg-main-mobile.png"
    >
      <CenteredContainer>{children}</CenteredContainer>
    </BackgroundGradient>
  </Group>
);
