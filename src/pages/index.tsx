import type { NextPage } from 'next';

import Layout from 'src/components/common/Layout';
import Maintenance from 'src/components/common/Maintenance';

import IndexHead from './IndexHead';
import image from '../../public/maintenance.png';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Layout>
      <Maintenance image={image} />
    </Layout>
  </div>
);

export default IndexPage;
