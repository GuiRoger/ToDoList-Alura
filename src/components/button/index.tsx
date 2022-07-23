import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text:string;  
  id:string;
} 

const Button : React.FC<ButtonProps> = ({text,onChange,id,type}) => {
  return <button type={type} onChange={onChange} id={id}>{text}</button>
}
export default Button;