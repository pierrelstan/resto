import React from 'react';
import ActiveLink from './ActiveLink';
import * as S from './Navbar.style';

const List: React.FC = () => {
  const array = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'About us', path: '/about' },
    { title: 'Our Story', path: '/story' },
    { title: 'Book a table', path: '/reservation' },
    { title: 'Contact', path: '/contact' },
  ];
  return (
    <>
      {array.map((menu, index) => (
        <S.ListItem key={index}>
          <S.NextLink>
            <ActiveLink href={menu.path} path={menu.path}>
              {menu.title}
            </ActiveLink>
          </S.NextLink>
        </S.ListItem>
      ))}
    </>
  );
};
export default List;
