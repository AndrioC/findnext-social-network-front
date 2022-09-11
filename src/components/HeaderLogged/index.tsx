import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";

import * as S from "./styles";

const HeaderLogged: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <NavBar isOpen={isOpen} toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </S.Container>
  );
};

export default HeaderLogged;
