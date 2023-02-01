import Image from 'next/image';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding-top: 30px;
  padding-bottom: 10px;

  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  @media (max-width: 386px) {
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 527px) {
    justify-content: center;
    padding: 0;
  }
`;

const List = styled.li`
  padding: 10px;
  text-transform: uppercase;
  font-size: 18px;
  @media (max-width: 845px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 20px;
  border-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 18px;

  @media (max-width: 845px) {
    font-size: 16px;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div>
        <Image src={'/logo.svg'} alt="logo" width={70} height={70} />
      </div>
      <ListItems>
        <List>Home</List>
        <List>Menu</List>
        <List>About us</List>
        <List>Our story</List>
        <List>Blog</List>
        <List>Contact</List>
      </ListItems>
      <div>
        <Button>Login</Button>
      </div>
    </Nav>
  );
}
