import styled from "@emotion/styled";
import { Group, SimpleGrid, Stack, Text } from "@mantine/core";

export const StackForm = styled(Stack)`
  @media (max-width: 1023px) {
  }
`;

export const FullSizeGroup = styled(Group)`
  height: 100vh;
  width: 100%;
  @media (max-width: 1023px) {
    width: auto;
    margin: 0 auto;
    height: 287px;
  }
`;

export const FullSizeGroupForm = styled(Group)`
  height: 100vh;
  width: 100%;
  @media (max-width: 1023px) {
    width: auto;
    margin: 0 auto;
    height: 352px;
  }
`;
export const CardPosition = styled.div`
  position: relative;

  height: 530px;
  width: 540px;

  @media (max-width: 1023px) {
    position: absolute;
    height: 248px;
    left: 0;
    right: 0;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    width: 345px;
  }
`;

export const CardSmallLetters = styled.div`
  letter-spacing: 0.0625rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  width: 100%;
`;

export const CardTextPosition = styled.div`
  position: absolute;
  width: 90%;
  top: 190px;
  align-items: center;
  @media (max-width: 1023px) {
    top: 120px;
  }
`;

export const CVCText = styled(Text)`
  position: absolute;
  right: 3.5rem;
  top: 6.7rem;

  @media (max-width: 1023px) {
    right: 2rem;
    top: 4.2rem;
  }
`;
