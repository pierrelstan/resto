import type { NextPage } from 'next';
import Footer from '@/components/common/footer/Footer';
import Layout from '@/components/common/Layout';
import Navbar from '@/components/common/navbar/Navbar';
import Header from '@/components/Header/Header';
import KnowMoreAboutUs from '@/components/know_more_about_us/KnowMoreAboutUs';
import WhatWeAreServing from '@/components/what_we_are_serving/WhatWeAreServing';
import IndexHead from '@/pages/IndexHead';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Header />
      <KnowMoreAboutUs />
      <WhatWeAreServing />
    </Layout>
  </div>
);

export default IndexPage;
