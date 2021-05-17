import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
`;

export const Bar = styled.div`
  height: 5rem;
  background-color: ${props => props.theme.tile.backgroundColor};
  display: grid;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
  grid-template-areas:
    "filter dropdown"
    "total total";
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  grid-area: filter;
`;

export const RightSide = styled.div`
  height: 1.2rem;
  grid-area: dropdown;
`;
export const BottomSide = styled.div`
  grid-area: total;
`;

export const FiltersButton = styled.button`
  font-size: ${props => props.theme.typography.smallFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Clear = styled.button`
  padding-left: 1rem;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.lightFont};
`;
export const Element = styled.span``;

export const Filters = styled.span`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0.6rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.lightFont};
`;

export const Sort = styled.div`
  width: 12rem;
  display: inline-block;
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;
