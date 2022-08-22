import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponentStyle } from './stylesButton';
interface ButtonModel extends React.HTMLAttributes<HTMLButtonElement> {
  text:string
}

const Button :React.FC<ButtonModel> =({text,...props}) =>{ 
  return <ButtonComponentStyle {...props} >{text}</ButtonComponentStyle>;
}
export default Button;