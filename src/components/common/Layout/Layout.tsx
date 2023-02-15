import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';
import * as S from './Layout.style';

export default function Layout({ children }: any) {
  const date = new Date().getFullYear();
  return (
    <S.Container>
      <Navbar />
      <S.InnerLayout>{children}</S.InnerLayout>
      <Footer date={date} />
    </S.Container>
  );
}
