import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form } from "antd";
import * as S from "./styles";

interface Props {
  placeholderText: string;
  name: string;
}

const InputRoundPassword: React.FC<Props> = ({ placeholderText, name }) => {
  const iconRender = (visible: boolean) =>
    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  return (
    <Form.Item name={name}>
      <S.InputStyled
        placeholder={placeholderText}
        iconRender={(visible) => iconRender(visible)}
      />
    </Form.Item>
  );
};

export default InputRoundPassword;
