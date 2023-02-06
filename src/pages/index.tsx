import type { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import Maintenance from '@/components/common/Maintenance';
import IndexHead from '@/pages/IndexHead';
import image from '@/public/maintenance.png';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Maintenance image={image} />
    </Layout>
  </div>
);

export default IndexPage;
