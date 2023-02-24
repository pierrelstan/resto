import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type StyleLinkProps = {
  href: string;
  path: string;
};
type stateProps = string;

const StyledLink = styled.a<StyleLinkProps>`
  color: ${({ href, path, theme }: any) =>
    href === path ? theme.colors.peach : theme.colors.white};
`;

function ActiveLink({ children, href }: any) {
  const [state, setState] = useState<stateProps>(href);
  const router = useRouter();

  useEffect(() => {
    setState(href);
  }, [href]);

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(state);
  };

  return (
    <StyledLink href={href} onClick={handleClick} path={router.asPath}>
      {children}
    </StyledLink>
  );
}
export default ActiveLink;
