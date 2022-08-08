import React from 'react';

import { ButtonComponentStyle } from './stylesButton';
interface ButtonModel
{
  text:string
}

const Button :React.FC<ButtonModel> =({text}) =>
{
 
  return <ButtonComponentStyle >{text}</ButtonComponentStyle>;
}
export default Button;