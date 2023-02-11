import Image from 'next/image';
import styled from 'styled-components';
import Address from '../common/Address';

const Container = styled.div`
  margin: 0 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;

  gap: 13px;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled(Image)`
  width: 600px;
  height: auto;
  @media (max-width: 920px) {
    width: 100%;
    height: auto;
  }
`;
type Props = {};

const Map = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Address />
        <Img
          src={'/Map.svg'}
          width={300}
          height={300}
          sizes="100vh"
          alt="address-image"
        />
      </Wrapper>
    </Container>
  );
};

export default Map;
