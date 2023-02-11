import Image from 'next/image';
import styled from 'styled-components';
import { Text } from '@/styles/sharedstyles';
import Address from '../common/Address';
import Titles from '../common/Titles';

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
  const address = [
    {
      title: 'Working Hour',
      description: 'Sunday to Saturday',
      info: '09:00 AM to 11:00 PM',
    },
    {
      title: 'Location',
      description: 'Street - 127, New York, United States',
      info: '546544',
    },
    {
      title: 'Contact us',
      description: '+123456789',
      info: 'hey@yourdomain.com',
    },
  ];
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
