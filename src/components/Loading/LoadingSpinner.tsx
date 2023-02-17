import React from 'react';
import * as S from './LoadingSpinner.style';

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <S.Container>
      <S.Loading
        visible={true}
        height="80"
        width="80"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#FFB577"
      />
    </S.Container>
  );
};

export default LoadingSpinner;
