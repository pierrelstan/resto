import Article1 from '@/components/common/Article1';
import CustomImage from '@/components/common/CustomImage';
import Layout from '@/components/common/Layout';
import Reputation from '@/components/common/Reputation';
import Titles from '@/components/common/Titles';
import {
  FDescription,
  FImg,
  FSubTitle,
  FTitle,
  FWrapper,
  Features,
} from '@/components/know_more_about_us/KnowMoreAboutUs';
import Timeline from '@/components/know_more_about_us/Timeline';
import Map from '@/components/Map/Map';
import { Section, Section2, Wrapper } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import IndexHead from './IndexHead';

const About = () => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <Section>
          <Wrapper>
            <Article1 data={data['two']} />
            <Features>
              {data['timeLine1'].map((element, i) => (
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
          </Wrapper>
          <CustomImage data={data['featuresImage2']} />
        </Section>
        <Reputation />
        <Section2>
          <Titles fontSize={'18'} color={'yellow'} title={'Our History'} />
          <Timeline data={data['timeLine2']} />
        </Section2>
        <Map />
      </Layout>
    </div>
  );
};

export default About;
