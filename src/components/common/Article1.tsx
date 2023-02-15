import * as SharedStyles from '@/styles/sharedstyles';
import { AProps } from '@/utils/types';
import Description from './Description';
import Titles from './Titles';

const Article1: React.FC<AProps> = (props: AProps) => {
  return (
    <SharedStyles.CustomContainer>
      <SharedStyles.Wrapper>
        {props.data.map((element, i) => (
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
