import { Title, TitleImage, WrapperTitle } from '@/styles/sharedstyles';
import { ITitlesProps } from '@/utils/types';

const Titles: React.FC<ITitlesProps> = (props) => {
  return (
    <WrapperTitle>
      <Title data-cy="title1" fontSize={props.fontSize} color={props.color}>
        {props.title}
      </Title>

      {props.color === 'yellow' && (
        <TitleImage
          src={'/line.svg'}
          alt={'arrow-title'}
          width={50}
          height={50}
        />
      )}
    </WrapperTitle>
  );
};
export default Titles;
