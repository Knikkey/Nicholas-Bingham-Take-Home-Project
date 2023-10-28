import styled from "styled-components";

export const SubmitButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: #c9ff00;
  font-weight: bold;
  align-self: center;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 1px 1px #00000047;
  transition: all 0.3s;
  will-change: contents;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 7px #00000047;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
    transition: all 0.1s;
  }
`;
