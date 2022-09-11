import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  svg {
    color: var(--blue-50);
  }

  &:hover {
    filter: brightness(75%);
  }
`;
