import { Form, Input, Message } from './Components';
import Button from '../common/Button/Button';

const ContactForm = () => {
  const onSubmit = (data: any) => console.log(data);
  return (
    <Form onSubmit={onSubmit}>
      <Input name="Name" type="text" />
      <Input name="Email" type="email" />
      <Message name="Message" />
      <div>
        <Button title="Send Message" type="submit" />
      </div>
    </Form>
  );
};
export default ContactForm;
