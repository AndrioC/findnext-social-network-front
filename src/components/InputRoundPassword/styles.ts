import styled from "styled-components";
import { Input } from "antd";

export const InputStyled = styled(Input.Password)`
  border: 2px solid var(--grey-100);
  border-radius: 10px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: var(--grey-200);

  input {
    ::placeholder {
      color: var(--grey-200);
    }
    font-size: 18px;
    width: 100%;
  }
`;
