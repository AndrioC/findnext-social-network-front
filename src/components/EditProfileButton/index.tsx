import React, { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import ModalEditProfile from "../ModalEditProfile";
import * as S from "./styles";

const EditProfileButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <S.Container>
        <BiMessageSquareEdit
          size={21}
          onClick={() => setIsVisible(!isVisible)}
        />
      </S.Container>
      <ModalEditProfile isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
};
export default EditProfileButton;
