import React, { useState } from "react";
import { Divider, Form, notification, Spin } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import * as S from "./styles";

import userImg from "../../assets/profile.png";
import ContentBox from "../ContentBox";
import ButtonStyled from "../ButtonStyled";
import UploadButton from "../UploadButton";
import EditProfileButton from "../EditProfileButton";
import InputRoundText from "../InputRoundText";
import { GQL_CREATE_POST } from "../../graphql/mutations/create-post";
import { GQL_LOAD_USER_DATA } from "../../graphql/queries/load-user-data";
import { GQL_PLACES } from "../../graphql/queries/load-places";
import { useAuth } from "../../hooks/auth";

const PostContentSideBar: React.FC = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState<any>();

  const { user } = useAuth();

  const [createPlace, { loading }] = useMutation(GQL_CREATE_POST);
  const { data } = useQuery(GQL_LOAD_USER_DATA, {
    variables: { id: user.id },
  });

  const handleSubmit = async (values: any) => {
    const dataValues = {
      userId: user.id,
      description: values.description,
      location: values.location,
      image: file[0].originFileObj,
    };

    await createPlace({
      variables: { input: dataValues },
      onError(err) {
        const error = { err };
        notification.error({
          message: "Error when posting place",
          description: error.err.message,
        });
      },
      onCompleted() {
        notification.success({
          message: "Post created successfully",
        });
        form.resetFields();
      },
      refetchQueries: [
        {
          query: GQL_PLACES,
        },
      ],
    });
  };

  return (
    <Spin spinning={loading}>
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
            <span>{data?.listUserData.name}</span>
          </S.BioInfo>
        </S.ProfileInfo>
        <Form form={form} onFinish={handleSubmit}>
          <S.ContentBox>
            <ContentBox
              text="Share your thoughts about some place.."
              name="description"
              height={90}
            />
            <InputRoundText
              placeholderText="City, Country"
              name="location"
              height={33}
            />
            <UploadButton setFile={setFile} />
            <Divider />
            <S.WrapperPostButton>
              <ButtonStyled text="Post" type="submit" />
            </S.WrapperPostButton>
          </S.ContentBox>
        </Form>
        <S.WrapperPostButton />
      </S.Container>
    </Spin>
  );
};

export default PostContentSideBar;
