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
      : props.theme.colors.grey};
  text-transform: ${(props) =>
    props.color === 'yellow' ? 'uppercase' : 'none'};
  line-height: 110%;
  margin: 0;
  @media (max-width: 920px) {
    font-size: ${(props) =>
      props.color === 'yellow' ? `${props.fontSize}px` : '55px'};
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

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
const TitleImage = styled(Image)``;

export {
  Container,
  Main,
  Title,
  Text,
  CodeTag,
  Wrapper,
  WrapperTitle,
  TitleImage,
};
