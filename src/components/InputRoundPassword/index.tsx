import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import * as S from "./styles";

interface Props {
  placeholderText: string;
}

const InputRoundPassword: React.FC<Props> = ({ placeholderText }) => {
  const iconRender = (visible: boolean) =>
    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  return (
    <S.InputStyled
      placeholder={placeholderText}
      iconRender={(visible) => iconRender(visible)}
    />
  );
};

export default InputRoundPassword;
