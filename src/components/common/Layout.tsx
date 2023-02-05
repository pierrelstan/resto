import styled from 'styled-components';

import Header from '../navbar/Navbar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 50%;
`;
export default function Layout({ children }: any) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
