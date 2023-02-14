import React from 'react';
import Article1 from '@/components/common/Article1';
import CustomImage from '@/components/common/CustomImage';
import Layout from '@/components/common/Layout';
import ContactForm from '@/components/ContactForm/ContactForm';
import Map from '@/components/Map/Map';
import { Section, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <Section>
          <Wrapper>
            <Article1 data={data['eight']} />
            <ContactForm />
          </Wrapper>
          <CustomImage data={data['featuresImage4']} />
        </Section>
        <Map />
      </Layout>
    </div>
  );
};

export default Contact;
