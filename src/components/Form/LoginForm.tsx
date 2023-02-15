import { useForm, Resolver } from 'react-hook-form';
import { FormValues } from './ContactForm';
import FormField from './FormField';
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
        <div className="label">
          <label htmlFor="email">Email:</label>
        </div>
        <input
          type="text"
          {...register('name')}
          placeholder="Enter your Email"
          className="login-input"
        />
        {errors?.email && <p>{errors.email.message}</p>}
        <div className="label">
          <label htmlFor="password">Password:</label>
        </div>
        <input
          type="password"
          {...register('password')}
          placeholder="Enter yout password"
          className="login-input"
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
