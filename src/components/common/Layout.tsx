import styled from 'styled-components';

import Footer from '../footer/Footer';
import Header from '../navbar/Navbar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
export default function Layout({ children }: any) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
