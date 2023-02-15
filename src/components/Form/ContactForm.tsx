import { useForm, Resolver } from 'react-hook-form';
import FormField from './FormField';
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
        <div className="label">
          <label htmlFor="name">Name:</label>
        </div>
        <input
          type="text"
          {...register('name')}
          placeholder="Enter your name"
          className="contact-input"
        />
        <div className="label">
          <label htmlFor="email">Email:</label>
        </div>
        <input
          type="email"
          {...register('email')}
          placeholder="Enter your email"
          className="contact-input"
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div className="label">
        <label htmlFor="message">Message:</label>
      </div>
      <textarea
        {...register('message')}
        placeholder="Enter your message"
        className="contact-input"
      ></textarea>

      <div>
        <Button title="Send Message" type="submit" />
      </div>
    </FormField>
  );
};
export default ContactForm;
