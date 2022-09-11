import React from "react";
import ButtonStyled from "../ButtonStyled";
import * as S from "./styles";
import userImg from "../../assets/profile.png";

const FriendSuggestion: React.FC = () => {
  return (
    <S.Container>
      <h3>Suggested for you</h3>
      <S.Content>
        <S.UserInfo>
          <S.UserImage>
            <img src={userImg} alt="user-profile" />
          </S.UserImage>
          <S.UserNameAndLocation>
            <span>Andrio</span>
            <p>Sobral, Brazil</p>
          </S.UserNameAndLocation>
        </S.UserInfo>
        <S.WrapperFollowButton>
          <ButtonStyled text="Follow" />
        </S.WrapperFollowButton>
      </S.Content>
    </S.Container>
  );
};
export default FriendSuggestion;
