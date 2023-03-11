import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import * as S from './stylesForm';

export interface FormValues {
  firstname?: string;
  lastname?: string;
  name?: string;
  email?: string;
  message?: string;
  password?: string;
  date?: string;
  time?: string;
  phone?: string;
  guests?: string;
  singleErrorInput?: string;
}

export function Form({ defaultValues, children, onSubmit }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });
  console.log(children);
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </S.Form>
  );
}

export function Input({ register, name, errors, icons, ...rest }: any) {
  return (
    <div>
      <S.WrapperLabel>
        <S.Label>{name}</S.Label>
        <S.Input
          {...register(name, {
            required: 'This is required',
          })}
          {...rest}
        />
      </S.WrapperLabel>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <S.ErrorMessage>{message}</S.ErrorMessage>}
      />
    </div>
  );
}
export function Message({ register, name, errors, ...rest }: any) {
  return (
    <div>
      <S.Label>{name}</S.Label>
      <div>
        <textarea
          {...register(name, { required: 'This is required' })}
          placeholder="Enter your message"
          {...rest}
        ></textarea>
      </div>

      <div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <S.ErrorMessage>{message}</S.ErrorMessage>}
        />
      </div>
    </div>
  );
}
export function Select({ register, options, icons, name, ...rest }: any) {
  return (
    <div>
      <S.WrapperLabel>
        {icons}
        <select {...register(name)} {...rest}>
          {options.map((value: string) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </S.WrapperLabel>
    </div>
  );
}
