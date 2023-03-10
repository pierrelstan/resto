import { Form, Input, Message } from './Components';
import Button from '../common/Button/Button';

const LoginForm = () => {
  const onSubmit = (data: any) => console.log(data);
  return (
    <Form onSubmit={onSubmit}>
      <Input name="Email" type="email" />
      <Input name="Password" type="password" />

      <div>
        <Button title="Send Message" type="submit" />
      </div>
    </Form>
  );
};

export default LoginForm;
