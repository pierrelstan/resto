import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

type Props = {};
const Loading = styled(TailSpin)``;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingSpinner = (props: Props) => {
  return (
    <Container>
      <Loading
        visible={true}
        height="80"
        width="80"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#FFB577"
      />
    </Container>
  );
};

export default LoadingSpinner;
