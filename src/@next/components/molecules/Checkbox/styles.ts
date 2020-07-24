import { styled } from "@styles";

export const Wrapper = styled.div``;
export const CheckboxStyle = styled.div``;

export const Checkbox = styled.label`
  display: block;
  position: relative;
  padding-left: calc(${props => props.theme.spacing.gutter}*1.2);
  margin-bottom: calc(${props => props.theme.spacing.fieldSpacer}*1.5);
  margin-top: calc(${props => props.theme.spacing.fieldSpacer}*1.5);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: calc(${props => props.theme.spacing.fieldSpacer}*1.5);

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & > .checkmark {
    position: absolute;
    border: 1px solid ${props => props.theme.colors.primaryLight};
    border-radius: ${props => props.theme.borderRadius.small};
    top: 0;
    left: 0;
    height: calc(${props => props.theme.spacing.fieldSpacer}*1.5);
    width: calc(${props => props.theme.spacing.fieldSpacer}*1.5);
  }
  & > .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & > input:checked ~ .checkmark:after {
    display: block;
  }

  & > input:checked ~ .checkmark {
    background-color: white;
    border-color: ${props => props.theme.colors.primary};
  }

  & > .checkmark:after {
    left: 9px;
    top: 4px;
    width: 6px;
    height: 12px;
    border: solid ${props => props.theme.colors.primary};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
Checkbox.displayName = "S.Checkbox";

export const HelpText = styled.span`
  color: ${props => props.theme.input.labelColor};
  font-size: ${props => props.theme.input.labelFontSize};
`;

export const ErrorMessages = styled.div`
  position: absolute;
  top: 100%;
`;
