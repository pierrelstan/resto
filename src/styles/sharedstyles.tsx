import Image from 'next/image';
import styled from 'styled-components';
import { ITitleProps } from '@/utils/types';

const Section = styled.section`
  display: grid;
  gap: 55px;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 120px;

  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media (max-width: 1340px) {
    overflow: hidden;
  }
`;
const Section2 = styled.section`
  padding-bottom: 120px;
  padding-top: 120px;
`;
const Wrapper = styled.div``;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    gap: 10px;
  }
`;

const Title = styled.h1<ITitleProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.colors.white
      : props.color === 'yellow'
      ? props.theme.colors.yellow
      : props.color === 'cyan'
      ? props.theme.colors.cyan
      : props.theme.colors.grey};
  text-transform: ${(props) =>
    props.color === 'yellow' ? 'uppercase' : 'none'};
  line-height: 110%;
  margin: 0;
  @media (max-width: 920px) {
    font-size: ${(props) =>
      props.color === 'yellow' ? `${props.fontSize}px` : '32px'};
    text-transform: ${(props) =>
      props.color === 'yellow' ? 'uppercase' : 'none'};
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.45em;
`;

const TitleImage = styled(Image)``;

const Columns = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Column = styled.div`
  padding: 1rem;
  height: auto;
`;
const CustomContainer = styled.div`
  display: grid;
  gap: 5px;
  max-width;1200px;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 20px;
  grid-template-columns: repeat(1, 1fr);
`;
const AContainer = styled.div`
  display: grid;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 20px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export {
  Section,
  Main,
  Title,
  Text,
  Wrapper,
  WrapperTitle,
  TitleImage,
  Columns,
  Column,
  CustomContainer,
  AContainer,
  Section2,
};
