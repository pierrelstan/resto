import type { NextPage } from 'next';

import Footer from 'src/components/footer/Footer';

import IndexHead from './IndexHead';
import Navbar from '../components/navbar/Navbar';

const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Navbar />
    <Footer />
  </div>
);

export default IndexPage;
