import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponentStyle } from './stylesButton';
interface ButtonModel extends React.HTMLAttributes<HTMLButtonElement> {
  text:string
}

const Button :React.FC<ButtonModel & ButtonHTMLAttributes<ButtonModel>> =({text,type}) =>{ 
  return <ButtonComponentStyle type={type} >{text}</ButtonComponentStyle>;
}
export default Button;