import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
}

export const BackCard = styled.div<IBackgroundProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;

  height: 245px;
  width: 447px;

  position: relative;
  z-index: 1;

  top: 283px;
  left: 93px;
`;
