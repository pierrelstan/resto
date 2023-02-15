/* eslint-disable react/jsx-key */
import React from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import { IFooterProps } from '@/utils/types';
import * as S from './Footer.style';

const Footer: React.FC<IFooterProps> = ({ date }) => {
  const icons = [
    <IoLogoFacebook size={'2em'} />,
    <IoLogoTwitter size={'2em'} />,
    <IoLogoInstagram size={'2em'} />,
  ];

  return (
    <S.Container data-cy="footer">
      <S.Title>Follow us on:</S.Title>
      <S.WrapperIcons>
        {icons.map((icon, i) => (
          <div key={i}>
            <S.Link>{icon}</S.Link>
          </div>
        ))}
      </S.WrapperIcons>
      <S.Rights>© {date} YayaResto </S.Rights>
    </S.Container>
  );
};
export default Footer;
