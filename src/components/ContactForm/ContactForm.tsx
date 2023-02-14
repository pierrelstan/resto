import { useForm, Resolver } from 'react-hook-form';
import FormField from './FormField';
import Button from '../common/Button';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

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
        <input type="text" {...register('name')} placeholder="Name" />
        <input type="email" {...register('email')} placeholder="Email" />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <textarea {...register('message')} placeholder="Message"></textarea>

      <div>
        {' '}
        <Button title="Send Message" type="submit" />
      </div>
    </FormField>
  );
};
export default ContactForm;
