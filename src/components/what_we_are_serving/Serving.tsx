import Image from 'next/image';
import styled from 'styled-components';
import { Text } from '@/styles/sharedstyles';
import { servingData } from '@/utils/data';

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 675px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  flex: 33.33%;
  padding: 30px;
  @media (max-width: 920px) {
    padding: 0;
  }
`;
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
        {servingData.map((serve, i) => (
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
