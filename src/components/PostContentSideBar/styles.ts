import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 610px;
  background: red;
  background: var(--white);
  border-radius: 9px;
  position: fixed;
`;

export const WrapperBackgroundImage = styled.div`
  width: 100%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 180px;
  background: var(--grey-200);
  border-radius: 9px;
`;

export const EditProfileButton = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10px;
`;

export const ProfileImageFollowersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  margin-top: 54px;
`;

export const FollowersInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;

  span {
    font-size: 18px;
  }

  p {
    font-size: 13px;
    font-weight: normal;
  }
`;

export const UserImage = styled.div`
  img {
    height: 54px;
    width: 54px;
    border-radius: 27px;
  }
`;

export const BioInfo = styled.div`
  margin-top: 15px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 90px;
`;

export const WrapperPostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
