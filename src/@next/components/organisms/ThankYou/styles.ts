import { DefaultTheme, media, styled } from "@styles";

export const Wrapper = styled.div`
  margin: 80px 0;

  ${media.smallScreen`
    margin: 40px 0;
  `}
`;

export const ThankYouHeader = styled.p`
  font-size: ${props => props.theme.typography.ultraBigFontSize};
  margin: 0;
  line-height: 110%;
  span {
    font-weight: ${props => props.theme.typography.boldFontWeight};
  }
  padding-bottom: 40px;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin-bottom: 40px;

  ${media.smallScreen`
    font-size: ${(props: { theme: DefaultTheme }) =>
      props.theme.typography.h2FontSize};
  `}
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.typography.h4FontSize};
  margin: 0;
  line-height: 170%;

  span {
    font-weight: ${props => props.theme.typography.boldFontWeight};
  }
`;

export const Buttons = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  button {
    padding-left: 0;
    padding-right: 0;
  }

  ${media.smallScreen`
    width: 100%;
    margin-top: 20px;
  `}
`;

export const ONum = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  span.b {
    display: inline-block;
    border: 2px solid #707070;
    border-radius: 20px;
    font-size: ${props => props.theme.typography.h3FontSize};
    text-align: center;
    padding-bottom: 5px;
    font-weight: 600;
    span.t {
      display: block;
      font-size: 12px;
      margin: -11px 12px 0;
      padding: 0 10px
      text-transform: uppercase;
      background: #fff;
      font-weight: normal;
    }
  }
`;
