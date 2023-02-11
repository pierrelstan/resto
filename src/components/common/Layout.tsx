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
const InnerLayout = styled.div`
  padding: 0 2.45rem;
  margin-bottom: 1rem;

  @media (min-width: 1320px) {
    padding: 0 7.45rem;
    width: 100%;
  }
`;
export default function Layout({ children }: any) {
  const date = new Date().getFullYear();
  return (
    <Container>
      <Navbar />
      <InnerLayout>{children}</InnerLayout>
      <Footer date={date} />
    </Container>
  );
}
