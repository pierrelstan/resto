import React from 'react';
import Link from 'next/link';
import * as S from './Button.style';

interface IButtonProps {
  path?: string;
  title: string;
  type?: string;
}
const Button: React.FC<IButtonProps> = ({ path, title, type }) => {
  return (
    <div>
      {path && (
        <Link href={`/${path}`}>
          <S.Btn>
            <div>{title}</div>
            <S.ButtonImage
              src={'/btn-arrow.svg'}
              alt="icon-arrow"
              width={30}
              height={30}
            />
          </S.Btn>
        </Link>
      )}
      {!path && (
        <S.Btn>
          <div>{title}</div>
          <S.ButtonImage
            src={'/btn-arrow.svg'}
            alt="icon-arrow"
            width={30}
            height={30}
          />
        </S.Btn>
      )}
    </div>
  );
};
export default Button;
