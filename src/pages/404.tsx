import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import image from '../../public/maintenance.png';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 939px) {
    margin-top: 147px;
  }
`;
const Title2 = styled.h1`
  font-size: 4em;
`;
const Title1 = styled.h1`
  font-size: 5em;
`;
const Subtitle = styled.h2`
  color: #eee;
  font-size: 2em;
`;

export interface IMaintenanceProps {
  image: StaticImageData;
}

export default function Maintenance() {
  return (
    <Container>
      <Title1>404</Title1>
      <Title2>Website currently under maintenance</Title2>
      <Subtitle>We are currently working hard on this page!</Subtitle>
      <Image src={image} width={350} height={450} alt="image-maintenance" />
    </Container>
  );
}
