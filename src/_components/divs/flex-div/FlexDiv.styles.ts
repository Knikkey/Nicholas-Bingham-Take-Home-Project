"use client";
import styled from "styled-components";

type Props = {
  $column?: boolean;
};

export const FlexDiv = styled.div<Props>`
  display: flex;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};
  gap: 0.5rem;

  &:focus {
    outline: 1px solid blue;
  }
`;
