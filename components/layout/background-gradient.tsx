import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
}

export const BackgroundGradient = styled.div<IBackgroundProps>`
  width: 32vw;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;
