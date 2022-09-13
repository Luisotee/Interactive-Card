import styled from "@emotion/styled";
import { Group } from "@mantine/core";

export const CardPosition = styled.div`
  position: absolute;
  bottom: 50vh;
  right: 60vw;
  height: 245px;
  width: 447px;
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
export const CenteredContainer = styled.div`
  position: absolute;
  offset: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid green;
`;

export const FormGroup = styled(Group)`
  @media (max-width: 1023px) {
    margin-left: 0px;
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
