import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { Divider } from "antd";
import * as S from "./styles";

import userImg from "../../assets/profile.png";
import placeImg from "../../assets/background-images/arches-national-park-g478e1ec61_1920.jpg";
import ContentBox from "../ContentBox";

const Post: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ProfileInfo>
          <S.UserImage>
            <img src={userImg} alt="user-profile" />
          </S.UserImage>
          <S.UserNameAndLocation>
            <span>Andrio</span>
            <p>Sobral, Brazil</p>
          </S.UserNameAndLocation>
        </S.ProfileInfo>
        <S.Description>
          <p>It&apos;s a great city to visit, it&apos;s hot but is worth it</p>
        </S.Description>
        <S.PlaceImage>
          <img src={placeImg} alt="some-park" />
        </S.PlaceImage>

        <S.InteractionIcons>
          <S.InteractionIconInfo>
            <AiOutlineHeart size={18} />
            <span>2,4k</span>
          </S.InteractionIconInfo>
          <S.InteractionIconInfo>
            <BiCommentDetail size={18} />
            <span>2,4k</span>
          </S.InteractionIconInfo>
          <S.InteractionIconInfo>
            <BsBookmark size={18} />
            <span>2,4k</span>
          </S.InteractionIconInfo>
        </S.InteractionIcons>
        <Divider />
        <S.Bottom>
          <S.CommentSection>
            <S.UserImage>
              <img src={userImg} alt="user-profile" />
            </S.UserImage>
            <S.WrapperContentBox>
              <ContentBox
                text="Share your thoughts about this place"
                height={60}
              />
            </S.WrapperContentBox>
          </S.CommentSection>
        </S.Bottom>
      </S.Content>
    </S.Container>
  );
};

export default Post;
