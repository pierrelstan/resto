import React from 'react';
import Article1 from '@/components/common/Article1';
import CustomImage from '@/components/common/CustomImage';
import Layout from '@/components/common/Layout';
import Map from '@/components/Map/Map';
import { Section, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

type Props = {};

const Story = (props: Props) => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <Section>
          <Wrapper>
            <Article1 data={data['seven']} />
          </Wrapper>
          <CustomImage data={data['featuresImage3']} />
        </Section>
        <Map />
      </Layout>
    </div>
  );
};

export default Story;
