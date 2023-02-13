import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Section } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Article1 from './Article1';
import Button from './Button';

const BigImage = styled(Image)`
  width: 100%;
`;

const WrapperText = styled.div``;

const Reputation = () => {
  return (
    <Section>
      <WrapperText>
        <Article1 data={data['six']} />
        <Button path={'story'} title={'View Our Story'} />
      </WrapperText>
      <BigImage
        src={'/BG.svg'}
        width={300}
        height={300}
        sizes="100vh"
        alt={'big-image'}
      />
    </Section>
  );
};

export default Reputation;
