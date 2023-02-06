import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import image from '../../../public/logo.svg';

const WrapperImage = styled.div`
  margin: 5px;
`;

export default function Logo() {
  return (
    <WrapperImage>
      <Image src={image} alt="logo" width={100} height={100} />
    </WrapperImage>
  );
}
