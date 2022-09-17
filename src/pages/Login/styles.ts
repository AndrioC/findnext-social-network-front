import styled from "styled-components";

import { Input } from "antd";
import leftImage from "../../assets/background-images/undraw_trip_re_f724.svg";
import leftBottomImage from "../../assets/background-images/undraw_camping_noc8.svg";
import rightCenterImage from "../../assets/background-images/undraw_world_re_768g.svg";

export const Container = styled.div`
  height: 100vh;
  background: url(${leftImage}), url(${leftBottomImage}),
    url(${rightCenterImage}) var(--background);
  background-repeat: no-repeat;
  background-size: 392px 356px, 300px 356px, 892px 456px;
  background-position: top 115px left -75px, top 484px left -15px,
    top 213px right -210px;

  /* Tablet */
  @media (max-width: 993px) and (min-width: 768px) {
    background: url(${leftImage}), url(${leftBottomImage}),
      url(${rightCenterImage}) var(--background);
    background-repeat: no-repeat;
    background-size: 292px 356px, 200px 356px, 692px 456px;
    background-position: top 115px left -75px, top 484px left -15px,
      top 213px right -110px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    background: url(${rightCenterImage}) var(--background);
    background-repeat: no-repeat;
    background-size: 292px 356px;
    background-position: top 545px left 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperLogin = styled.div`
  display: flex;
  background: var(--white);
  width: 526px;
  height: 700px;
  border-radius: 45px;
  flex-direction: column;
  align-items: center;

  /* Mobile */
  @media (max-width: 767px) {
    width: 360px;
    height: 540px;
  }
`;

export const WrapperLoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 33px;

  strong {
    font-size: 24px;
  }

  .subtitle-login {
    font-size: 15px;
    line-height: 21px;
    width: 253px;
    text-align: center;
    font-weight: 400px;
    font-style: normal;
    margin-top: 10px;
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 110px;
  width: 413px;

  /* Mobile */
  @media (max-width: 767px) {
    width: 320px;
  }
`;

export const WrapperSignInButton = styled.div`
  margin-top: 57px;
  width: 413px;

  /* Mobile */
  @media (max-width: 767px) {
    width: 320px;
  }
`;

export const WrapperSignUp = styled.div`
  margin-top: 42px;

  span {
    font-size: 15px;
    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--black);
    }
  }
`;

export const InputStyled = styled(Input.Password)`
  border: 2px solid var(--grey-100);
  border-radius: 10px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: var(--grey-200);

  input {
    ::placeholder {
      color: var(--grey-200);
    }
    font-size: 18px;
    width: 100%;
  }
`;
