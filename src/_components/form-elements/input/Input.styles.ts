import styled from "styled-components";

type Props = {
  $columns?: number;
};

export const Input = styled.input<Props>`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 7px;
  flex: ${({ $columns }) => ($columns ? `${100 / $columns}%` : `100%`)};

  &:focus {
    outline: 1px solid blue;
  }

  &:invalid ~ span {
    display: block;
  }
`;

export const InputError = styled.span`
  color: red;
  font-size: 0.8rem;
  text-align: left;
  display: none;
`;
