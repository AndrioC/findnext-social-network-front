import styled from "styled-components";
import { Input } from "antd";

export const InputStyled = styled(Input)`
  border: 2px solid var(--grey-100);
  border-radius: 10px;
  width: 413px;
  height: 52px;
  padding: 15px;
  font-size: 18px;

  ::placeholder {
    color: var(--grey-200);
  }
`;
