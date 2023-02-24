import React from 'react';
import Article1 from '@/components/common/Article1';
import Layout from '@/components/common/Layout/Layout';
import LoginForm from '@/components/Form/LoginForm';
import * as S from '@/components/Header/Header.style';
import Map from '@/components/Map/Map';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

const Login = () => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <SharedStyles.Section>
          <SharedStyles.Wrapper>
            <Article1 data={data['nine']} />

            <LoginForm />
          </SharedStyles.Wrapper>
          <SharedStyles.Wrapper>
            <S.HeaderImage
              src={'/bl.svg'}
              alt="hero-image"
              width={220}
              height={320}
              sizes="100vh"
              priority
            />
          </SharedStyles.Wrapper>
        </SharedStyles.Section>
        <Map />
      </Layout>
    </div>
  );
};

export default Login;
