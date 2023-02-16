import React, { useEffect, useState } from 'react';
import { CustomImageProps, ImageProps } from '@/utils/types';
import * as S from '../know_more_about_us/KnowMoreAboutUs.style';

type Image = Array<ImageProps>;

const CustomImage: React.FC<CustomImageProps> = (props) => {
  const [state, setState] = useState<Image>();
  useEffect(() => {
    setState(props.data);
  }, []);
  return (
    <S.WrapperImages>
      {state &&
        state.map((image: any, i) => (
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
