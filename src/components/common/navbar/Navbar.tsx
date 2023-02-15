import React, { useState } from 'react';
import Link from 'next/link';
import List from '@/components/common/navbar/List';
// eslint-disable-next-line import/order
import * as S from './Navbar.style';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <S.Wrapper toggle={toggle}>
      <S.Nav>
        <S.WrapperLogo>
          <S.Logo src={'/logo.svg'} alt="Logo" width={100} height={100} />
        </S.WrapperLogo>
        <S.Drawer>
          {toggle === false && <S.MenuSharp onClick={handleClick} />}
          {toggle === true && <S.CloseSharp onClick={handleClick} />}
        </S.Drawer>
      </S.Nav>

      <S.ListItems toggle={toggle}>
        <List />
        <S.Button>
          <Link href={'/login'}>LOGIN</Link>
        </S.Button>
      </S.ListItems>
    </S.Wrapper>
  );
};
export default Navbar;
