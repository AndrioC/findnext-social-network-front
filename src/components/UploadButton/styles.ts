import styled from "styled-components";
import { Button } from "antd";

export const ButtonStyled = styled(Button)`
  background: var(--grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 123px;
  height: 40px;
  font-size: 15px;
  color: var(--grey-200);
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(95%);
  }

  svg {
    margin-right: 3px;
  }
`;
