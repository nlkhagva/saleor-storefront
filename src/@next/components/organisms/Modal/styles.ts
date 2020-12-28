import { styled } from "@styles";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 100vh;
`;

export const Content = styled.div`
  overflow: auto;
  padding: ${({ theme: { spacing } }) =>
    `1rem ${spacing.gutter} 1.8rem ${spacing.gutter}`};
`;
