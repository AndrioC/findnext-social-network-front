import React from "react";
import * as S from "./styles";

import logoImg from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <S.Header>
      <img src={logoImg} alt="FindNext" />
    </S.Header>
  );
};
export default Header;
