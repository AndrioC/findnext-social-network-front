import { Form, Upload } from "antd";
import { RcFile, UploadProps } from "antd/lib/upload";
import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { beforeUpload, fakeRequest, getBase64 } from "../../utils";
import * as S from "./styles";
import placeHolder from "../../assets/placeholder.png";

interface Props {
  setProfileImage(value: any): void;
}

const UploadProfileImage: React.FC<Props> = ({ setProfileImage }) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const config: UploadProps = {
    name: "file",
    maxCount: 1,
    customRequest: (info) => fakeRequest(info.onSuccess),
    onChange(info) {
      setProfileImage(info.file.originFileObj);
      if (info.file) {
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setImageUrl(url);
        });
      }
    },
  };
  return (
    <Form.Item name="profile-image">
      <ImgCrop rotate beforeCrop={beforeUpload}>
        <Upload accept=".png,.jpg,.jpeg" {...config}>
          <S.ButtonStyled
            id="img"
            src={imageUrl ?? placeHolder}
            alt="user-background"
          />
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};

export default UploadProfileImage;
