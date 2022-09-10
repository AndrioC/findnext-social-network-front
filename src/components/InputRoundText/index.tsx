import React from "react";
import * as S from "./styles";

interface Props {
  placeholderText: string;
}

const InputRoundText: React.FC<Props> = ({ placeholderText }) => {
  return <S.InputStyled placeholder={placeholderText} />;
};

export default InputRoundText;
