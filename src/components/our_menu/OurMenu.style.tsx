import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-content: center;
`;

export const Wrapper = styled.div``;

export const ImageCard = styled(Image)`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.h1`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  margin: 0;
  padding: 0;
`;
