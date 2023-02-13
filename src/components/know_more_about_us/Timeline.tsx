import React from 'react';
import { AProps, TimeLineProps } from '@/utils/types';
import {
  FDescription,
  FImg,
  FSubTitle,
  FTitle,
  FWrapper,
  Features,
} from './KnowMoreAboutUs';

const Timeline: React.FC<TimeLineProps> = (props) => {
  return (
    <Features>
      {props.data.map((element, i) => (
        <FWrapper key={i}>
          <FTitle>
            <FImg
              src={element.image}
              alt="feature-icon"
              width={20}
              height={20}
              sizes="100vh"
            />
            {element.title}
          </FTitle>
          <FSubTitle>{element.subTitle}</FSubTitle>
          <FDescription>{element.description}</FDescription>
        </FWrapper>
      ))}
    </Features>
  );
};

export default Timeline;
