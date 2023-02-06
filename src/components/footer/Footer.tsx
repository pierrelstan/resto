import React from 'react';

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: center;
  height: 300px;
  color: ${(props) => props.theme.colors.white};
`;
const Title = styled.h5`
  font-size: 18px;
  margin: 9px;
`;

const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Rights = styled.p``;
const Link = styled.a``;

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <Title>Follow us on:</Title>
      <WrapperIcons>
        <Link>
          <IoLogoFacebook size={'2em'} />
        </Link>
        <Link>
          <IoLogoTwitter size={'2em'} />
        </Link>
        <Link>
          <IoLogoInstagram size={'2em'} />
        </Link>
      </WrapperIcons>
      <Rights>© {date} YayaResto </Rights>
    </Container>
  );
};
export default Footer;
