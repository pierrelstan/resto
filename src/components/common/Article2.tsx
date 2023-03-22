import React, { useEffect, useState } from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { AProps } from '@/utils/types';
import Description from './Description';
import Titles from './Titles';

interface AddressObj {
  title: string;
  description: string | Array<string>;
  info?: string;
  color: string;
  fontSize: string;
}
type Address = Array<AddressObj>;

const Article2 = (props: AProps) => {
  const [state, setState] = useState<Address>([]);

  useEffect(() => {
    return setState(props.data);
  }, []);
  return (
    <SharedStyles.AContainer>
      <SharedStyles.Wrapper>
        {state.map((element, i) => (
          <Titles
            fontSize={element.fontSize}
            color={element.color}
            title={element.title}
            key={i}
          />
        ))}
      </SharedStyles.Wrapper>
      <div>
        {state.map((element, i) => (
          <div key={i}>
            <Description description={element.description} />
          </div>
        ))}
      </div>
    </SharedStyles.AContainer>
  );
};

export default Article2;
