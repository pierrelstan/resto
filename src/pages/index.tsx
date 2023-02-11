import type { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import Header from '@/components/Header/Header';
import KnowMoreAboutUs from '@/components/know_more_about_us/KnowMoreAboutUs';
import Map from '@/components/Map/Map';
import OurMenu from '@/components/our_menu/OurMenu';
import WhatWeAreServing from '@/components/what_we_are_serving/WhatWeAreServing';
import IndexHead from '@/pages/IndexHead';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Header />
      <KnowMoreAboutUs />
      <WhatWeAreServing />
      <OurMenu />
      <Map />
    </Layout>
  </div>
);

export default IndexPage;
