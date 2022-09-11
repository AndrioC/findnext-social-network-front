import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
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
          <S.SidebarLink
            to="profile"
            onClick={toggle}
            smooth
            duration={500}
            spy
            offset={-60}
            active
          >
            <HiOutlineUserCircle size={36} /> Profile
          </S.SidebarLink>
          <S.SidebarLink
            to="home"
            onClick={toggle}
            smooth
            duration={500}
            spy
            offset={-60}
            active
          >
            <BiHomeAlt size={36} /> Home
          </S.SidebarLink>
          <S.SidebarLink
            to="interactions"
            onClick={toggle}
            smooth
            duration={500}
            spy
            offset={-60}
            active
          >
            <AiOutlineHeart size={36} />
            Interactions
          </S.SidebarLink>
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
};

export default SideBar;
