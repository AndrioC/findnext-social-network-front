import React from "react";
import { BiHomeAlt } from "react-icons/bi";

import { FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, Popover } from "antd";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

import logoImg from "../../assets/logo.svg";
import userImg from "../../assets/profile.png";
import SearchInput from "../SearchInput";
import { useAuth } from "../../hooks/auth";

interface Props {
  isOpen: boolean;
  toggle(): void;
}

const NavBar: React.FC<Props> = ({ isOpen, toggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const content = (
    <Button type="primary" danger onClick={handleLogout}>
      Logout
    </Button>
  );
  return (
    <S.Container className="desktop-menu">
      <S.Content>
        <S.WrapperLogo>
          <img src={logoImg} alt="FindNext" />
        </S.WrapperLogo>
        <S.WrapperNavigationItems>
          <S.WrapperIcons>
            <BiHomeAlt />
            <AiOutlineHeart />
          </S.WrapperIcons>
          <S.WrapperSearchInput>
            <SearchInput />
          </S.WrapperSearchInput>
          <S.MobileIcon isOpen={isOpen} onClick={toggle}>
            <FaBars />
          </S.MobileIcon>
          <Popover content={content} trigger="hover">
            <S.WrapperUserMenu>
              <img src={userImg} alt="user-profile" />
              <strong>{user.name}</strong>
            </S.WrapperUserMenu>
          </Popover>
        </S.WrapperNavigationItems>
      </S.Content>
    </S.Container>
  );
};

export default NavBar;
