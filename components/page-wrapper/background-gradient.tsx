import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
  mobileSrc: string;
}

export const BackgroundGradient = styled.div<IBackgroundProps>`
  width: 33%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1080px) {
    background-image: url(${(props) => props.mobileSrc});
    width: 100%;
    height: 240px;
  }
`;
