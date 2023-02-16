import React, { useEffect, useState } from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { AProps, ITitleProps } from '@/utils/types';
import Description from './Description';
import Titles from './Titles';

interface TitlesProps {
  fontSize: string;
  color: string;
  title: string;
}
type dataArray = Array<TitlesProps>;

const Article1: React.FC<AProps> = (props: AProps) => {
  const [state, setState] = useState<dataArray>([]);

  useEffect(() => {
    return setState(props.data);
  }, []);

  return (
    <SharedStyles.CustomContainer>
      <SharedStyles.Wrapper>
        {state &&
          state.map((element, i) => (
            <Titles
              fontSize={element.fontSize}
              color={element.color}
              title={element.title}
              key={i}
            />
          ))}
      </SharedStyles.Wrapper>
      <div>
        {props.data.map((element, i) => (
          <div key={i}>
            <Description description={element.description} />
          </div>
        ))}
      </div>
    </SharedStyles.CustomContainer>
  );
};

export default Article1;
