import React from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import { Menu } from './Menu';
import * as S from './OurMenu.style';
import Article2 from '../common/Article2';
import Button from '../common/Button/Button';

const OurMenu = () => {
  return (
    <SharedStyles.Section2>
      <S.Container>
        <Article2 data={data['four']} />
        <Menu data={data['ourMenu']} />
        <Button path={'menu'} title={'View More'} />
      </S.Container>
    </SharedStyles.Section2>
  );
};
export default OurMenu;
