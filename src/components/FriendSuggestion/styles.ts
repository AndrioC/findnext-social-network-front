import styled from "styled-components";

export const Container = styled.div`
  width: 379px;
  border-radius: 9px;
  background: var(--white);
  height: 342px;
  overflow: scroll;
  position: fixed;
  right: 15px;

  h3 {
    margin-top: 15px;
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 0 15px 0 15px;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserImage = styled.div`
  img {
    height: 54px;
    width: 54px;
    border-radius: 27px;
  }
`;

export const UserNameAndLocation = styled.div`
  margin-left: 6px;
  strong {
    font-size: 18px;
  }

  p {
    font-size: 15px;
    color: var(--grey-200);
  }
`;

export const WrapperFollowButton = styled.div`
  width: 108px;
`;
