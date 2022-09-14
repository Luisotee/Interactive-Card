import styled from "@emotion/styled";
import { Group, Stack } from "@mantine/core";

export const CardPosition = styled.div`
  position: relative;

  height: 530px;
  width: 540px;

  @media (max-width: 1023px) {
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const CardSmallLetters = styled.div`
  letter-spacing: 0.0625rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

export const CardTextPosition = styled.div`
  position: absolute;
  top: 190px;
  align-items: center;
`;

export const StackForm = styled(Stack)`
  @media (max-width: 1023px) {
  }
`;

export const CenteredGroup = styled(Group)`
  height: 100vh;
  width: 100%;
  @media (max-width: 1023px) {
  }
`;
