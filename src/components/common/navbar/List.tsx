import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ListProps } from '@/utils/types';

const ListItem = styled.li`
  padding: 10px;
  text-transform: uppercase;
  font-size: 18px;
  list-style-type: none;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 845px) {
    font-size: 18px;
  }
`;
const NextLink = styled(Link)<ListProps>`
  color: ${(props) => props.theme.colors.white};
  display: block;
`;

const Button = styled.button`
  border: 1px solid #fff;
  background: ${(props) => props.theme.colors.black};
  border-radius: 5px;
  padding: 5px 10px;
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
  ];
  return (
    <>
      {array.map((list, i) => (
        <ListItem key={i}>
          {list === 'Login' && (
            <Button>
              <NextLink href={`${list}`} list={list}>
                {list.toUpperCase()}
              </NextLink>
            </Button>
          )}
          <NextLink href={`${list}`} list={list}>
            {list !== 'Login' && list.toUpperCase()}
          </NextLink>
        </ListItem>
      ))}
    </>
  );
};
export default List;
