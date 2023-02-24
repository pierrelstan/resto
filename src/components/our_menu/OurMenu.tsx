import React from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import { Menu } from './Menu';
import * as S from './OurMenu.style';
import Article2 from '../common/Article2';
import Button from '../common/Button/Button';

const OurMenu = () => {
  return (
    <S.Container>
      <Article2 data={data['four']} />
      <Menu data={data['ourMenu']} />
      <Button path={'menu'} title={'View More'} />
    </S.Container>
  );
};
export default OurMenu;
