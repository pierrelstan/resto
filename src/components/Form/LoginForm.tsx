import { useForm, Resolver } from 'react-hook-form';
import { FormValues } from './ContactForm';
import FormField from './FormField';
import * as S from './stylesForm';
import Button from '../common/Button/Button';

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email || values.password ? values : {},
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : !values.password
      ? {
          password: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <FormField onSubmit={onSubmit}>
      <div>
        <S.Label>
          <label htmlFor="email">Email:</label>
        </S.Label>
        <S.Input
          type="text"
          {...register('name')}
          placeholder="Enter your Email"
        />
        {errors?.email && <p>{errors.email.message}</p>}
        <S.Label>
          <label htmlFor="password">Password:</label>
        </S.Label>
        <S.Input
          type="password"
          {...register('password')}
          placeholder="Enter yout password"
        />
        {errors?.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <Button title="Send" type="submit" />
      </div>
    </FormField>
  );
};

export default LoginForm;
