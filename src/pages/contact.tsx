import React from 'react';
import Article1 from '@/components/common/Article1';
import CustomImage from '@/components/common/CustomImage';
import Layout from '@/components/common/Layout/Layout';
import ContactForm from '@/components/Form/ContactForm';
import Map from '@/components/Map/Map';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <SharedStyles.Section>
          <SharedStyles.Wrapper>
            <Article1 data={data['eight']} />
            <ContactForm />
          </SharedStyles.Wrapper>
          <CustomImage data={data['featuresImage4']} />
        </SharedStyles.Section>
        <Map />
      </Layout>
    </div>
  );
};

export default Contact;
