import type { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import Header from '@/components/Header/Header';
import KnowMoreAboutUs from '@/components/know_more_about_us/KnowMoreAboutUs';
import IndexHead from '@/pages/IndexHead';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Header />
      <KnowMoreAboutUs />
    </Layout>
  </div>
);

export default IndexPage;
