"use client";
import styled from "styled-components";

type Props = {
  $column?: boolean;
};

export const FlexDiv = styled.div<Props>`
  display: flex;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};
  align-items: center;
  gap: 0.5rem;
`;
