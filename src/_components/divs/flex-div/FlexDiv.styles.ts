import styled from "styled-components";

type Props = {
  $forceRow?: boolean;
};

export const FlexDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 700px) {
    flex-direction: ${({ $forceRow }) =>
      $forceRow ? "row !important" : "column"};
    gap: 1rem;
    justify-content: center;
  }
`;
