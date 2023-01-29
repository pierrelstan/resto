import type { NextPage } from 'next';
import styled from 'styled-components';
import IndexHead from './IndexHead';

const Title = styled.h1``;
const IndexPage: NextPage = () => (
  <div>
    <IndexHead />
    <Title>Welcome...</Title>
  </div>
);

export default IndexPage;
