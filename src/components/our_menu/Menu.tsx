import Image from 'next/image';
import styled from 'styled-components';
import { Column, Columns } from '@/styles/sharedstyles';
import { MenuProps } from '@/utils/types';

const Container = styled.div``;

const ImageCard = styled(Image)`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h1`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  margin: 0;
  padding: 0;
`;

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  if (!props.data) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Columns>
        {props.data &&
          props.data.map((menu, i) => (
            <Column key={i}>
              <ImageCard
                src={menu.image}
                alt="card-image"
                width={200}
                height={200}
              />
              <CardWrapper>
                <CardTitle>{menu.title}</CardTitle>
                <CardTitle>$ {menu.price}</CardTitle>
              </CardWrapper>
            </Column>
          ))}
      </Columns>
    </Container>
  );
};
