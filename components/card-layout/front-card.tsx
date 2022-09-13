import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
}

export const FrontCard = styled.div<IBackgroundProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;
  display: flex;

  height: 245px;
  width: 447px;

  top: 0;
  left: 0;
  padding: 1.5rem;

  position: absolute;
  z-index: 2;

  color: white;
  font-weight: 500;
  font-size: 1.95rem;
  letter-spacing: 0.125rem;

  @media (max-width: 1023px) {
    width: 287px;
    height: 158px;
    padding: 1rem;
    top: 120px;
    margin-left: 10%;
  }
`;
