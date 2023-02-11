import Image from 'next/image';
import styled from 'styled-components';
import { Container, Wrapper } from '@/styles/sharedstyles';
import Address from '../common/Address';
import Button from '../common/Button';
import Description from '../common/Description';
import Titles from '../common/Titles';

const WrapperImage = styled.div``;

const Info = styled.div`
  margin-top: 60px;
`;
const HeaderImage = styled(Image)`
  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;
const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Titles
          fontSize={'70'}
          color={'white'}
          title={'We serve high quality foods of all kinds.'}
        />

        <Description
          description={
            'Through True Rich Attended does no end it his mother sincefavourablereal had half every him case in packages enquire we up ecstatic.Through True Rich Attended does no end it his mother'
          }
        />

        <Button path={'/view-menu'} />
        <Info>
          <Address />
        </Info>
      </Wrapper>
      <WrapperImage>
        <HeaderImage
          src={'/hero.png'}
          alt="hero-image"
          width={220}
          height={320}
          sizes="100vh"
        />
      </WrapperImage>
    </Container>
  );
};

export default Header;
