import { AContainer, Wrapper } from '@/styles/sharedstyles';
import { AProps } from '@/utils/types';
import Description from './Description';
import Titles from './Titles';

const Article2 = (props: AProps) => {
  return (
    <AContainer>
      <Wrapper>
        {props.data.map((element, i) => (
          <Titles
            fontSize={element.fontSize}
            color={element.color}
            title={element.title}
            key={i}
          />
        ))}
      </Wrapper>
      <div>
        {props.data.map((element, i) => (
          <div key={i}>
            <Description description={element.description} />
          </div>
        ))}
      </div>
    </AContainer>
  );
};

export default Article2;
