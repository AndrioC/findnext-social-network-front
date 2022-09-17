import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import * as S from "./styles";

interface Props {
  isOpen: boolean;
  toggle(): void;
}

const SideBar: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <S.SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
      className="mobile-menu"
    >
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarLink to="home" onClick={toggle}>
            <BiHomeAlt size={36} /> Home
          </S.SidebarLink>
          <S.SidebarLink to="interactions" onClick={toggle}>
            <AiOutlineHeart size={36} />
            Interactions
          </S.SidebarLink>
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
};

export default SideBar;
