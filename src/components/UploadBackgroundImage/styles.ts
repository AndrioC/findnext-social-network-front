import styled from "styled-components";

export const ButtonStyled = styled.img`
  background: var(--grey-100);
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  width: 420px;
  height: 300px;
  font-size: 15px;
  color: var(--grey-200);
  transition: filter 0.2s linear;
  cursor: pointer;

  &:hover {
    background: var(--grey-100);
    color: var(--grey-200);
    border: none;
    filter: brightness(95%);
  }

  svg {
    margin-right: 3px;
  }
`;

export const WrapperTest = styled.div`
  background: red;
  width: 500px;
  height: 500px;
`;
