import React, { useState } from 'react';
import Image from 'next/image';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';
import List from '@/components/common/navbar/List';
// eslint-disable-next-line import/order
import { ToggleProps } from '@/utils/types';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  @media (max-width: 939px) {
    justify-content: space-between;
    width: 100%;
    position: fixed;
  }
`;

const ListItems = styled.ul<ToggleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 939px) {
    display: ${(props) => (props.toggle === false ? 'none' : 'block')};
    flex-direction: column;
    margin-top: 128px;
    height: 100vh;
}
}
  }
`;

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const Drawer = styled.div`
  display: none;
  @media (max-width: 939px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div<ToggleProps>`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  @media (max-width: 939px) {
    position: fixed;
    justify-content: start;
  }
`;
const MenuSharp = styled(IoMenuSharp)`
  font-size: 6em;
  @media (max-width: 939px) {
    font-size: 3em;
  }
`;
const CloseSharp = styled(IoCloseSharp)`
  font-size: 6em;
  @media (max-width: 939px) {
    font-size: 3em;
  }
`;
const Logo = styled(Image)``;

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper toggle={toggle}>
      <Nav>
        <WrapperLogo>
          <Logo src={'/logo.svg'} alt="Logo" width={100} height={100} />
        </WrapperLogo>
        <Drawer>
          {toggle === false && <MenuSharp onClick={handleClick} />}
          {toggle === true && <CloseSharp onClick={handleClick} />}
        </Drawer>
      </Nav>

      <ListItems toggle={toggle}>
        <List />
      </ListItems>
    </Wrapper>
  );
};
export default Navbar;