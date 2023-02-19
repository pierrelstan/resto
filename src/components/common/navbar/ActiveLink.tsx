import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type StyleLinkProps = {
  href: string;
  path: string;
};
const StyledLink = styled.a<StyleLinkProps>`
  color: ${({ href, path, theme }: any) =>
    href === path ? theme.colors.yellow : theme.colors.white};
`;

function ActiveLink({ children, href }: any) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <StyledLink href={href} onClick={handleClick} path={router.asPath}>
      {children}
    </StyledLink>
  );
}
export default ActiveLink;
