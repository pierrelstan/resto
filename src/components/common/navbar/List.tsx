import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import * as S from './Navbar.style';

type StyleLinkProps = {
  href: string;
  path: string;
};
type stateProps = string;

const List: React.FC = () => {
  const [state, setState] = useState<stateProps>();
  const router = useRouter();
  const array = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'About us', path: '/about' },
    { title: 'Our Story', path: '/story' },
    { title: 'Book a table', path: '/book' },
    { title: 'Contact', path: '/contact' },
  ];
  // useEffect(() => {
  //   setState(href);
  // }, [state]);

  const handleClick = (menu: any, e: any) => {
    e.preventDefault();
    router.push(menu);
  };
  return (
    <>
      {array.map((menu, index) => (
        <S.ListItem key={index}>
          <S.NextLink>
            <S.StyledLink
              href={menu.path}
              path={router.asPath}
              onClick={(e) => handleClick(menu.path, e)}
            >
              {menu.title}
            </S.StyledLink>
          </S.NextLink>
        </S.ListItem>
      ))}
    </>
  );
};
export default List;
