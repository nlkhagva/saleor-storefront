import { styled } from '@styles';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.theme.spacing.spacer};
    height: calc(100% - 3.75rem);
    overflow: auto;
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

export const Form = styled.form`
 width: 100%;
`;

export const RowWithOneCell = styled.div`
  width: 100%;
`;

export const FormControl = styled.div`
& > button {
  margin-bottom: calc(${props => props.theme.spacing.spacer});
}
`;
