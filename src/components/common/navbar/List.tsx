import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ListProps } from '@/utils/types';

const ListItem = styled.li`
  text-transform: uppercase;
  font-size: 18px;
  list-style-type: none;
  color: ${(props) => props.theme.colors.white};
  font-family: 'Poppins', sans-serif;
`;
const NextLink = styled(Link)<ListProps>`
  color: ${(props) => props.theme.colors.white};
  display: block;
  padding: 1em;
`;

const List: React.FC = () => {
  const array = ['Home', 'Menu', 'About us', 'Our Story', 'Blog', 'Contact'];
  return (
    <>
      {array.map((list, i) => (
        <ListItem key={i}>
          <NextLink href={`${list}`} list={list}>
            {list !== 'Login' && list.toUpperCase()}
          </NextLink>
        </ListItem>
      ))}
    </>
  );
};
export default List;
