import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--peach-100);
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 52px;
  font-size: 18px;
  transition: filter 0.2s linear;

  &:hover {
    background: var(--peach-100);
    filter: brightness(95%);
    color: var(--black);
    border: none;
  }
`;
