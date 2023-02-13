import React from 'react';
import { CustomImageProps } from '@/utils/types';
import { WrapperImages, Img } from '../know_more_about_us/KnowMoreAboutUs';

const CustomImage: React.FC<CustomImageProps> = (props) => {
  return (
    <WrapperImages>
      {props.data.map((image: any, i) => (
        <span key={i}>
          <Img
            src={image}
            alt="know_more_about_us_image"
            width={240}
            height={500}
            sizes="100vh"
            title={`${i}`}
          />
        </span>
      ))}
    </WrapperImages>
  );
};
export default CustomImage;
