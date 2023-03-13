import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
    // { title: 'Login', path: '/login' },
  ];
  // useEffect(() => {
  //   setState(href);
  // }, [state]);

  const handleClick = (page: any, e: any) => {
    e.preventDefault();
    router.push(page);
  };
  return (
    <>
      {array.map((page, index) => (
        <S.ListItem key={index}>
          <S.NextLink>
            <S.StyledLink
              href={page.path}
              path={router.asPath}
              onClick={(e) => handleClick(page.path, e)}
            >
              {page.title}
            </S.StyledLink>
          </S.NextLink>
        </S.ListItem>
      ))}
    </>
  );
};
export default List;
