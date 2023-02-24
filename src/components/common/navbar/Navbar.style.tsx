import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';
// eslint-disable-next-line import/order
import { ListProps, ToggleProps } from '@/utils/types';

type StyleLinkProps = {
  href: string;
  path: string;
};
type stateProps = string;

export const StyledLink = styled.a<StyleLinkProps>`
  color: ${({ href, path, theme }: any) =>
    href === path ? theme.colors.peach : theme.colors.white};
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blackLight};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  @media (max-width: 939px) {
    justify-content: space-between;
    width: 100%;
    position: fixed;
  }
`;

export const ListItems = styled.ul<ToggleProps>`
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

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Drawer = styled.div`
  display: none;
  @media (max-width: 939px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div<ToggleProps>`
  background-color: ${(props) => props.theme.colors.blackLight};
  @media (max-width: 939px) {
    position: fixed;
    width: 100%;
  }
  @media (min-width: 13010px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
export const MenuSharp = styled(IoMenuSharp)`
  font-size: 6em;
  @media (max-width: 939px) {
    font-size: 3em;
  }
`;
export const CloseSharp = styled(IoCloseSharp)`
  font-size: 6em;
  @media (max-width: 939px) {
    font-size: 3em;
  }
`;
export const Logo = styled(Image)``;

export const Button = styled.button`
  border: 1px solid #fff;
  background: ${(props) => props.theme.colors.blackLight};
  border-radius: 5px;
  color: inherit;
  padding: 10px 24px;

  @media (max-width: 960px) {
    margin-left: 20px;
    margin-top: 18px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 700;
  list-style-type: none;
  color: inherit;
  font-family: 'Poppins', sans-serif;
`;
export const NextLink = styled.div`
  display: block;
  padding: 1em;
`;
