import { media, styled } from "@styles";

export const Label = styled.label<{ checked: boolean }>`
  height: 100%;
  min-height: 190px;
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: ${props => (props.checked ? `28px` : `30px`)};
  position: relative;
  border: ${props => (props.checked ? `2px solid #21125E` : `2px solid #ccc`)};
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;

  ${media.smallScreen`
    padding: 30px 20px;
  `}
  &:after{
    content: "${props => (props.checked ? `Сонгосон` : `Сонгох`)}";
    color: ${props => (props.checked ? `#fff` : `inherit`)};
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #323232;
    background-color: ${props =>
      props.checked ? `#21125E` : props.theme.colors.light};
    padding: 3px 10px;
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  display: none;
`;
