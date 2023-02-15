import React from 'react';
import { TimeLineProps } from '@/utils/types';
import * as S from './KnowMoreAboutUs.style';

const Timeline: React.FC<TimeLineProps> = (props) => {
  return (
    <S.Features>
      {props.data.map((element, i) => (
        <S.FWrapper key={i}>
          <S.FTitle>
            <S.FImg
              src={element.image}
              alt="feature-icon"
              width={20}
              height={20}
              sizes="100vh"
            />
            {element.title}
          </S.FTitle>
          <S.FSubTitle>{element.subTitle}</S.FSubTitle>
          <S.FDescription>{element.description}</S.FDescription>
        </S.FWrapper>
      ))}
    </S.Features>
  );
};

export default Timeline;
