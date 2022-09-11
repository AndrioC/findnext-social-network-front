import React from "react";
import HeaderLogged from "../../components/HeaderLogged";
import PostContentSideBar from "../../components/PostContentSideBar";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <HeaderLogged />
      <PostContentSideBar />
    </S.Container>
  );
};

export default Home;
