import styled from 'styled-components';
import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.white};
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
