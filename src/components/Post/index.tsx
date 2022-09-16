import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { Divider } from "antd";
import * as S from "./styles";

import userImg from "../../assets/profile.png";
import ContentBox from "../ContentBox";

interface Props {
  location: string;
  owner_name: string;
  description: string;
  url_image: string;
}

const Post: React.FC<Props> = ({
  location,
  owner_name,
  description,
  url_image,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.ProfileInfo>
          <S.UserImage>
            <img src={userImg} alt="user-profile" />
          </S.UserImage>
          <S.UserNameAndLocation>
            <span>{owner_name}</span>
            <p>{location}</p>
          </S.UserNameAndLocation>
        </S.ProfileInfo>
        <S.Description>
          <p>{description}</p>
        </S.Description>
        <S.PlaceImage>
          <img src={url_image} alt="some-park" />
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
                name="description"
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
