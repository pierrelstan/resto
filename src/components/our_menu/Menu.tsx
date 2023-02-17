import { useEffect, useState } from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { MenuProps, OurMenuObj } from '@/utils/types';
import * as S from './OurMenu.style';
import LoadingSpinner from '../Loading/LoadingSpinner';

type state = Array<OurMenuObj>;

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const [state, setState] = useState<state>();

  useEffect(() => {
    return setState(props.data);
  }, [props.data]);
  if (!state) {
    return <LoadingSpinner />;
  }
  return (
    <SharedStyles.Wrapper>
      <SharedStyles.Columns>
        {state &&
          state.map((menu, i) => (
            <SharedStyles.Column key={i}>
              <S.ImageCard
                src={menu.image}
                alt="card-image"
                width={200}
                height={200}
              />
              <S.CardWrapper>
                <S.CardTitle>{menu.title}</S.CardTitle>
                <S.CardTitle>$ {menu.price}</S.CardTitle>
              </S.CardWrapper>
            </SharedStyles.Column>
          ))}
      </SharedStyles.Columns>
    </SharedStyles.Wrapper>
  );
};
