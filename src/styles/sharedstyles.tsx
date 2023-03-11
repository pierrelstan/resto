import Image from 'next/image';
import styled from 'styled-components';
import { ITitleProps } from '@/utils/types';

export const Section = styled.section`
  display: grid;
  gap: 55px;
  padding-bottom: 20px;
  padding-top: 120px;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
export const Section2 = styled.section`
  padding-bottom: 120px;
  padding-top: 120px;
`;
export const Wrapper = styled.div``;
export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    gap: 10px;
  }
`;

export const Title = styled.h1<ITitleProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return `${props.theme.colors.white}`;
      case 'peach':
        return `${props.theme.colors.peach}`;
      case 'cyan':
        return `${props.theme.colors.cyan}`;
      default:
        return `${props.theme.colors.grey}`;
    }
  }};
  text-transform: ${(props) =>
    props.color === 'peach' ? 'uppercase' : 'none'};
  line-height: 110%;
  margin: 0;
  @media (max-width: 920px) {
    font-size: ${(props) =>
      props.color === 'peach' ? `${props.fontSize}px` : '22px'};
    text-transform: ${(props) =>
      props.color === 'peach' ? 'uppercase' : 'none'};
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.grey};

  @media (max-width: 820px) {
    font-size: 18px;
  }
`;

export const TextMap = styled.p`
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.grey};
  lin-height: 1rem;
  @media (max-width: 920px) {
    font-size: 18px;
  }
`;

export const TitleImage = styled(Image)``;

export const Columns = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  @media (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Column = styled.div`
  padding: 1rem;
  height: auto;
`;
export const CustomContainer = styled.div`
  display: grid;
  gap: 5px;
  justify-content: center;
  margin-bottom: 20px;
  grid-template-columns: 1fr;
`;
export const AContainer = styled.div`
  display: grid;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const BigImage = styled(Image)`
  width: 100%;
`;
