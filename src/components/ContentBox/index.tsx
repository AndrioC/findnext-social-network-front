import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
  height: number;
}

const ContentBox: React.FC<Props> = ({ text, height }) => {
  return <S.ContentBox placeholder={text} height={height} />;
};

export default ContentBox;
