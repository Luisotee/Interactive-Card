import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
  mobileSrc: string;
}

export const BackgroundGradient = styled.div<IBackgroundProps>`
  width: 32vw;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  @media (max-width: 1023px) {
    position: absolute;
    background-image: url(${(props) => props.mobileSrc});
    width: 100%;
    height: 450px;
  }
`;
