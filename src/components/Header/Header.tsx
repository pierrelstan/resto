import Image from 'next/image';
import styled from 'styled-components';
import { Container, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Address from '../common/Address';
import Article1 from '../common/Article1';
import Button from '../common/Button';

const WrapperImage = styled.div``;

const Info = styled.div`
  margin-top: 60px;
`;
const HeaderImage = styled(Image)`
  width: 100%;
  height: auto;
`;
const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Article1 data={data['one']} />

        <Button path={'menu'} title={'View Menu'} />
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
