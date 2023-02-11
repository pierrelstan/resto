import Image from 'next/image';
import styled from 'styled-components';
import { Column, Columns, Text } from '@/styles/sharedstyles';
import { data } from '@/utils/data';

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media (max-width: 430px) {
    background: none;
  }
`;
const Serving: React.FC = () => {
  return (
    <Container>
      <Columns>
        {data['servingData'].map((serve, i) => (
          <Column key={i}>
            <Image src={serve.icon} alt="serving-icon" width={70} height={70} />
            <h1>{serve.title}</h1>
            <Text>{serve.description}</Text>
          </Column>
        ))}
      </Columns>
    </Container>
  );
};
export default Serving;
