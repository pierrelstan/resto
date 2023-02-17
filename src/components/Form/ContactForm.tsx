import { useForm, Resolver } from 'react-hook-form';
import FormField from './FormField';
import * as S from './stylesForm';
import Button from '../common/Button/Button';

export interface FormValues {
  name?: string;
  email: string;
  message?: string;
  password?: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const ContactForm = () => {
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
          <label htmlFor="name">Name:</label>
        </S.Label>
        <S.Input
          type="text"
          {...register('name')}
          placeholder="Enter your name"
        />
        <S.Label>
          <label htmlFor="email">Email:</label>
        </S.Label>
        <S.Input
          type="email"
          {...register('email')}
          placeholder="Enter your email"
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <S.Label>
        <label htmlFor="message">Message:</label>
      </S.Label>
      <textarea
        {...register('message')}
        placeholder="Enter your message"
      ></textarea>

      <div>
        <Button title="Send Message" type="submit" />
      </div>
    </FormField>
  );
};
export default ContactForm;
