import Image from 'next/image';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import * as S from './Header.style';
import Address from '../common/Address';
import Article1 from '../common/Article1';
import Button from '../common/Button/Button';

const Header: React.FC = () => {
  return (
    <SharedStyles.Section>
      <SharedStyles.Wrapper>
        <Article1 data={data['one']} />

        <Button path={'menu'} title={'View Menu'} />
        <S.Info>
          <Address />
        </S.Info>
      </SharedStyles.Wrapper>
      <SharedStyles.Wrapper>
        <S.HeaderImage
          src={'/hero.png'}
          alt="hero-image"
          width={220}
          height={320}
          sizes="100vh"
        />
      </SharedStyles.Wrapper>
    </SharedStyles.Section>
  );
};

export default Header;
