import styled from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  input {
    border: ${(props) => (props.isFocused ? "1px solid var(--blue-50)" : "")};
    border-radius: 45px;
    background: var(--grey-120);
    width: 100%;
    height: 50px;
    padding: 0 0 0 54px;
    font-size: 18px;

    ::placeholder {
      color: var(--grey-200);
    }
  }
  svg {
    position: absolute;
    color: var(--grey-200);
    left: 6%;
    top: 27%;
  }
`;

export const InputStyled = styled.input``;
