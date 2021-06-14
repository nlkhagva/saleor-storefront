import { styled, media } from "@styles";

// export const Modal = styled.div``;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 100vh;
  
  /*${media.smallScreen`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #fff;
  `}*/
`;

// export const Content = styled.div``;
export const Content = styled.div`
  /*${media.smallScreen`
    position: absolute;
    top: 72px;
    bottom: 85px;
    width: 100%;
    overflow-y: auto;
  `}*/
  padding: ${({ theme: { spacing } }) => `1rem ${spacing.gutter}`};
`;
