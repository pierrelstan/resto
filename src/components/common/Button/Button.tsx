import React from 'react';
import Link from 'next/link';
import * as S from './Button.style';

interface IButtonProps {
  path?: string;
  title: string;
  type?: string;
}
const Button: React.FC<IButtonProps> = ({ path, title }) => {
  return (
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
  );
};
export default Button;
