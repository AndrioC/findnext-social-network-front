import styled from "styled-components";

interface ContentBoxProps {
  height: number;
}

export const ContentBox = styled.textarea<ContentBoxProps>`
  background: var(--grey-100);
  border-radius: 15px;
  width: 100%;
  height: ${(props) => props.height}px;
  font-size: 13px;
  resize: none;
  padding: 20px;

  /* Mobile */
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
