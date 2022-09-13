import styled from "@emotion/styled";
import { Grid } from "@mantine/core";

export const IndexGrid = styled(Grid)`
  max-width: 100%;
  max-height: 100vh;
  @media (max-width: 1023px) {
    width: calc(345px + 2rem);
  }
`;
