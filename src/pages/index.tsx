import type { NextPage } from 'next';

import IndexHead from './IndexHead';
import Navbar from '../components/navbar/Navbar';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Navbar />
  </div>
);

export default IndexPage;
