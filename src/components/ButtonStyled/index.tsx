import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const ButtonStyled: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <S.ButtonStyled type="button" {...rest}>
      {text}
    </S.ButtonStyled>
  );
};

export default ButtonStyled;
