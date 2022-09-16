import { useMutation, useQuery } from "@apollo/client";
import { Form, notification, Spin } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { GQL_UPDATE_USER } from "../../graphql/mutations/update-user";
import ButtonStyled from "../ButtonStyled";
import InputRoundText from "../InputRoundText";
import UploadBackgroundImage from "../UploadBackgroundImage";
import UploadProfileImage from "../UploadProfileImage";
import { useAuth } from "../../hooks/auth";
import * as S from "./styles";
import { GQL_LOAD_USER_DATA } from "../../graphql/queries/load-user-data";

interface Props {
  isVisible: boolean;
  setIsVisible(value: boolean): void;
}

const ModalEditProfile: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  const [form] = Form.useForm();
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState<any>();
  const [backgroundImage, setBackgroundImage] = useState<any>();

  const [updateUser, { loading }] = useMutation(GQL_UPDATE_USER);
  const { data } = useQuery(GQL_LOAD_USER_DATA, {
    variables: { id: user.id },
  });

  const handleSubmit = async (values: any) => {
    const dataValues = {
      id: user.id,
      data: {
        name: values.name,
        password: values.password,
        avatar_image: profileImage,
        background_image: backgroundImage,
      },
    };

    await updateUser({
      variables: { id: dataValues.id, data: dataValues.data },
      onError(err) {
        const error = { err };
        notification.error({
          message: "Error when updating ",
          description: error.err.message,
        });
      },
      onCompleted() {
        notification.success({
          message: "Info updated successfully",
        });
      },
      refetchQueries: [
        {
          query: GQL_LOAD_USER_DATA,
        },
      ],
    });
  };

  return (
    <Spin spinning={loading}>
      <Modal
        open={isVisible}
        width="900px"
        onOk={() => setIsVisible(!isVisible)}
        onCancel={() => setIsVisible(!isVisible)}
        footer={null}
        title={<h2 style={{ color: "var(--grey-200)" }}>My profile</h2>}
      >
        <S.Container>
          <UploadBackgroundImage
            setBackgroundImage={setBackgroundImage}
            image={data?.listUserData.url_background_image}
          />
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={data?.listUserData}
          >
            <S.ContentForm>
              <S.WrapperImage>
                <UploadProfileImage
                  setProfileImage={setProfileImage}
                  image={data?.listUserData.url_avatar_image}
                />
              </S.WrapperImage>
              <InputRoundText placeholderText="Name" name="name" />
              <InputRoundText placeholderText="Password" name="password" />
              <InputRoundText
                placeholderText="Confirm password"
                name="confirm-password"
              />
              <ButtonStyled text="Save" type="submit" />
            </S.ContentForm>
          </Form>
        </S.Container>
      </Modal>
    </Spin>
  );
};
export default ModalEditProfile;
