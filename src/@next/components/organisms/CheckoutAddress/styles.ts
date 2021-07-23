import { styled } from "@styles";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin: 30px 0;
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0 1.6rem 0;
`;

export const AlertContainer = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffecb5;
  border-radius: 0.25rem;
  color: #664d03;
  padding: 1rem;
`;
export const AlertTitle = styled.h6`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const AlertContent = styled.div``;

export const SuccessContainer = styled.div`
  border: 1px solid #c3e6cb;
  border-radius: 0.25rem;
  padding: 1rem;
  color: #155724;
  background-color: #d4edda;
  margin-bottom: 1rem;
`;
