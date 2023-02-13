import Image from 'next/image';
import styled from 'styled-components';
import { Section, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import { IFeaturesProps } from '@/utils/types';
import Article1 from '../common/Article1';
import Button from '../common/Button';
import CustomImage from '../common/CustomImage';

export const WrapperImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 995px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 920px) {
    padding-top: 120px;
  }
`;

export const Img = styled(Image)<IFeaturesProps>`
  display: flex;
  margin-top: ${(props) => (props.title === '0' ? '130px' : '0')};
  margin-right: 50px;

  @media (max-width: 1021px) {
    flex-wrap: wrap;
    margin-top: 0;
    gap: 30px;
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px;
  }
`;

export const Features = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1360px) {
    flex-wrap: wrap;
  }
`;
export const FTitle = styled.h1`
  color: ${(props) => props.theme.colors.cyan};
  font-size: 32px;
`;
export const FDescription = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 18px;

  line-height: 1.45em;
`;
export const FSubTitle = styled.span`
  color: ${(props) => props.theme.colors.grey};
  font-size: 18px;
`;
export const FWrapper = styled.div`
  width: 264px;
  padding-right: 30px;
`;
export const FImg = styled(Image)`
  width: 7%;
  height: auto;
  padding-right: 6px;
`;

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
