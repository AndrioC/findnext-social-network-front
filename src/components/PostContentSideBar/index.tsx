import React from "react";
import { Divider } from "antd";
import * as S from "./styles";

import userImg from "../../assets/profile.png";
import ContentBox from "../ContentBox";
import ButtonStyled from "../ButtonStyled";
import UploadButton from "../UploadButton";
import EditProfileButton from "../EditProfileButton";

const PostContentSideBar: React.FC = () => {
  return (
    <S.Container>
      <S.BackgroundImage>
        <S.EditProfileButton>
          <EditProfileButton />
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
        <ContentBox
          text="Share your thoughts about some place.."
          height={120}
        />
      </S.ContentBox>
      <S.UploadImage>
        <UploadButton />
      </S.UploadImage>
      <Divider />
      <S.WrapperPostButton>
        <ButtonStyled text="Post" />
      </S.WrapperPostButton>
    </S.Container>
  );
};

export default PostContentSideBar;
