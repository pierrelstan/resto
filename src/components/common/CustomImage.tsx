import React from 'react';
import { CustomImageProps } from '@/utils/types';
import * as S from '../know_more_about_us/KnowMoreAboutUs.style';

const CustomImage: React.FC<CustomImageProps> = (props) => {
  return (
    <S.WrapperImages>
      {props.data.map((image: any, i) => (
        <span key={i}>
          <S.Img
            src={image}
            alt="know_more_about_us_image"
            width={240}
            height={500}
            sizes="100vh"
            title={`${i}`}
          />
        </span>
      ))}
    </S.WrapperImages>
  );
};
export default CustomImage;
