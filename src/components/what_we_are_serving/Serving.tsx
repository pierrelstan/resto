import Image from 'next/image';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import * as S from './Serving.style';

const Serving: React.FC = () => {
  return (
    <S.Container>
      <SharedStyles.Columns>
        {data['servingData'].map((serve, i) => (
          <SharedStyles.Column key={i}>
            <Image src={serve.icon} alt="serving-icon" width={70} height={70} />
            <h1>{serve.title}</h1>
            <SharedStyles.Text>{serve.description}</SharedStyles.Text>
          </SharedStyles.Column>
        ))}
      </SharedStyles.Columns>
    </S.Container>
  );
};
export default Serving;
