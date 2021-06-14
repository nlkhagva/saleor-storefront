import { styled } from "@styles";
import { getContentWindowHeight } from "@utils/styles";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 100vh;
  height: {
    ${getContentWindowHeight()}px
  }
`;

export const Content = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `1rem ${spacing.gutter} 1.8rem ${spacing.gutter}`};
`;
