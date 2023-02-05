import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ListProps } from 'utils/types';

const ListItem = styled.li`
  padding: 10px;
  text-transform: uppercase;
  font-size: 24px;
  list-style-type: none;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 845px) {
    font-size: 18px;
  }
`;
const NextLink = styled(Link)<ListProps>`
  color: ${(props) => props.theme.colors.white};
  display: ${(props) =>
    props.list.toUpperCase() === 'LOGOUT' ? 'none' : 'block'}}
  padding:5px 10px;


  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
`;

const List: React.FC = () => {
  const array = [
    'Home',
    'Menu',
    'About us',
    'Our Story',
    'Blog',
    'Contact',
    'Login',
    'Logout',
  ];
  return (
    <>
      {array.map((list, i) => (
        <ListItem key={i}>
          <NextLink href={`${list.toUpperCase()}`} list={list}>
            {list}
          </NextLink>
        </ListItem>
      ))}
    </>
  );
};
export default List;
