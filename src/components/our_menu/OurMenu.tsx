import React from 'react';
import styled from 'styled-components';
import { data } from '@/utils/data';
import { Menu } from './Menu';
import Article2 from '../common/Article2';
import Button from '../common/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`;

const OurMenu = () => {
  return (
    <Container>
      <Article2 data={data['four']} />

      <Menu data={data['ourMenu']} />
      <Button path={'/view-menu'} />
    </Container>
  );
};
export default OurMenu;
