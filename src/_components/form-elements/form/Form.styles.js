import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: white;
  width: 40%;
  border: 1px solid #c7c7c7;
  border-radius: 20px;
  box-shadow: 5px 2px 10px #333;

  @media (max-width: 1100px) {
    width: 65%;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 0 1rem;
  }
`;
