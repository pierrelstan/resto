import styled from 'styled-components';
import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';

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
  const date = new Date().getFullYear();
  return (
    <Container>
      <Navbar />
      {children}
      <Footer date={date} />
    </Container>
  );
}
