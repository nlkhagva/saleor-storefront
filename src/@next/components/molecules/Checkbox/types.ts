interface IFormError {
  message: string;
  field?: string;
}

export interface IProps {
  name?: string;
  errors?: IFormError[];
  helpText?: string;
  label?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  value?: string | number;
  type?: any;
}
