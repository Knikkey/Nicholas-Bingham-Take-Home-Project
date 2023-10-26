"use client";
import styled from "styled-components";

type Props = {
  columns?: number;
};

export const Input = styled.input<Props>`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 7px;
  flex: ${(props) => (props.columns ? `${100 / props.columns}%` : `100%`)};

  &:focus {
    outline: 1px solid blue;
  }
`;
