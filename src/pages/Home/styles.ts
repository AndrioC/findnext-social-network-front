import styled from "styled-components";

export const Container = styled.div`
  background: var(--grey-150);
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  /* Tablet */
  @media (max-width: 993px) and (min-width: 768px) {
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const WrapperLeftSide = styled.aside`
  margin-top: 150px;
  padding: 0 0 0 30px;
  display: block;

  /* Tablet */
  @media (max-width: 993px) and (min-width: 768px) {
    display: none;
  }

  /* Mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;
export const WrapperRightSide = styled.aside`
  margin-top: 150px;
  padding: 0 0 30px 60px;

  /* Tablet */
  @media (max-width: 993px) and (min-width: 768px) {
    display: none;
  }

  /* Mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const WrapperPost = styled.div`
  margin-top: 200px;
`;
