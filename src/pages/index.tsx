import type { NextPage } from 'next';
import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import IndexHead from './IndexHead';

const Title = styled.h1``;
const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    {/* <Title>Welcome...</Title> */}
    <Navbar />
  </div>
);

export default IndexPage;
