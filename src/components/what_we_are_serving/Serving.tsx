import Image from 'next/image';
import styled from 'styled-components';
import { Text } from '@/styles/sharedstyles';
import { servingData } from '@/utils/data';

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const Column = styled.div`
  flex: 33.33%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 7.45rem;

  background: ${({ theme }) => theme.colors.black};
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
