import Image from 'next/image';
import styled from 'styled-components';
import { IImageProps } from '@/utils/types';

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
  @media (max-width: 539px) {
    font-size: 2em;
  }
`;
const Subtitle = styled.h2`
  color: #eee;
  font-size: 2em;
  padding-bottom: 46px;
  @media (max-width: 539px) {
    font-size: 2em;
  }
}
`;

export default function Maintenance(props: IImageProps) {
  return (
    <Container>
      <Title>Website currently under maintenance</Title>
      <Subtitle>We are currently working hard on this page!</Subtitle>
      <Image
        src={props.image}
        width={350}
        height={450}
        alt="image-maintenance"
        sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{
          width: '40%',
          height: 'auto',
        }}
      />
    </Container>
  );
}
