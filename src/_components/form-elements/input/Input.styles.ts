import styled from "styled-components";

type Props = {
  $columns?: number;
};

export const Input = styled.input<Props>`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 7px;
  background-color: white;
  background-color: #efefef;
  flex: ${({ $columns }) => ($columns ? `${100 / $columns}%` : `100%`)};
  margin: 0;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline: 1px solid blue;
  }

  &:invalid ~ span {
    display: block;
  }
`;

export const InputError = styled.span`
  color: #fe4600;
  font-size: 0.8rem;
  text-align: left;
  display: none;
`;
