import Image from 'next/image';
import styled from 'styled-components';
import Button from '../common/Button';

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.white};
  justify-content: space-around;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 120px;
  gap: 55px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-top: 147px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperImage = styled.div``;
const Title = styled.h1`
  font-size: 70px;
  line-height: 110%;
  margin: 0;
  @media (max-width: 920px) {
    font-size: 55px;
  }
`;
const SubDescription = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.grey};
`;
const Description = styled.p`
  font-size: 22px;
  margin-right: 20px;
  font-family: 'Poppins', sans-serif;
`;

const Contact = styled.div`
  margin-top: 40px;
`;
const HeaderImage = styled(Image)`
  @media (max-width: 1024px) {
    width: 400px;
    height: auto;
  }
`;
const Header: React.FC = () => {
  return (
    <Container>
      <WrapperText>
        <Title data-cy="title">We serve high quality foods of all kinds.</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit error
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit
          error!
        </Description>
        <Button path={'/view-menu'} />
        <Contact>
          <div>
            <h2>Openings time</h2>
            <SubDescription>
              Sunday to Friday | 9:00 AM to 11:00 PM
            </SubDescription>
          </div>
          <div>
            <h2>Location</h2>
            <SubDescription>New York ,BBRS,332277</SubDescription>
          </div>
          <div>
            <h2>Call us</h2>
            <SubDescription>+123332445</SubDescription>
          </div>
        </Contact>
      </WrapperText>
      <WrapperImage>
        <HeaderImage
          src={'/hero.png'}
          alt="hero-image"
          width={690}
          height={758}
          sizes="100vh"
        />
      </WrapperImage>
    </Container>
  );
};

export default Header;
