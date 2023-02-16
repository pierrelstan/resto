import * as SharedStyles from '@/styles/sharedstyles';
import { ITitlesProps } from '@/utils/types';

const Titles: React.FC<ITitlesProps> = (props) => {
  return (
    <SharedStyles.WrapperTitle>
      <SharedStyles.Title
        data-cy="title1"
        fontSize={props.fontSize}
        color={props.color}
      >
        {props.title}
      </SharedStyles.Title>

      {props.color === 'yellow' && (
        <SharedStyles.TitleImage
          src={'/line.svg'}
          alt={'arrow-title'}
          width={50}
          height={50}
        />
      )}
    </SharedStyles.WrapperTitle>
  );
};
export default Titles;
