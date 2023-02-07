/* eslint-disable react/jsx-key */
import React from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import styled from 'styled-components';
import { IFooterProps } from '@/utils/types';

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
  font-family: 'Poppins', sans-serif;
`;

const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Rights = styled.p`
  font-family: 'Poppins', sans-serif;
`;
const Link = styled.a``;

const Footer: React.FC<IFooterProps> = ({ date }) => {
  const icons = [
    <IoLogoFacebook size={'2em'} />,
    <IoLogoTwitter size={'2em'} />,
    <IoLogoInstagram size={'2em'} />,
  ];

  return (
    <Container data-cy="footer">
      <Title>Follow us on:</Title>
      <WrapperIcons>
        {icons.map((icon, i) => (
          <Link key={i}>{icon}</Link>
        ))}
      </WrapperIcons>
      <Rights>© {date} YayaResto </Rights>
    </Container>
  );
};
export default Footer;
