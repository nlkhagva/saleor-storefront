import { styled } from '@styles';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.theme.spacing.spacer};
    margin-bottom: calc(${props => props.theme.spacing.spacer}*4);
`;
export const RowWithTwoCells = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: calc(50% - ${props => props.theme.spacing.fieldSpacer} / 2);
  }
`;



export const RowWithOneCell = styled.div`
  width: 100%;
`;
