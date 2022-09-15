import { Form, Upload, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/lib/upload";
import React, { useState } from "react";
import { beforeUpload, fakeRequest, getBase64 } from "../../utils";
import * as S from "./styles";
import placeHolder from "../../assets/placeholder.png";

interface Props {
  setBackgroundImage(values: any): void;
}

const UploadBackgroundImage: React.FC<Props> = ({ setBackgroundImage }) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const config: UploadProps = {
    name: "file",
    maxCount: 1,
    customRequest: (info) => fakeRequest(info.onSuccess),
    onChange(info) {
      setBackgroundImage(info.file.originFileObj);
      if (info.file) {
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setImageUrl(url);
        });
      }
    },
  };

  return (
    <Form.Item name="user-background-image">
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

export default UploadBackgroundImage;
