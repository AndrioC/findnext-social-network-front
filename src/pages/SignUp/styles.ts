import styled from "styled-components";

import leftImage from "../../assets/background-images/undraw_right_direction_tge8.svg";
import rightImage from "../../assets/background-images/undraw_connected_world_wuay.svg";

export const Container = styled.div`
  height: 100vh;
  background: url(${leftImage}), url(${rightImage});
  background-repeat: no-repeat;
  background-size: 392px 356px, 600px 456px;
  background-position: top 115px left 25px, top 213px right 20px;

  /* Tablet */
  @media (max-width: 993px) and (min-width: 768px) {
    background-color: red;
    background: url(${leftImage}), url(${rightImage});
    background-repeat: no-repeat;
    background-size: 292px 356px, 692px 456px;
    background-position: top 115px left -75px, top 213px right -110px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    height: 100vh;
    background: url(${rightImage});
    background-repeat: no-repeat;
    background-size: 292px 356px;
    background-position: top 545px left 50%;
  }
`;

export const Header = styled.header`
  padding: 30px 0 0 25px;

  /* Mobile */
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperSignUp = styled.div`
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
    height: 590px;
  }
`;

export const WrapperSignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 20px;

  strong {
    font-size: 24px;
  }

  .subtitle-signup {
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

export const WrapperSignIn = styled.div`
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
