import React from "react";
import FriendSuggestion from "../../components/FriendSuggestion";
import HeaderLogged from "../../components/HeaderLogged";
// import Post from "../../components/Post";
// import PostContentSideBar from "../../components/PostContentSideBar";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <HeaderLogged />
      <S.Content>
        {/* <S.WrapperLeftSide>
          <PostContentSideBar />
        </S.WrapperLeftSide> */}
        {/* <S.WrapperPost>
          <Post />
        </S.WrapperPost> */}
        <FriendSuggestion />
      </S.Content>
    </S.Container>
  );
};

export default Home;
