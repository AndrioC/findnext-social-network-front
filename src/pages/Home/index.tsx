import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import React from "react";
import FriendSuggestion from "../../components/FriendSuggestion";
import HeaderLogged from "../../components/HeaderLogged";
import Post from "../../components/Post";
import PostContentSideBar from "../../components/PostContentSideBar";
import { GQL_PLACES } from "../../graphql/queries/load-places";
import * as S from "./styles";

interface Place {
  id: number;
  description: string;
  location: string;
  image: string;
  userName: {
    id: number;
    name: string;
  };
}

const Home: React.FC = () => {
  const { data: places, loading } = useQuery(GQL_PLACES);

  return (
    <S.Container>
      <HeaderLogged />
      <S.Content>
        <S.WrapperLeftSide>
          <PostContentSideBar />
        </S.WrapperLeftSide>
        <Spin spinning={loading}>
          <S.WrapperPost>
            {places?.listAllPlaces.map((place: Place) => (
              <Post
                key={place.id}
                description={place.description}
                location={place.location}
                owner_name={place.userName.name}
              />
            ))}
          </S.WrapperPost>
        </Spin>
        <S.WrapperRightSide>
          <FriendSuggestion />
        </S.WrapperRightSide>
      </S.Content>
    </S.Container>
  );
};

export default Home;
