import * as S from './Map.style';
import Address from '../common/Address';

type Props = {};

const Map = (props: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperAddress>
          <Address />
        </S.WrapperAddress>
        <S.Img
          src={'/Map.svg'}
          width={300}
          height={300}
          sizes="100vh"
          alt="address-image"
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Map;
