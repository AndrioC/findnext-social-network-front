import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
}

const ButtonStyled: React.FC<Props> = ({ text }) => {
  return <S.ButtonStyled>{text}</S.ButtonStyled>;
};

export default ButtonStyled;
