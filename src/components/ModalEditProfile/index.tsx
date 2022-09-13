import Modal from "antd/lib/modal/Modal";
import React from "react";
import ButtonStyled from "../ButtonStyled";
import InputRoundText from "../InputRoundText";
import UploadBackgroundImage from "../UploadBackgroundImage";
import UploadProfileImage from "../UploadProfileImage";
import * as S from "./styles";

interface Props {
  isVisible: boolean;
  setIsVisible(value: boolean): void;
}

const ModalEditProfile: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      open={isVisible}
      width="900px"
      onOk={() => setIsVisible(!isVisible)}
      onCancel={() => setIsVisible(!isVisible)}
      footer={null}
      title={<h2 style={{ color: "var(--grey-200)" }}>My profile</h2>}
    >
      <S.Container>
        <S.ContentImages>
          <UploadBackgroundImage />
        </S.ContentImages>
        <S.ContentForm>
          <UploadProfileImage />
          <InputRoundText placeholderText="Name" name="name" />
          <InputRoundText placeholderText="Bio" name="bio" />
          <InputRoundText placeholderText="Password" name="password" />
          <InputRoundText
            placeholderText="Confirm password"
            name="confirm-password"
          />
          <ButtonStyled text="Save" />
        </S.ContentForm>
      </S.Container>
    </Modal>
  );
};
export default ModalEditProfile;
