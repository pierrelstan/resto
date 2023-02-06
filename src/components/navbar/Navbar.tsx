import { useState } from 'react';

import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

import { ToggleProps } from 'utils/types';

import List from './List';
import Logo from '../common/Logo';

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

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper toggle={toggle}>
      <Nav>
        <WrapperLogo>
          <Logo />
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
