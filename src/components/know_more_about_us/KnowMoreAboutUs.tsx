import Image from 'next/image';
import { Section, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Article1 from '../common/Article1';
import Button from '../common/Button/Button';
import CustomImage from '../common/CustomImage';

type KnoMoreAboutUsProps = {
  data: Array<string>;
};
const KnowMoreAboutUs: React.FC<KnoMoreAboutUsProps> = (
  props: KnoMoreAboutUsProps
) => {
  return (
    <Section>
      <Wrapper>
        <Article1 data={data['two']} />

        <Button path={'story'} title={'View Our Story'} />
      </Wrapper>
      <CustomImage data={data['featuresImage']} />
    </Section>
  );
};
export default KnowMoreAboutUs;
