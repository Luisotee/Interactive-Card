import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
}

export const FrontCard = styled.div<IBackgroundProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  height: 245px;
  width: 447px;

  top: 0;
  left: 0;
`;
