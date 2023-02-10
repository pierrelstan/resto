import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@/styles/sharedstyles';
import { Menu } from './Menu';
import Description from '../common/Description';
import Titles from '../common/Titles';

const Container = styled.div``;

const MContainer = styled.div`
  @media (min-width: 820px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 20px;
  }
`;
const Div = styled.div`
  margin-top: 40px;
`;

type IOurMenuProps = {};

const OurMenu = (props: IOurMenuProps) => {
  return (
    <Container>
      <MContainer>
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
      </MContainer>
      <Menu />
    </Container>
  );
};
export default OurMenu;
