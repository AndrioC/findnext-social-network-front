import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

interface SideBarContainerProps {
  isOpen: boolean;
}

interface SidebarLinkProps {
  active: boolean;
}

export const SidebarContainer = styled.aside<SideBarContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--grey-200);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  z-index: 1;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--white);
`;

export const Icon = styled.div`
  position: absolute;
  top: 35px;
  right: 25px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: var(--white);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 81px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)<SidebarLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--white);
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    transition: 0.2s ease-in-out;
  }
`;
