import { Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Serving from './Serving';
import Article2 from '../common/Article2';

const WhatWeAreServing: React.FC = () => {
  return (
    <Wrapper>
      <Article2 data={data['three']} />
      <Serving />
    </Wrapper>
  );
};

export default WhatWeAreServing;
