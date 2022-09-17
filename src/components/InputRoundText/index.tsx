import { Form } from "antd";
import React from "react";
import * as S from "./styles";

interface Props {
  placeholderText: string;
  name: string;
  height?: number;
}

const InputRoundText: React.FC<Props> = ({ placeholderText, name, height }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        { required: true, message: `${name.toLocaleLowerCase()} is required` },
      ]}
    >
      <S.InputStyled placeholder={placeholderText} height={height!!} />
    </Form.Item>
  );
};

export default InputRoundText;
