import { media, styled } from "@styles";

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

export const DiscountField = styled.div`
  background-color: ${props => props.theme.colors.light};
  padding: 30px;

  ${media.smallScreen`
    padding: 30px 20px;
  `}
`;

export const Tile = styled.label<{ checked: boolean }>`
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;
`;

export const TileRow = styled.label<{ checked: boolean }>`
  display: block;
  position: relative;
  float: left;
  width: 48%;
  text-align: center;
  background-color: ${props => props.theme.colors.light};
  border: 2px solid ${props => props.theme.colors.light};
  
  padding: 20px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;
  
  h6 { font-size: ${props => props.theme.typography.smallFont2Size}; }
  h3 { ${props => (props.checked ? `color: #21125E;` : `color: #323232;`)} }

  &.right{float: right;}
  b { font-weight: bold; }
  &:after{
    content: "Сонгох";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #323232;
    background-color: ${props => props.theme.colors.light};
    padding: 3px 10px;
    border-radius: 4px;
  }

  ${props =>
    props.checked &&
    `
    &:after{
      content: "Сонгосон";
      color: #fff;
      border: 1px solid #21125E;
      background-color: #21125E;
    }
  `}
`;

export const Clearbox = styled.div`
  clear: both;
`;
