import { Divider } from "antd";
import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import * as S from "./styles";

import userImg from "../../assets/profile.png";
import ContentBox from "../ContentBox";
import ButtonStyled from "../ButtonStyled";
import UploadButton from "../UploadButton";

const PostContentSideBar: React.FC = () => {
  return (
    <S.Container>
      <S.BackgroundImage>
        <S.EditProfileButton>
          <BiMessageSquareEdit size={21} />
        </S.EditProfileButton>
      </S.BackgroundImage>
      <S.ProfileInfo>
        <S.ProfileImageFollowersInfo>
          <S.FollowersInfo>
            <span>1994</span>
            <p>Followers</p>
          </S.FollowersInfo>
          <S.UserImage>
            <img src={userImg} alt="user-profile" />
          </S.UserImage>

          <S.FollowersInfo>
            <span>1994</span>
            <p>Following</p>
          </S.FollowersInfo>
        </S.ProfileImageFollowersInfo>
        <S.BioInfo>
          <span>Andrio | Software Engineer</span>
        </S.BioInfo>
      </S.ProfileInfo>
      <S.ContentBox>
        <ContentBox />
      </S.ContentBox>
      <Divider style={{ background: "blue" }} />
      <S.UploadImage>
        <UploadButton />
      </S.UploadImage>

      <S.WrapperPostButton>
        <ButtonStyled text="Post" />
      </S.WrapperPostButton>
    </S.Container>
  );
};

export default PostContentSideBar;
