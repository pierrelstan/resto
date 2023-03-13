import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import SignUpForm from '@/components/Form/SignUpForm';
import IndexHead from './IndexHead';

const SignUp = () => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <div>
          <SignUpForm title="Sign up" />
        </div>
      </Layout>
    </div>
  );
};
export default SignUp;
