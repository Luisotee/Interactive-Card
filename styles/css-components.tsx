import styled from "@emotion/styled";
import { Group, Stack } from "@mantine/core";

export const CardPosition = styled.div`
  position: relative;
  margin-left: 50%;
  margin-top: 50%;
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
  margin-top: 18vh;
  width: 100%;
  @media (max-width: 1023px) {
  }
`;

export const IndexGroup = styled(Group)`
  margin-top: 30vh;
  margin-left: 10vw;
  @media (max-width: 1023px) {
    margin-top: 0vh;
    margin-left: 0px;
    margin-top: 300px;
    width: 345px;
  }
`;
