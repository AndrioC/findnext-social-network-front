import { Upload } from "antd";
import React from "react";
import { CgImage } from "react-icons/cg";
import * as S from "./styles";

const UploadBackgroundImage: React.FC = () => {
  return (
    <Upload>
      <S.ButtonStyled>
        <CgImage size={18} />
        Image
      </S.ButtonStyled>
    </Upload>
  );
};

export default UploadBackgroundImage;
