import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 939px) {
    margin-top: 147px;
  }
`;
const Title = styled.h1`
  font-size: 4em;
`;
const Subtitle = styled.h2`
  color: #eee;
  font-size: 2em;
  padding-bottom: 46px;
}
`;

export interface IMaintenanceProps {
  image: StaticImageData;
}

export default function Maintenance(props: IMaintenanceProps) {
  return (
    <Container>
      <Title>Website currently under maintenance</Title>
      <Subtitle>We are currently working hard on this page!</Subtitle>
      <Image
        src={props.image}
        width={350}
        height={450}
        alt="image-maintenance"
      />
    </Container>
  );
}
