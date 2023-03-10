import React from 'react';
import Article1 from '@/components/common/Article1';
import Layout from '@/components/common/Layout/Layout';
import BookForm from '@/components/Form/BookForm';
import * as S from '@/components/Form/stylesForm';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

type Props = {};

const Book = (props: Props) => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <div
          style={{
            height: '100vh',
            display: 'grid',
            // display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SharedStyles.Wrapper>
            {/* <Article1 data={data['ten']} /> */}
            <BookForm />
          </SharedStyles.Wrapper>
        </div>
      </Layout>
    </div>
  );
};

export default Book;
