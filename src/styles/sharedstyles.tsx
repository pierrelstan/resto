import Image from 'next/image';
import styled from 'styled-components';
import { ITitleProps } from '@/utils/types';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
  gap: 55px;
  @media (max-width: 920px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 147px;
    gap: 0;
  }
  @media (max-width: 966px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 147px;
    gap: 55px;
  }
`;

const Wrapper = styled.div``;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 10px;
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

export {
  Container,
  Main,
  Title,
  Text,
  Wrapper,
  WrapperTitle,
  TitleImage,
  Columns,
  Column,
};
