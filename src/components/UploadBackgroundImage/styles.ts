import styled from "styled-components";
import { Button } from "antd";

export const ButtonStyled = styled(Button)`
  background: var(--grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  width: 379px;
  height: 225px;
  font-size: 15px;
  color: var(--grey-200);
  transition: filter 0.2s linear;

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
