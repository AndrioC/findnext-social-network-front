import { Form } from "antd";
import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
  height: number;
  name: string;
}

const ContentBox: React.FC<Props> = ({ text, height, name }) => {
  return (
    <Form.Item name={name} style={{ width: "90%" }}>
      <S.ContentBox placeholder={text} height={height} />
    </Form.Item>
  );
};

export default ContentBox;
