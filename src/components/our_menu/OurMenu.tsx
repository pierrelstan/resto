import React from 'react';
import styled from 'styled-components';
import { CustomContainer, Wrapper } from '@/styles/sharedstyles';
import { Menu } from './Menu';
import Button from '../common/Button';
import Description from '../common/Description';
import Titles from '../common/Titles';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`;

const Div = styled.div`
  margin-top: 40px;
`;

type IOurMenuProps = {};

const OurMenu = (props: IOurMenuProps) => {
  return (
    <Container>
      <CustomContainer>
        <Wrapper>
          <Titles fontSize={'18'} color={'yellow'} title={'our menu'} />

          <Titles
            fontSize={'70'}
            color={'white'}
            title={'Discover our menu chart'}
          />
          <Div>
            <Titles
              fontSize={'18'}
              color={'cyan'}
              title={'Most Popular Picks'}
            />
          </Div>
        </Wrapper>
        <Description
          description={
            ' Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.Through True Rich Attended does no end it his mother'
          }
        />
      </CustomContainer>
      <Menu />
      <Button path={'/view-menu'} />
    </Container>
  );
};
export default OurMenu;
