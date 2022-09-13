import { Form } from "antd";
import React from "react";
import * as S from "./styles";

interface Props {
  placeholderText: string;
  name: string;
}

const InputRoundText: React.FC<Props> = ({ placeholderText, name }) => {
  return (
    <Form.Item name={name}>
      <S.InputStyled placeholder={placeholderText} />
    </Form.Item>
  );
};

export default InputRoundText;
