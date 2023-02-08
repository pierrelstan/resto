import Image from 'next/image';
import styled from 'styled-components';
import { Container, Text, Title, Wrapper } from '@/styles/sharedstyles';
import Button from '../common/Button';

const WrapperImage = styled.div``;

const Contact = styled.div`
  margin-top: 40px;
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
        <Title data-cy="title" fontSize={'70'} color={'white'}>
          We serve high quality foods of all kinds.
        </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit error
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit
          error!
        </Text>
        <Button path={'/view-menu'} />
        <Contact>
          <div>
            <h2>Openings time</h2>
            <Text>Sunday to Friday | 9:00 AM to 11:00 PM</Text>
          </div>
          <div>
            <h2>Location</h2>
            <Text>New York ,BBRS,332277</Text>
          </div>
          <div>
            <h2>Call us</h2>
            <Text>+123332445</Text>
          </div>
        </Contact>
      </Wrapper>
      <WrapperImage>
        <HeaderImage
          src={'/hero.png'}
          alt="hero-image"
          width={320}
          height={420}
          sizes="100vh"
        />
      </WrapperImage>
    </Container>
  );
};

export default Header;
