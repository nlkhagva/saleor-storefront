import React, { useCallback } from 'react';

import { Checkbox, InputSelect, TextField } from '@components/molecules';

import * as S from './styles';
import { FormProps } from './types';

const BookingForm: React.FC<FormProps> = ({
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    values,
    ushopId,
    productTypeOptions,
}: FormProps) => {
    const basicInputProps = useCallback(
        () => ({ onBlur: handleBlur, onChange: handleChange }),
        [handleChange, handleBlur]
    );

    // if (errors) {
    //     errors.map(({ field, message }: { field: string; message: string }) => {
    //         fieldErrors[field] = fieldErrors[field]
    //             ? [...fieldErrors[field], { message }]
    //             : [{ message }];
    //     });
    // }

    const fieldErrors: any = {};

    return (
        <S.Wrapper>

            <div className="ushop-title">
                <h4>Та сонгосон барааныхаа</h4>
                <h3>Мэдээллийг оруулна уу!</h3>
            </div>

            <>
                <S.RowWithOneCell>
                    {/* <InputSelect
                    inputProps={{
                        "data-cy": "addressFormCountry",
                    }}
                    defaultValue={defaultValue}
                    label="Country"
                    name="country"
                    options={productTypeOptions}
                    value={
                        values!.country &&
                        countriesOptions &&
                        countriesOptions!.find(
                            option => option.code === values!.country!.code
                        )
                    }
                    onChange={(value: any, name: any) => setFieldValue(name, value)}
                    optionLabelKey="country"
                    optionValueKey="code"
                    errors={fieldErrors!.country}
                /> */}
                </S.RowWithOneCell>
                <S.RowWithTwoCells>
                    <TextField
                        autoComplete="off"
                        type="number"
                        data-cy="bookingPrice"
                        name="price"
                        step=".01"
                        min=".5"
                        label="Үнэ /фунт/"
                        value={values!.price}
                        errors={fieldErrors!.price}
                        {...basicInputProps()}
                    />
                    <TextField
                        autoComplete="off"
                        type="number"
                        data-cy="bookingQuantity"
                        name="quantity"
                        step="1"
                        min="1"
                        label="Тоо ширхэг"
                        value={values!.quantity}
                        errors={fieldErrors!.quantity}
                        {...basicInputProps()}
                    />
                </S.RowWithTwoCells>
                <S.RowWithTwoCells>
                    <TextField
                        autoComplete="off"
                        data-cy="bookingColor"
                        name="color"
                        label="Өнгө"
                        value={values!.color}
                        errors={fieldErrors!.color}
                        {...basicInputProps()}
                    />
                    <TextField
                        autoComplete="off"
                        data-cy="bookingSize"
                        name="size"
                        label="Хэмжээ"
                        value={values!.size}
                        errors={fieldErrors!.size}
                        {...basicInputProps()}
                    />
                </S.RowWithTwoCells>
                <S.RowWithOneCell>
                    <TextField
                        autoComplete="off"
                        data-cy="bookingCode"
                        name="code"
                        label="Барааны код"
                        value={values!.code}
                        errors={fieldErrors!.code}
                        {...basicInputProps()}
                    />
                </S.RowWithOneCell>
                <S.RowWithOneCell>
                    <Checkbox
                        name="isRequired"
                        type="checkbox"
                        label="Заавал авах бараа"
                        value={values!.isRequired}
                        errors={fieldErrors!.isRequired}
                        {...basicInputProps()}
                    />
                </S.RowWithOneCell>
                <S.RowWithOneCell>
                    <TextField
                        autoComplete="off"
                        data-cy="bookingDescription"
                        name="description"
                        label="Нэмэлт санал хүсэлт"
                        value={values!.description}
                        errors={fieldErrors!.description}
                        {...basicInputProps()}
                    />
                </S.RowWithOneCell>
            </>
            {/* <S.RowWithOneCell>
                <InputSelect
                />
            </S.RowWithOneCell> */}


        </S.Wrapper>
    )
}

export { BookingForm }