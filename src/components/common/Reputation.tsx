import React from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Article1 from './Article1';
import Button from './Button/Button';

const Reputation = () => {
  return (
    <SharedStyles.Section>
      <SharedStyles.Wrapper>
        <Article1 data={data['six']} />
        <Button path={'story'} title={'View Our Story'} />
      </SharedStyles.Wrapper>
      <SharedStyles.BigImage
        src={'/BG.svg'}
        width={300}
        height={300}
        sizes="100vh"
        alt={'big-image'}
      />
    </SharedStyles.Section>
  );
};

export default Reputation;
