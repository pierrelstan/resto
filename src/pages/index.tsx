import type { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import Header from '@/components/Header/Header';
import IndexHead from '@/pages/IndexHead';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Header />
    </Layout>
  </div>
);

export default IndexPage;
