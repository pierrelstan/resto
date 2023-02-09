import Image from 'next/image';
import styled from 'styled-components';
import { Container, Wrapper } from '@/styles/sharedstyles';
import { data, featuresImage } from '@/utils/data';
import { IFeaturesProps } from '@/utils/types';
import Button from '../common/Button';
import Description from '../common/Description';
import Titles from '../common/Titles';

const WrapperImages = styled.div`
  display: flex;
  @media (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 920px) {
    padding-top: 120px;
  }
`;

const Img = styled(Image)<IFeaturesProps>`
  display: flex;
  margin-top: ${(props) => (props.title === '/image1.svg-0' ? '130px' : '0')};
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

const Features = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1360px) {
    flex-wrap: wrap;
  }
`;
const FTitle = styled.h1`
  color: ${(props) => props.theme.colors.cyan};
  font-size: 32px;
`;
const FDescription = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 18px;

  line-height: 1.45em;
`;
const FSubTitle = styled.span`
  color: ${(props) => props.theme.colors.grey};
  font-size: 18px;
`;
const FWrapper = styled.div`
  width: 264px;
  padding-right: 30px;
`;
const FImg = styled(Image)`
  width: 7%;
  height: auto;
  padding-right: 6px;
`;

const KnowMoreAboutUs: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Titles fontSize={'18'} color={'yellow'} title={'know more about us'} />
        <Titles
          fontSize={'70'}
          color={'white'}
          title={'We source sustainable & line caught Foods'}
        />
        <Description
          description={
            '  Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page.'
          }
        />
        <Features>
          {data.map((element, i) => (
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
        <Button path={'view-menu'} />
      </Wrapper>
      <WrapperImages>
        {featuresImage.map((image, i) => (
          <>
            <Img
              src={image}
              alt="know_more_about_us_image"
              width={240}
              height={500}
              sizes="100vh"
              title={`${image}-${i}`}
              key={i}
            />
          </>
        ))}
      </WrapperImages>
    </Container>
  );
};
export default KnowMoreAboutUs;
