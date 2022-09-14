import styled from "styled-components";

interface InputStyledProps {
  height: number;
}

export const InputStyled = styled.input<InputStyledProps>`
  border: 2px solid var(--grey-100);
  border-radius: 10px;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 15px;
  font-size: 18px;

  ::placeholder {
    color: var(--grey-200);
  }
`;
