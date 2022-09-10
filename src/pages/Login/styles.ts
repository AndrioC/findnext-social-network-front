import styled from "styled-components";

import leftImage from "../../assets/background-images/undraw_trip_re_f724.svg";
import leftBottomImage from "../../assets/background-images/undraw_camping_noc8.svg";
import rightCenterImage from "../../assets/background-images/undraw_world_re_768g.svg";

export const Container = styled.div`
  background: url(${leftImage}), url(${leftBottomImage}),
    url(${rightCenterImage});
  background-repeat: no-repeat;
  background-size: 392px 356px, 300px 356px, 892px 456px;
  background-position: top 115px left -75px, top 484px left -15px,
    top 213px right -210px;
`;

export const Header = styled.header`
  padding: 30px 0 0 25px;
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
`;

export const WrapperLoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 20px;

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

export const WrapperSignInButton = styled.div`
  margin-top: 57px;
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
