export interface IProps {
    productUrl: string;
}

export interface FormProps {
    handleChange?: (e: React.ChangeEvent) => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    handleBlur?: (e: React.FocusEvent) => void;
    setFieldValue: (field: string, value: string) => void;
    setFieldTouched: (field: string, isTouched?: boolean) => void;
    values?: any;
    ushopId: any;
    productTypeOptions?: any;
}
