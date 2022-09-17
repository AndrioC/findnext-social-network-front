import { Upload, Form, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import React from "react";
import { CgImage } from "react-icons/cg";
import { beforeUpload, fakeRequest } from "../../utils";
import * as S from "./styles";

interface Props {
  setFile(values: any): void;
}

const UploadButton: React.FC<Props> = ({ setFile }) => {
  const config: UploadProps = {
    name: "file",
    maxCount: 1,
    customRequest: (info) => fakeRequest(info.onSuccess),
    onChange(info) {
      setFile(info.fileList);
    },
  };

  return (
    <Form.Item
      name="post-image"
      rules={[{ required: true, message: "Image is required" }]}
    >
      <ImgCrop rotate beforeCrop={beforeUpload}>
        <Upload accept=".png,.jpg,.jpeg" {...config}>
          <S.ButtonStyled>
            <CgImage size={18} />
            Image
          </S.ButtonStyled>
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};

export default UploadButton;
