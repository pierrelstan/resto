import type { NextPage } from 'next';
import Article2 from '@/components/common/Article2';
import Layout from '@/components/common/Layout/Layout';
import Map from '@/components/Map/Map';
import { Menu } from '@/components/our_menu/Menu';
import IndexHead from '@/pages/IndexHead';
import { data } from '@/utils/data';

const ViewMenu = () => (
  <div>
    <IndexHead />
    <Layout>
      <Article2 data={data['five']} />
      <Menu data={data['ourMenu2']} />
      <Map />
    </Layout>
  </div>
);

export default ViewMenu;
