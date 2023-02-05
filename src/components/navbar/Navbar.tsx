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

  @media (max-width: 845px) {
    justify-content: space-between;
    margin: 20px;
  }
`;

const ListItems = styled.ul<ToggleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 845px) {
    display: ${(props) => (props.toggle === false ? 'none' : 'block')};
    flex-direction: column;
  }
`;

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const Drawer = styled.div`
  display: none;
  @media (max-width: 845px) {
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
`;

const Wrapper = styled.div<ToggleProps>`
  position: ${(props) => (props.toggle === true ? 'absolute' : 'relative')};
  width: 100%;
`;
const MenuSharp = styled(IoMenuSharp)`
  font-size: 6em;
  @media (max-width: 845px) {
    font-size: 3em;
  }
`;
const CloseSharp = styled(IoCloseSharp)`
  font-size: 6em;
  @media (max-width: 845px) {
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
