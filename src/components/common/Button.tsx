import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.yellow};
  border: none;
  color: ${(props) => props.theme.colors.black};
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
  cursor: pointer;
`;

interface IButtonProps {
  path: string;
}
const Button: React.FC<IButtonProps> = ({ path }) => {
  return (
    <Link href={`${path}`}>
      <Btn>
        <div>View Menu</div>
        <Image src={'/arrow.svg'} alt="icon-arrow" width={30} height={30} />
      </Btn>
    </Link>
  );
};
export default Button;
