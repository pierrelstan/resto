import Image from 'next/image';
import styled from 'styled-components';
import { Container, Wrapper } from '@/styles/sharedstyles';
import Button from '../common/Button';
import Description from '../common/Description';
import Titles from '../common/Titles';

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
        <Contact>
          <div>
            <h2>Openings time</h2>
            <Description
              description={'Sunday to Friday | 9:00 AM to 11:00 PM'}
            />
          </div>
          <div>
            <h2>Location</h2>
            <Description description={'New York ,BBRS,332277'} />
          </div>
          <div>
            <h2>Call us</h2>
            <Description description={'+123332445'} />
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
