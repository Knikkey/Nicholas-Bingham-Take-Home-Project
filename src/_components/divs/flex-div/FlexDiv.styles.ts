import styled from "styled-components";

type Props = {
  $row?: boolean;
};

export const FlexDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  @media (max-width: 700px) {
    flex-direction: ${({ $row }) => ($row ? "row" : "column")};
    justify-content: center;
  }
`;
