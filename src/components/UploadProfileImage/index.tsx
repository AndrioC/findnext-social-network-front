import { Form, Upload } from "antd";
import { UploadProps } from "antd/lib/upload";
import React from "react";
import ImgCrop from "antd-img-crop";
import { beforeUpload, fakeRequest } from "../../utils";
import * as S from "./styles";
import placeHolder from "../../assets/placeholder.png";

interface Props {
  setProfileImage(value: any): void;
  image: string;
}

const UploadProfileImage: React.FC<Props> = ({ setProfileImage, image }) => {
  const config: UploadProps = {
    name: "file",
    maxCount: 1,
    customRequest: (info) => fakeRequest(info.onSuccess),
    onChange(info) {
      setProfileImage(info.file.originFileObj);
    },
  };
  return (
    <Form.Item name="profile-image">
      <ImgCrop rotate beforeCrop={beforeUpload}>
        <Upload accept=".png,.jpg,.jpeg" {...config}>
          <S.ButtonStyled
            id="img"
            src={image ?? placeHolder}
            alt="user-background"
          />
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};

export default UploadProfileImage;
