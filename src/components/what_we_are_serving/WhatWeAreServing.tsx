import styled from 'styled-components';
import { Container, Wrapper } from '@/styles/sharedstyles';
import Serving from './Serving';
import Description from '../common/Description';
import Titles from '../common/Titles';

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
  gap: 55px;
`;
const Responsive = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 820px) {
    flex-wrap: wrap;
  }
`;

const WhatWeAreServing: React.FC = () => {
  return (
    <SContainer>
      <Container>
        <Wrapper>
          <Titles
            fontSize={'18'}
            color={'yellow'}
            title={'what we are serving'}
          />

          <Titles
            fontSize="70"
            color={'white'}
            title={'We all have to eat, so Why not do it beautifully?'}
          />
        </Wrapper>
        <Description
          description={
            ' Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.Through True Rich Attended does no end it his mother'
          }
        />
      </Container>

      <Serving />
    </SContainer>
  );
};

export default WhatWeAreServing;
