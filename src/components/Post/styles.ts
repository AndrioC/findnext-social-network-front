import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--white);
  width: 600px;
  height: 570px;
  border-radius: 15px;
  margin-bottom: 45px;
`;

export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 0 0 0 24px;
`;

export const UserImage = styled.div`
  margin-right: 15px;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const UserNameAndLocation = styled.div`
  strong {
    font-size: 18px;
  }

  p {
    font-size: 15px;
    color: var(--grey-200);
  }
`;

export const Description = styled.div`
  margin-bottom: 24px;
  align-self: flex-start;
  padding: 0 0 0 24px;
`;

export const PlaceImage = styled.div`
  img {
    width: 551px;
    height: 297px;
    border-radius: 15px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 551px;
`;

export const CommentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const WrapperContentBox = styled.div`
  width: 290px;
  position: relative;
  margin-left: 6px;
  margin-right: 6px;

  :before {
    content: "";
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-color: transparent var(--grey-100) transparent transparent;
    position: absolute;
    left: -12px;
    top: 20px;
  }
`;

export const InteractionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InteractionIconInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 9px;
  font-size: 15px;
  color: var(--grey-200);

  svg {
    cursor: pointer;
    margin-right: 3px;
  }
`;
