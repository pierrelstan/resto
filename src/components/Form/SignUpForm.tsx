import React from 'react';
import * as S from '@/styles/sharedstyles';
import { Form, Input } from './Components';
import * as Sform from './stylesForm';
import Button from '../common/Button/Button';
import Titles from '../common/Titles';

type Props = {
  title: string;
};
const SignUpForm = (props: Props) => {
  const onSubmit = (data: any) => console.log(data);
  return (
    <Sform.WrapperLogin>
      <S.WrapperTitleCenter>
        <Titles title={props.title} fontSize={'70'} color={'white'} />
      </S.WrapperTitleCenter>

      <Form onSubmit={onSubmit}>
        <Input name="First name" type="text" />
        <Input name="Last name" type="text" />
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
        <Input name="Confirm password" type="password" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Button title="Sign Up" type="submit" />
        </div>
      </Form>
    </Sform.WrapperLogin>
  );
};

export default SignUpForm;
