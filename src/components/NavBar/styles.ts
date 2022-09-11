import styled from "styled-components";

interface MobileIconProps {
  isOpen: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 103px;
  background: var(--white);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: initial;
  }
`;

export const WrapperLogo = styled.div`
  padding: 0 0 0 84px;

  /* Mobile */
  @media screen and (max-width: 767px) {
    padding: 6px 0 0 18px;
    img {
      width: 96px;
    }
  }
`;

export const MobileIcon = styled.div<MobileIconProps>`
  display: none;

  @media screen and (max-width: 767px) {
    display: ${(props) => (props.isOpen ? "none" : "block")};
    position: absolute;
    z-index: 999;
    top: 15px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--grey-200);
  }
`;

export const WrapperNavigationItems = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  padding: 27px 45px 27px 0;

  /* Mobile */
  @media screen and (max-width: 767px) {
    align-items: initial;
  }
`;

export const WrapperIcons = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: var(--grey-200);
    transition: filter 0.3s linear;

    &:hover {
      filter: brightness(40%);
    }
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const WrapperSearchInput = styled.div`
  width: 400px;
  @media screen and (max-width: 767px) {
    width: 220px;
    margin-top: 10px;
    padding: 0 15px 0 0;
  }
`;

export const WrapperUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 152px;
  img {
    width: 42px;
    height: 42px;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
