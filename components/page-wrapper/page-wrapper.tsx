import { Container, Group } from "@mantine/core";
import { ReactNode } from "react";
import { BackgroundGradient } from "./background-gradient";
import { CenteredContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export const PageWrapper = ({ children }: Props) => (
  <BackgroundGradient src="bg-main-desktop.png" mobileSrc="bg-main-mobile.png">
    <CenteredContainer>{children}</CenteredContainer>
  </BackgroundGradient>
);
